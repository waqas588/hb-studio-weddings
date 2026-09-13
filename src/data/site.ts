/**
 * Central site configuration.
 *
 * This is the single place to update the business's public-facing
 * details. Everything here is sourced from environment variables so
 * real contact information never needs to be hardcoded into
 * components or committed as a fallback value in source control.
 *
 * Set the corresponding NEXT_PUBLIC_* variables in `.env.local`
 * (development) and in your hosting provider's dashboard
 * (production). See `.env.example` for the full list.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://www.hbstudioweddings.com";

const rawWhatsApp =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+92 313 2571447";
// WhatsApp deep links require digits only (country code, no + or spaces).
const whatsAppDigits = rawWhatsApp.replace(/[^\d]/g, "");

export const siteConfig = {
  name: "HB Studio Weddings",
  shortName: "HB Studio",
  tagline: "Bold Images. Beautifully Made.",
  description:
    "HB Studio is a visual production studio creating bold photography and cinematic films for brands, corporate events, products and fashion.",
  url: siteUrl,
  ogImage: "/images/hero/hero-main.svg",
  locale: "en_US",
  keywords: [
    "HB Studio Weddings",
    "Corporate Event Photography",
    "Product Photography",
    "Fashion Photography",
    "Commercial Photography Pakistan",
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "handsomhabib@gmail.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+92 313 2571447",
    // Digits-only number used to build wa.me links.
    whatsAppDigits,
    whatsAppUrl: whatsAppDigits ? `https://wa.me/${whatsAppDigits}` : "",
    instagramUrl:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/hbstudioweddings/",
    facebookUrl:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ??
      "https://www.facebook.com/Hbstudioweddings/",
    // Shown in the UI so a developer/client immediately knows contact
    // details have not been supplied yet, instead of silently hiding.
    isPlaceholder: false,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "What We Do" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;
