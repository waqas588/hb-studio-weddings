import type { LucideIcon } from "lucide-react";

import { Camera, Clapperboard, Sparkles, Users } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  shortDescription: string;
  description: string;
  included: string[];
}

export const services: Service[] = [
  {
    slug: "corporate-events",
    title: "Wedding Photography",
    icon: Camera,
    image: "/images/services/wedding-photography.jpeg",
    shortDescription:
      "Beautiful photography that captures every important moment of your wedding day.",
    description:
      "We capture the emotions, people and details that make your wedding unforgettable.",
    included: [
      "Pre-event planning",
      "Candid and directed photography",
      "Professional photo editing",
      "Color-graded final gallery",
      "Private online gallery",
    ],
  },

  {
    slug: "wedding-videography",
    title: "Wedding Videography",
    icon: Clapperboard,
    image: "/images/services/wedding-videography.svg",
    shortDescription:
      "Cinematic wedding films that bring your most meaningful moments back to life.",
    description:
      "We create beautiful wedding films with natural moments, emotional storytelling and cinematic editing.",
    included: [
      "Creative planning",
      "Wedding day filming",
      "Cinematic camera work",
      "Professional video editing",
      "Digital delivery",
    ],
  },

  {
    slug: "brand-content",
    title: "Bridal Photography",
    icon: Sparkles,
    image: "/images/services/bridal-photography.svg",
    shortDescription:
      "Elegant bridal portraits created with beautiful light, detail and timeless style.",
    description:
      "We create elegant bridal portraits that highlight every detail and emotion of your special day.",
    included: [
      "Creative direction",
      "Bridal portraits",
      "Detail photography",
      "Professional editing",
      "High-resolution gallery",
    ],
  },

  {
    slug: "commercial-films",
    title: "Event Coverage",
    icon: Users,
    image: "/images/services/event-coverage.svg",
    shortDescription:
      "Complete coverage of your wedding events, celebrations and special moments.",
    description:
      "From intimate gatherings to large celebrations, we capture the moments you will remember forever.",
    included: [
      "Event planning",
      "Candid coverage",
      "Important moments",
      "Professional editing",
      "Online delivery",
    ],
  },
];