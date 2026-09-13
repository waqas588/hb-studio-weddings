import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <Container className="max-w-3xl">
        <SectionHeading kicker="Legal" title="Terms & Conditions" />

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <p className="border border-gold-dark/30 bg-beige/40 p-4 text-xs text-charcoal/60">
            Placeholder legal copy. This page must be reviewed and finalized
            by a qualified legal professional before the site goes live —
            it does not constitute legal advice and should not be relied
            upon as complete terms of service.
          </p>

          <p>
            These Terms &amp; Conditions govern use of the {siteConfig.name}
            {" "}website and any booking inquiries submitted through it.
          </p>

          <h2 className="font-display text-xl text-ink">Use of This Website</h2>
          <p>
            This website is provided for the purpose of showcasing our
            commercial photography and film services and allowing
            prospective clients to request availability and pricing
            information.
          </p>

          <h2 className="font-display text-xl text-ink">Bookings</h2>
          <p>
            Submitting the inquiry form does not constitute a confirmed
            booking. [Placeholder — describe the actual booking process,
            deposit requirements and confirmation steps once finalized.]
          </p>

          <h2 className="font-display text-xl text-ink">Intellectual Property</h2>
          <p>
            [Placeholder — describe ownership and usage rights for
            photographs and films delivered to clients.]
          </p>

          <h2 className="font-display text-xl text-ink">Cancellations &amp; Rescheduling</h2>
          <p>
            [Placeholder — specify cancellation, rescheduling and refund
            terms once finalized with the client.]
          </p>

          <h2 className="font-display text-xl text-ink">Contact Us</h2>
          <p>
            Questions about these terms can be directed to{" "}
            {siteConfig.contact.email || "[email to be added]"}.
          </p>
        </div>
      </Container>
    </div>
  );
}
