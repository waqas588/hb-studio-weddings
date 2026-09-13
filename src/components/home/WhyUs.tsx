import { Aperture, BookOpenText, Sparkles, Users2, Wand2, Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    icon: BookOpenText,
    title: "Story-Driven Photography",
    description:
      "We photograph moments as they happen, building a narrative of your day rather than a set of disconnected poses.",
  },
  {
    icon: Wand2,
    title: "Professional Editing",
    description:
      "Every image and film is carefully color-graded and edited before it reaches you — nothing is delivered straight out of camera.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "From the rings to the reception decor, the small details that took months to plan are given deliberate attention.",
  },
  {
    icon: Users2,
    title: "Personalized Coverage",
    description:
      "Every plan is built around your specific events, venues and family — not a one-size-fits-all package.",
  },
  {
    icon: Aperture,
    title: "High-Quality Final Images",
    description:
      "You receive a considered, curated final gallery — quality over quantity, so every image earns its place.",
  },
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "Our team shoots on professional-grade camera and audio equipment suited to fast-moving productions.",
  },
];

export default function WhyUs() {
  return (
    <section className="section bg-ink text-ivory">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Why HB Studio"
            title="Built Around Care and Craft"
            description="A few of the principles behind how we approach every brief we're trusted with."
            className="[&_h2]:text-ivory [&_p]:text-ivory/70"
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4">
                <Icon
                  className="mt-1 h-5 w-5 shrink-0 text-gold-light"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-xl">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
