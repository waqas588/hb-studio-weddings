import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import { galleryImages } from "@/data/gallery";

export default function FeaturedPortfolio() {
  return (
    <section className="section bg-ivory">
      <Container>
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Our Work"
            title="Frames That Hold A Feeling"
            description="A selection of wedding photography made to keep the atmosphere, emotion and details of your day close."
          />
          <Button href="/portfolio" variant="ghost" className="shrink-0">
            View Full Portfolio
          </Button>
        </Reveal>

        <PortfolioGallery images={galleryImages} />
      </Container>
    </section>
  );
}
