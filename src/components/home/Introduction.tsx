import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Introduction() {
  return (
    <section className="section bg-ivory">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Your Vision,
            <br />
            In Full Colour.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="text-lg leading-relaxed text-charcoal/80">
            HB Studio creates photography and film that makes people stop,
            look closer and remember the feeling. We bring an editorial eye,
            careful lighting and a calm set to every brief.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
            From a fast-moving corporate event to a considered product or
            fashion shoot, every production is shaped around your audience,
            your brand and the result you need to put into the world.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
