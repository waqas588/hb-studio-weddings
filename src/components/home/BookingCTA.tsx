import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-center text-ivory sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(196,164,110,0.14),transparent_60%)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">
            Your Story Deserves to Be Remembered.
          </h2>
          <p className="mt-5 text-base text-ivory/70 sm:text-lg">
            Let&apos;s create something timeless together.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" className="bg-gold-dark hover:bg-gold">
              Book Your Date
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
