import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { weddingStories } from "@/data/stories";

export default function WeddingStories() {
  return (
    <section className="section bg-ivory">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Wedding Stories"
            title="Recently Told"
            description="A closer look at how a few celebrations came together, start to finish."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {weddingStories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5">
                  <Image
                    src={story.image}
                    alt={`Placeholder cover image for ${story.coupleNames}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                  {story.isPlaceholder && (
                    <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 text-[10px] tracking-widest2 text-ivory">
                      Sample Story
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="font-display text-2xl">{story.coupleNames}</h3>
                  <p className="mt-1 text-sm text-gold-dark">{story.eventType}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-charcoal/60">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                    {story.location}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/75">
                    {story.excerpt}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center border-b border-ink/30 pb-0.5 text-sm text-ink/50">
                    View Story — coming soon
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
