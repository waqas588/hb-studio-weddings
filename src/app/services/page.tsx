import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Corporate event coverage, product photography, fashion shoots and commercial films from HB Studio.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <Container>
        <SectionHeading
          kicker="Services"
          title="Coverage Built Around Your Celebration"
          description="Each service below can stand on its own or be combined into a fuller package — see /packages for tiers, or reach out for a custom plan."
        />
      </Container>

      <div className="mt-20">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reversed = index % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="hairline scroll-mt-28 py-16 sm:py-20"
            >
              <Container>
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
                    <Image
                      src={service.image}
                      alt={`Placeholder photograph representing ${service.title}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <Icon
                      className="h-7 w-7 text-gold-dark"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-charcoal/80">
                      {service.description}
                    </p>

                    <h3 className="mt-8 text-xs tracking-widest2 text-charcoal/50">
                      What&apos;s Included
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {service.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-dark"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button href="/contact" variant="ghost" className="mt-8">
                      Enquire About This Service
                    </Button>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </div>
  );
}
