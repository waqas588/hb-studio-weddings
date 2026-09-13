import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BookingForm from "@/components/contact/BookingForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Get in touch with HB Studio to discuss your wedding photography and cinematic film.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <Container>
        <SectionHeading
          kicker="Contact"
          title="Let's Talk About Your Wedding"
          description="Share a few details about your wedding below and we'll be in touch to discuss availability, coverage and next steps."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <ContactRow
                icon={Mail}
                label="Email"
                value={siteConfig.contact.email || "To be added"}
                href={siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : undefined}
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={siteConfig.contact.phone || "To be added"}
                href={
                  siteConfig.contact.phone
                    ? `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`
                    : undefined
                }
              />
              <ContactRow icon={MapPin} label="Based in" value="Pakistan" />
            </div>

            <div className="mt-8">
              <WhatsAppButton className="w-full justify-center sm:w-auto" />
            </div>

            {siteConfig.contact.isPlaceholder && (
              <p className="mt-8 max-w-sm text-xs leading-relaxed text-charcoal/50">
                Contact details shown here are placeholders. Set
                NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CONTACT_PHONE and
                NEXT_PUBLIC_WHATSAPP_NUMBER before launch.
              </p>
            )}
          </div>

          <div className="lg:col-span-8">
            <BookingForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="inline-flex items-center gap-3">
      <Icon className="h-4 w-4 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
      {value}
    </span>
  );

  return (
    <div>
      <p className="text-xs tracking-widest2 text-charcoal/40">{label}</p>
      <p className="mt-1.5 text-sm text-ink">
        {href ? (
          <a href={href} className="transition-colors hover:text-gold-dark">
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
