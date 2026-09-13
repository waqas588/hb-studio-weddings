/**
 * Central portfolio data structure.
 *
 * To add or remove a photo, edit this array only — the homepage
 * "Featured Portfolio" section and the full /portfolio page both
 * read from here. Replace the placeholder `src` paths with real,
 * optimized photographs (see README) and update `alt` with a
 * genuine, descriptive caption for accessibility and SEO.
 */

export type GalleryCategory = "weddings" | "fashion";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  /** Show this image in the condensed homepage preview. */
  featured?: boolean;
}

export const galleryCategories: { value: "all" | GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "weddings", label: "Weddings" },
  { value: "fashion", label: "Fashion Shoots" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "wedding-1",
    src: "/images/portfolio/wedding-1.jpeg",
    alt: "Newlywed couple walking beside a pool in a tropical garden",
    category: "weddings",
    width: 1170,
    height: 1463,
    featured: true,
  },
  {
    id: "wedding-2",
    src: "/images/portfolio/wedding-2.jpeg",
    alt: "Newlywed couple standing beside a fountain at their reception",
    category: "weddings",
    width: 936,
    height: 1170,
  },
  {
    id: "wedding-3",
    src: "/images/portfolio/wedding-3.jpeg",
    alt: "Newlywed couple posing on the steps of an illuminated venue",
    category: "weddings",
    width: 936,
    height: 1170,
    featured: true,
  },
  {
    id: "wedding-4",
    src: "/images/portfolio/wedding-4.jpeg",
    alt: "Newlywed couple standing beside a bright blue pool",
    category: "weddings",
    width: 1170,
    height: 1463,
  },
  {
    id: "wedding-5",
    src: "/images/portfolio/wedding-5.svg",
    alt: "Placeholder — wedding venue image to be replaced with real photography",
    category: "weddings",
    width: 1200,
    height: 1200,
  },
  {
    id: "wedding-6",
    src: "/images/portfolio/wedding-6.svg",
    alt: "Placeholder — candid guest moment to be replaced with real photography",
    category: "weddings",
    width: 1200,
    height: 1500,
  },
  {
    id: "bridal-1",
    src: "/images/portfolio/bridal-1.svg",
    alt: "Placeholder — bridal portrait to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1200,
    featured: true,
  },
  {
    id: "bridal-2",
    src: "/images/portfolio/bridal-2.svg",
    alt: "Placeholder — bridal detail shot to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1500,
  },
  {
    id: "bridal-3",
    src: "/images/portfolio/bridal-3.svg",
    alt: "Placeholder — bridal styling image to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1200,
  },
  {
    id: "bridal-4",
    src: "/images/portfolio/bridal-4.svg",
    alt: "Placeholder — bridal portrait to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1500,
  },
  {
    id: "engagement-1",
    src: "/images/portfolio/engagement-1.svg",
    alt: "Placeholder — engagement session image to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1200,
    featured: true,
  },
  {
    id: "engagement-2",
    src: "/images/portfolio/engagement-2.svg",
    alt: "Placeholder — engagement couple portrait to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1500,
  },
  {
    id: "engagement-3",
    src: "/images/portfolio/engagement-3.svg",
    alt: "Placeholder — engagement session image to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1200,
  },
  {
    id: "engagement-4",
    src: "/images/portfolio/engagement-4.svg",
    alt: "Placeholder — engagement session detail to be replaced with real photography",
    category: "fashion",
    width: 1200,
    height: 1500,
  },
];
