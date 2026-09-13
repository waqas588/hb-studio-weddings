/**
 * Package tiers.
 *
 * Package tiers and pricing supplied by the studio.
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
    slug: "basic",
    name: "Basic",
    description: "A focused wedding photography package for intimate celebrations.",
    priceLabel: "PKR 25,000/=",
    features: [
      "1 photographer",
      "1 HD album (70–80 pictures)",
      "RAW images (couple session, candids and family groups)",
    ],
  },
  {
    slug: "standard",
    name: "Standard",
    description: "Balanced photography and cinematography coverage for your wedding day.",
    priceLabel: "PKR 45,000/=",
    features: [
      "1 photographer",
      "1 cinematographer",
      "1 HD album (70–80 pictures)",
      "RAW images (couple session, candids and family groups)",
    ],
    highlighted: true,
  },
  {
    slug: "premium",
    name: "Premium",
    description: "Expanded coverage with photography, cinematography and an outdoor session.",
    priceLabel: "PKR 65,000/=",
    features: [
      "2 photographers",
      "2 cinematographers",
      "Outdoor session",
      "1 HD album (70–80 pictures)",
      "RAW images (couple session, candids and family groups)",
    ],
  },
];
