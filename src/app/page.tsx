import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";
import ServicesOverview from "@/components/home/ServicesOverview";
import PackagesPreview from "@/components/home/PackagesPreview";
import WhyUs from "@/components/home/WhyUs";
import InstagramSection from "@/components/home/InstagramSection";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "HB Studio Weddings | Photography & Films",
  description:
    "Wedding photography and cinematic films crafted with an editorial eye for the moments that matter most.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedPortfolio />
      <ServicesOverview />
      <PackagesPreview />
      <WhyUs />
      <InstagramSection />
      <BookingCTA />
    </>
  );
}
