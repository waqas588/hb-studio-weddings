import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="section bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="What We Offer"
            title="Visuals With A Point Of View"
            description="From high-energy corporate events to tactile product and fashion campaigns, each service is built around the way your audience sees you."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.slug} className="group relative flex flex-col bg-ivory">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {service.slug === "corporate-events" || service.slug === "product-shoots" ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      aria-label="HB Studio wedding photography and event film"
                    >
                      <source
                        src={
                          service.slug === "corporate-events"
                            ? "/videos/wedding-photography-promo.mp4"
                            : "/videos/wedding-event-promo.mp4"
                        }
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Icon className="h-6 w-6 text-gold-dark" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
