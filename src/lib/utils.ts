import { clsx, type ClassValue } from "clsx";

/** Merge conditional class names. Thin wrapper kept in one place so
 * a class-merging library (e.g. tailwind-merge) can be dropped in
 * later without touching every component. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
