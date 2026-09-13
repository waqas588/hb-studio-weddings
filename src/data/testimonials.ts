/**
 * Testimonials.
 *
 * These are placeholder examples only, written to illustrate layout —
 * they are NOT real client quotes and must not be presented as such.
 * `isPlaceholder: true` drives a visible "Sample testimonial" label in
 * the UI. Replace with real, permissioned client testimonials (and
 * set isPlaceholder to false) as they are collected.
 */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  eventType: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote:
      "This is placeholder testimonial text illustrating how a client quote will be displayed once real feedback is supplied.",
    name: "Sample Client",
    eventType: "Wedding Photography",
    isPlaceholder: true,
  },
  {
    id: "sample-2",
    quote:
      "This is placeholder testimonial text illustrating how a client quote will be displayed once real feedback is supplied.",
    name: "Sample Client",
    eventType: "Wedding Videography",
    isPlaceholder: true,
  },
  {
    id: "sample-3",
    quote:
      "This is placeholder testimonial text illustrating how a client quote will be displayed once real feedback is supplied.",
    name: "Sample Client",
    eventType: "Event Coverage",
    isPlaceholder: true,
  },
];
