import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Client Words"
            title="What Couples Share"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <figure className="relative h-full border border-ink/10 bg-ivory p-8">
                {t.isPlaceholder && (
                  <span className="absolute right-4 top-4 text-[10px] tracking-widest2 text-charcoal/40">
                    Sample Testimonial
                  </span>
                )}
                <Quote
                  className="h-6 w-6 text-gold-dark"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <blockquote className="mt-4 text-base leading-relaxed text-charcoal/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-ink">{t.name}</span>
                  <span className="text-charcoal/50"> — {t.eventType}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
