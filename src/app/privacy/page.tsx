import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <Container className="max-w-3xl">
        <SectionHeading kicker="Legal" title="Privacy Policy" />

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <p className="border border-gold-dark/30 bg-beige/40 p-4 text-xs text-charcoal/60">
            Placeholder legal copy. This page must be reviewed and finalized
            by a qualified legal professional before the site goes live —
            it does not constitute legal advice and should not be relied
            upon as a complete privacy policy.
          </p>

          <p>
            This Privacy Policy describes how {siteConfig.name}
            (&quot;we&quot;, &quot;us&quot;) collects, uses and protects
            information submitted through this website, including the
            contact and booking inquiry form.
          </p>

          <h2 className="font-display text-xl text-ink">Information We Collect</h2>
          <p>
            When you submit the booking inquiry form, we collect the
            information you provide, such as your name, email address,
            phone number, project date, venue, city and any message you
            include.
          </p>

          <h2 className="font-display text-xl text-ink">How We Use Information</h2>
          <p>
            Information submitted through this website is used solely to
            respond to your inquiry and discuss your photography or
            videography needs. We do not sell or share your information
            with third parties for marketing purposes.
          </p>

          <h2 className="font-display text-xl text-ink">Data Retention</h2>
          <p>
            [Placeholder — specify how long inquiry data is retained and
            how it is stored once a real backend/CRM provider is
            configured.]
          </p>

          <h2 className="font-display text-xl text-ink">Cookies</h2>
          <p>
            [Placeholder — describe any cookies or analytics tools used on
            this website, if any are added.]
          </p>

          <h2 className="font-display text-xl text-ink">Contact Us</h2>
          <p>
            Questions about this policy can be directed to{" "}
            {siteConfig.contact.email || "[email to be added]"}.
          </p>
        </div>
      </Container>
    </div>
  );
}
