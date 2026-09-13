import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { packages } from "@/data/packages";
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

      </Container>
    </div>
  );
}
