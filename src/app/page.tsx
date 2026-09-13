import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUs from "@/components/home/WhyUs";
import InstagramSection from "@/components/home/InstagramSection";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "HB Studio | Commercial Photography & Film",
  description:
    "Commercial photography and cinematic films for brands, corporate events, products and fashion.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedPortfolio />
      <ServicesOverview />
      <WhyUs />
      <InstagramSection />
      <BookingCTA />
    </>
  );
}
