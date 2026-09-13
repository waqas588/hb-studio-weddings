"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  contactFormDefaults,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full border border-ink/20 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 transition-colors duration-200 focus:border-ink focus:outline-none";

export default function BookingForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setState("submitting");
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (!response.ok || !result.success) {
        setServerError(
          result.message ?? "Something went wrong. Please try again or reach out via WhatsApp."
        );
        setState("error");
        return;
      }

      setState("success");
      reset(contactFormDefaults);
    } catch {
      setServerError(
        "We couldn't reach the server. Please check your connection and try again."
      );
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 border border-ink/10 bg-ivory px-8 py-16 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-gold-dark" strokeWidth={1.25} aria-hidden="true" />
        <h2 className="font-display text-2xl">Thank You</h2>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal/70">
          Your inquiry has been received. We&apos;ll be in touch to discuss your
          date and coverage as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-2 text-sm text-ink underline decoration-ink/30 underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users via CSS, left in the tab order
          for screen readers but labeled so assistive tech can skip it. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Leave this field empty</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={fieldBase}
            {...register("fullName")}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldBase}
            {...register("email")}
          />
        </Field>

        <Field label="Phone / WhatsApp" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldBase}
            {...register("phone")}
          />
        </Field>

        <Field label="Wedding Date" htmlFor="weddingDate" error={errors.weddingDate?.message}>
          <input
            id="weddingDate"
            type="date"
            className={fieldBase}
            {...register("weddingDate")}
          />
        </Field>

      </div>

      <Field label="Message (optional)" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          maxLength={1000}
          className={cn(fieldBase, "resize-y")}
          placeholder="Tell us a little about your wedding..."
          {...register("message")}
        />
      </Field>

      {serverError && (
        <p role="alert" className="border border-red-800/20 bg-red-50 px-4 py-3 text-sm text-red-800">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || state === "submitting"}
        className="inline-flex items-center gap-2 bg-ink px-8 py-3.5 text-sm tracking-wide text-ivory transition-colors duration-300 ease-editorial hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {(isSubmitting || state === "submitting") && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        Send Inquiry
      </button>

      <p className="text-sm text-charcoal/60">
        We&apos;ll get back to you within 24–48 hours.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm text-ink/80">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
