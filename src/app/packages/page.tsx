import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { packageAddOns, packages } from "@/data/packages";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages",
  description:
  "Wedding photography and cinematography packages from HB Studio Weddings.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <Container>
        <SectionHeading
          kicker="Packages"
          title="Coverage Tiers"
          description="Choose the package that fits your celebration and coverage needs."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className={cn(
                "flex flex-col border p-8",
                pkg.highlighted ? "border-ink bg-ink text-ivory" : "border-ink/15 bg-ivory"
              )}
            >
              {pkg.highlighted && (
                <span className="mb-4 w-fit bg-gold-dark px-3 py-1 text-[10px] tracking-widest2 text-ivory">
                  Standard
                </span>
              )}
              <h2 className="font-display text-2xl">{pkg.name}</h2>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  pkg.highlighted ? "text-ivory/70" : "text-charcoal/70"
                )}
              >
                {pkg.description}
              </p>

              <p
                className={cn(
                  "mt-6 font-display text-2xl italic",
                  pkg.highlighted ? "text-gold-light" : "text-gold-dark"
                )}
              >
                {pkg.priceLabel}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        pkg.highlighted ? "text-gold-light" : "text-gold-dark"
                      )}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className={pkg.highlighted ? "text-ivory/85" : "text-charcoal/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={pkg.highlighted ? "secondary" : "ghost"}
                className="mt-8"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <section className="mt-24">
          <SectionHeading
            kicker="Add-ons"
            title="Build Your Coverage"
            description="Add extra team members and production options to your package."
          />

          <div className="mt-12 grid gap-px overflow-hidden bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {packageAddOns.map((addOn) => (
              <div key={addOn.name} className="bg-ivory p-7 text-center">
                <h2 className="bg-gold-dark px-3 py-3 font-display text-xl text-ivory">
                  {addOn.name}
                </h2>
                <p className="mt-8 font-display text-2xl text-ink">
                  {addOn.priceLabel}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-ink/10 pt-16">
          <SectionHeading
            kicker="Terms & Conditions"
            title="Please Read Before Booking"
            description="Our booking terms help keep expectations clear for every couple and every event."
          />

          <ol className="mt-10 max-w-4xl list-decimal space-y-5 pl-6 text-sm leading-relaxed text-charcoal/80">
            <li>Rates are fixed. The services you receive will be worth more than your expectations.</li>
            <li>
              An initial deposit must be paid at the time of confirmation. The initial deposit is
              non-refundable in case of cancellation.
            </li>
            <li>
              Our payment plan has three instalments: 75% advance at the time of booking, 15% when
              you receive the RAW pictures after your event, and the remaining 10% at final delivery
              of your albums, videos and pictures.
            </li>
            <li>
              We provide the final materials together, including videos, digital albums and pictures.
              RAW pictures must be collected within 15 days of the event. If we receive no information
              from you after one month, the data may be deleted.
            </li>
            <li>
              Album selections must be submitted within one month of receiving the collection. If we
              receive no information after one month, the related data may be removed.
            </li>
            <li>
              HB Studio Weddings holds the right to use photographs and videos for promotional
              purposes on social media.
            </li>
            <li>
              A meeting with the bride and groom before the event is preferred to discuss ideas for
              the shoot and event. Meetings are available by appointment only.
            </li>
            <li>For outstation events, additional accommodation and travel charges may apply.</li>
            <li>
              Couple shoots require at least one hour to be completed properly. Photo editing is kept
              natural and is not over-processed.
            </li>
            <li>
              We have zero tolerance for misbehavior. If a guest misbehaves with a team member, our
              team may leave the event without repercussions. The team is obliged to leave the venue
              in case of any serious misbehavior.
            </li>
            <li>
              The team will be at the venue from 7:30 PM until 1:30 AM. Additional charges apply
              beyond that time. For home-based events, the crew will leave after 12:00 AM unless a
              late stay is agreed, in which case additional charges apply.
            </li>
            <li>
              Please nominate one family contact person for event communication to avoid inconvenience
              and misunderstandings.
            </li>
            <li>
              Event photography includes unlimited photographs. You may later select the best 60
              photographs for the albums.
            </li>
            <li>
              After one month from delivery of the final albums and videos, your data may be removed.
              The cinematic long video is generally 15 to 30 minutes, depending on the event.
            </li>
            <li>
              Testimonial coverage takes place at home after the event, not on the same day, and at
              one location only.
            </li>
            <li>
              HB Studio Weddings is not responsible for data corrupted or lost through personal action
              or an act of God.
            </li>
          </ol>
        </section>

      </Container>
    </div>
  );
}
