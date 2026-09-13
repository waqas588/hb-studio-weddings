import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse wedding photography and fashion shoots from HB Studio Weddings.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <Container>
        <SectionHeading
          kicker="Portfolio"
          title="Moments We've Been Trusted With"
          description="A growing collection of wedding photography and fashion shoots. Filter by category or browse it all."
        />
      </Container>

      <Container className="mt-14 pb-24">
        <PortfolioGallery images={galleryImages} />
      </Container>
    </div>
  );
}
