import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Introduction() {
  return (
    <section className="section bg-ivory">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Your Day,
            <br />
            Beautifully Remembered.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="text-lg leading-relaxed text-charcoal/80">
            HB Studio creates wedding photography and film that holds onto
            the atmosphere of your day: the quiet anticipation, the people
            you love and the moments you never planned.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
            We bring an editorial eye, careful lighting and a calm presence
            to every celebration, so the final work feels honest, timeless
            and entirely yours.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
