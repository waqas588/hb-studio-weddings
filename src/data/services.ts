import type { LucideIcon } from "lucide-react";
import { Camera, Clapperboard, Heart, Sparkles, Users } from "lucide-react";

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
      "Polished coverage for conferences, launches, team days and brand experiences.",
    description:
      "We capture the energy, people and details that make an event matter, from keynote rooms to the moments happening between sessions.",
    included: [
      "Pre-event planning and run-of-show review",
      "Candid and directed coverage of key moments",
      "Fast-turnaround selects for social and press",
      "Professionally edited, color-graded final gallery",
      "Private online gallery for viewing and downloading",
    ],
  },
  {
    slug: "wedding-videography",
    title: "Wedding Videography",
    icon: Clapperboard,
    image: "/images/services/wedding-videography.svg",
    shortDescription:
      "Clean, tactile stills and motion that make your product impossible to scroll past.",
    description:
      "We shape light, texture and composition around what makes your product different, creating a focused image library for campaigns, ecommerce and launch content.",
    included: [
      "Creative direction and shot list",
      "Studio or on-location production",
      "Hero stills and detail photography",
      "Color-graded, professionally edited film",
      "Digital delivery in shareable formats",
    ],
  },
  {
    slug: "fashion-shoots",
    title: "Fashion Shoots",
    icon: Heart,
    image: "/images/services/engagement-sessions.svg",
    shortDescription:
      "Editorial imagery for collections, lookbooks, campaigns and personal brands.",
    description:
      "From casting and styling through the final frame, we create a confident visual language that gives your collection room to speak.",
    included: [
      "Moodboard and creative direction",
      "Location, lighting and posing guidance",
      "A mix of campaign and editorial frames",
      "Professionally edited final gallery",
    ],
  },
  {
    slug: "brand-content",
    title: "Brand Content",
    icon: Sparkles,
    image: "/images/services/bridal-photography.svg",
    shortDescription:
      "A considered library of images for your website, social channels and launch moments.",
    description:
      "We turn a clear brand idea into a flexible set of visual assets, balancing hero images with the small details that make a brand feel real.",
    included: [
      "Creative concept and shot planning",
      "Portrait, product and behind-the-scenes coverage",
      "Studio or on-location options",
      "Professionally edited final gallery",
    ],
  },
  {
    slug: "commercial-films",
    title: "Commercial Films",
    icon: Users,
    image: "/images/services/event-coverage.svg",
    shortDescription:
      "Short films and motion content with atmosphere, pace and a clear message.",
    description:
      "For launches, campaigns and events, we combine natural sound, considered camera work and purposeful editing to make your message land.",
    included: [
      "Creative treatment and production planning",
      "Multi-camera and natural audio capture",
      "Photography and/or videography as needed",
      "Professionally edited final gallery",
    ],
  },
];
