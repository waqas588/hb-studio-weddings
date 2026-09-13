"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";
import {
  galleryCategories,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/gallery";

type FilterValue = "all" | GalleryCategory;

export default function PortfolioGallery({
  images,
  showFilters = true,
}: {
  images: GalleryImage[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? images : images.filter((img) => img.category === filter)),
    [images, filter]
  );

  const slides = filtered.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <div>
      {showFilters && (
        <div
          role="tablist"
          aria-label="Filter portfolio by category"
          className="mb-10 flex flex-wrap gap-3"
        >
          {galleryCategories.map((cat) => {
            const active = filter === cat.value;
            return (
              <button
                key={cat.value}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat.value)}
                className={cn(
                  "border px-5 py-2 text-sm tracking-wide transition-colors duration-300 ease-editorial",
                  active
                    ? "border-ink bg-ink text-ivory"
                    : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {filtered.map((img, index) => (
          <li key={img.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative block w-full overflow-hidden bg-charcoal/5 focus-visible:outline-none"
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-charcoal/60">
          No images in this category yet.
        </p>
      )}

      <Lightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        close={() => setLightboxIndex(null)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(27,24,21,0.97)" } }}
      />
    </div>
  );
}
