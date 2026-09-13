/**
 * Package tiers.
 *
 * No real pricing has been supplied yet, so `priceLabel` intentionally
 * reads "Request a Quote" / "Custom Package" throughout. Once real
 * pricing is available, set `price` (e.g. "PKR 150,000") on the
 * relevant tier and update `priceLabel` accordingly — no other files
 * need to change.
 */

export interface PackageTier {
  slug: string;
  name: string;
  description: string;
  priceLabel: string;
  price?: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: PackageTier[] = [
  {
    slug: "essential",
    name: "Essential",
    description:
      "A focused package for couples who want core coverage of their wedding day without the additional events.",
    priceLabel: "Request a Quote",
    features: [
      "Single-day wedding coverage",
      "One photographer",
      "Edited digital gallery",
      "Online gallery delivery",
    ],
  },
  {
    slug: "signature",
    name: "Signature",
    description:
      "Our most requested tier, combining photography and film across your main wedding events.",
    priceLabel: "Request a Quote",
    features: [
      "Photography and videography coverage",
      "Coverage across multiple events",
      "Cinematic highlight film",
      "Edited digital gallery",
      "Engagement session included",
    ],
    highlighted: true,
  },
  {
    slug: "custom",
    name: "Custom Package",
    description:
      "Tell us about your celebration — number of events, cities, and coverage needs — and we'll put together a tailored proposal.",
    priceLabel: "Custom Package",
    features: [
      "Tailored to your event schedule",
      "Choice of photography, videography or both",
      "Additional team members where needed",
      "Flexible delivery timelines",
    ],
  },
];
