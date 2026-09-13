import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { packages } from "@/data/packages";

export default function PackagesPreview() {
  return (
    <section className="section bg-paper">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Our Packages"
            title="Coverage For Every Celebration"
            description="Choose a considered starting point for your day, then add the people and details that matter to you."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Reveal key={pkg.slug} delay={pkg.highlighted ? 0.08 : 0}>
              <Link
                href="/packages"
                className="group block border border-ink/10 bg-ivory text-center transition-transform duration-500 hover:-translate-y-1"
              >
                <h3 className="bg-gold-dark px-4 py-3 font-display text-xl text-ivory">
                  {pkg.name}
                </h3>
                <p className="px-6 pb-8 pt-7 font-display text-2xl text-ink">
                  {pkg.priceLabel}
                </p>
                <span className="inline-block border-b border-ink/30 pb-1 text-xs tracking-widest2 text-charcoal/60 transition-colors group-hover:border-gold-dark group-hover:text-gold-dark">
                  View Package
                </span>
                <div className="h-8" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}