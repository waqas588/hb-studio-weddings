import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "The philosophy and approach behind HB Studio's commercial photography and film.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-ink">
        <Image
          src="/images/about/IMG_3913.jpeg"
          alt="Wedding couple walking through a garden at their celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
        />
        <Container className="relative pb-16 pt-32">
          <p className="kicker text-gold-light">About HB Studio</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl italic text-ivory sm:text-5xl">
            A Studio Built on Honest Storytelling
          </h1>
        </Container>
      </section>

      <section className="section bg-ivory">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              title="Our Philosophy"
              description=""
            />
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Studio introduction copy to be finalized with the client —
              this section will describe HB Studio&apos;s background, founding
              story and approach to commercial photography and film.
            </p>
            <p className="mt-6 text-base leading-relaxed text-charcoal/80">
              Our approach favors observation over direction: being present
              for the moments that happen on their own, and stepping in with
              a gentle hand only where a photograph or shot genuinely
              benefits from it. The goal on every production is a body of
              work that feels true to the brand and the brief.
            </p>
          </div>
        </Container>
      </section>

      <section className="section hairline bg-paper">
        <Container>
          <SectionHeading
            kicker="The Team"
            title="Who You'll Work With"
            description="Meet the founder behind the studio and its visual approach."
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 1).map((member) => (
              <div key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5">
                  <Image
                    src={member.image}
                    alt={`Placeholder portrait for ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl">{member.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
