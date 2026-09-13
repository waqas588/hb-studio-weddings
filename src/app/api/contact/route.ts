import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Booking inquiry endpoint.
 *
 * This route validates, rate-limits and sends inquiries through Resend.
 * Configure RESEND_API_KEY and CONTACT_FORM_TO_EMAIL on the server.
 */
export async function POST(request: NextRequest) {
  // Basic IP-based rate limiting. Reads the platform-provided header
  // when present (Vercel/Netlify populate this); falls back to a
  // shared bucket if it's ever missing, which just means everyone
  // shares one limit rather than the limiter failing open.
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  const { allowed, retryAfterSeconds } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Please try again shortly.",
      },
      {
        status: 429,
        headers: retryAfterSeconds
          ? { "Retry-After": String(retryAfterSeconds) }
          : undefined,
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot check: a filled `company` field means a bot filled in a
  // field real visitors never see. Reject quietly with a generic
  // success-shaped response so bots don't learn the honeypot exists.
  if (data.company) {
    return NextResponse.json({ success: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_FORM_TO_EMAIL ?? "handsomhabib@gmail.com";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        success: false,
        message: "Email delivery is not configured yet. Please contact us directly.",
      },
      { status: 503 }
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "HB Studio Weddings <onboarding@resend.dev>",
      to: [recipient],
      reply_to: data.email,
      subject: `New wedding inquiry from ${data.fullName}`,
      text: [
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone / WhatsApp: ${data.phone}`,
        `Wedding date: ${data.weddingDate}`,
        "",
        "Message:",
        data.message || "No message provided.",
      ].join("\n"),
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json(
      { success: false, message: "We could not send your inquiry. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thank you — your inquiry has been received.",
  });
}
