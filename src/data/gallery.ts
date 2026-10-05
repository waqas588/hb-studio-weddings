/**
 * Central portfolio data structure.
 *
 * To add or remove a photo, edit this array only — the homepage
 * "Featured Portfolio" section and the full /portfolio page both
 * read from here. Replace the placeholder `src` paths with real,
 * optimized photographs (see README) and update `alt` with a
 * genuine, descriptive caption for accessibility and SEO.
 */

export type GalleryCategory = "weddings";

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
    id: "hbs-0780",
    src: "/images/portfolio/HBS_0780.JPG",
    alt: "Wedding photography by HB Studio Weddings, HBS 0780",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-1830",
    src: "/images/portfolio/HBS_1830.jpg",
    alt: "Wedding photography by HB Studio Weddings, HBS 1830",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-1861-2",
    src: "/images/portfolio/HBS_1861-2.JPG",
    alt: "Wedding photography by HB Studio Weddings, HBS 1861-2",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-3433",
    src: "/images/portfolio/HBS_3433.JPG",
    alt: "Wedding photography by HB Studio Weddings, HBS 3433",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-3674",
    src: "/images/portfolio/HBS_3674.JPG",
    alt: "Wedding photography by HB Studio Weddings, HBS 3674",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-3722-2",
    src: "/images/portfolio/HBS_3722-2.jpg",
    alt: "Wedding photography by HB Studio Weddings, HBS 3722-2",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-5115",
    src: "/images/portfolio/HBS_5115.jpg",
    alt: "Wedding photography by HB Studio Weddings, HBS 5115",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-5477",
    src: "/images/portfolio/HBS_5477.JPG",
    alt: "Wedding photography by HB Studio Weddings, HBS 5477",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-6507-2",
    src: "/images/portfolio/HBS_6507-2.JPG",
    alt: "Wedding photography by HB Studio Weddings, HBS 6507-2",
    category: "weddings",
    width: 2918,
    height: 4381,
  },
  {
    id: "hbs-6841",
    src: "/images/portfolio/HBS_6841.jpg",
    alt: "Wedding photography by HB Studio Weddings, HBS 6841",
    category: "weddings",
    width: 3016,
    height: 4528,
  },
  {
    id: "hbs-7911-2",
    src: "/images/portfolio/HBS_7911-2.jpg",
    alt: "Wedding photography by HB Studio Weddings, HBS 7911-2",
    category: "weddings",
    width: 4024,
    height: 6048,
  },
];
