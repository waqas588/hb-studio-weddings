/**
 * Featured wedding stories.
 *
 * These entries are placeholder examples only — no real client names,
 * events, or locations. `isPlaceholder: true` is used by the UI to
 * render a visible "Sample story" label. Replace with real,
 * client-approved stories (and set isPlaceholder to false) as they
 * become available.
 */

export interface WeddingStory {
  slug: string;
  coupleNames: string;
  eventType: string;
  location: string;
  excerpt: string;
  image: string;
  isPlaceholder: boolean;
}

export const weddingStories: WeddingStory[] = [
  {
    slug: "sample-story-one",
    coupleNames: "Sarah & Ahmed",
    eventType: "An Elegant Wedding Celebration",
    location: "Location to be added",
    excerpt:
      "A sample story layout — placeholder copy describing the day, the details and the emotions of the celebration will appear here once a real story is supplied.",
    image: "/images/stories/story-1.svg",
    isPlaceholder: true,
  },
  {
    slug: "sample-story-two",
    coupleNames: "Sample Couple",
    eventType: "A Traditional Nikkah Ceremony",
    location: "Location to be added",
    excerpt:
      "A sample story layout — placeholder copy describing the day, the details and the emotions of the celebration will appear here once a real story is supplied.",
    image: "/images/stories/story-2.svg",
    isPlaceholder: true,
  },
  {
    slug: "sample-story-three",
    coupleNames: "Sample Couple",
    eventType: "An Intimate Garden Reception",
    location: "Location to be added",
    excerpt:
      "A sample story layout — placeholder copy describing the day, the details and the emotions of the celebration will appear here once a real story is supplied.",
    image: "/images/stories/story-3.svg",
    isPlaceholder: true,
  },
];
