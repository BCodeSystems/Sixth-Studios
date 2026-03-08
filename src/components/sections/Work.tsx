"use client";
import { useState } from "react";

type CuratedItem = {
  src: string;
  alt: string;
  title?: string;
  tag?: string;
};

const CURATED: CuratedItem[] = [
  { src: "/curated/goldenhour.jpeg", alt: "Curated photo 01", title: "Golden Hour", tag: "Weddings • Proposals • Couples" },
  { src: "/curated/engagement.jpeg", alt: "Curated photo 02", title: "The Details", tag: "Engagements" },
  { src: "/curated/coastal-portrait.jpeg", alt: "Curated photo 03", title: "Coastal Portrait", tag: "Outdoor Sessions" },
  { src: "/curated/coastal-proposal.jpeg", alt: "Curated photo 04", title: "The Proposal", tag: "Proposals" },
  { src: "/curated/cinema-panel.jpeg", alt: "Curated photo 05", title: "Industry Panel", tag: "Brand & Media Events" },
  { src: "/curated/brand-detail.jpeg", alt: "Curated photo 06", title: "Brand Detail", tag: "Commercial" },
  { src: "/curated/game-night.jpeg", alt: "Curated photo 07", title: "Game Night", tag: "Sports" },
  { src: "/curated/crowd.jpg", alt: "Curated photo 08", title: "Audience Energy", tag: "Live Events" },
  { src: "/curated/western-editorial.jpeg", alt: "Curated photo 09", title: "Western Editorial", tag: "Editorial Portraits" },
  { src: "/curated/luxury-editorial.jpeg", alt: "Curated photo 10", title: "Luxury Editorial", tag: "Editorial" },
  { src: "/curated/moody-editorial.jpeg", alt: "Curated photo 11", title: "Moody Editorial", tag: "Editorial Portraits" },
  { src: "/curated/studio-portrait.jpeg", alt: "Curated photo 12", title: "Studio Portrait", tag: "Studio Sessions" },
];

function CuratedCard({
  item,
  onView,
}: {
  item: CuratedItem;
  onView: (src: string, alt: string) => void;
}) {
  return (
    <figure className="group relative mb-6 overflow-hidden bg-black ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-white/20">
      {/* Image */}
      <div className="relative">
        {/* Use <img> for maximum compatibility across React/Next. */}
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-auto w-full select-none object-cover"
        />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

        {/* Text overlay */}
        {(item.title || item.tag) && (
          <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                {item.title && (
                  <p className="truncate text-sm font-medium tracking-tight text-white">
                    {item.title}
                  </p>
                )}
                {item.tag && (
                  <p className="truncate text-xs text-white/80">{item.tag}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => onView(item.src, item.alt)}
                className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-white/20 transition"
              >
                View
              </button>
            </div>
          </figcaption>
        )}
      </div>
    </figure>
  );
}

export default function Work() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="work" className="bg-neutral-950 px-8 py-32 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-display text-5xl uppercase tracking-[0.16em]">
            Selected Work
          </h2>
          <p className="mt-4 text-sm text-white/70">
            A tight selection of signature frames—built to show range, mood, and consistency.
          </p>
        </div>

        {/* Grid (masonry via CSS columns) */}
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {CURATED.map((item, idx) => (
            <div key={`${item.src}-${idx}`} className="break-inside-avoid">
              <CuratedCard
                item={item}
                onView={(src, alt) => setActiveImage({ src, alt })}
              />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/70">
            Like what you see? Let’s create something special for you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white px-7 py-3 text-xs font-semibold tracking-[0.15em] uppercase !text-black hover:!text-black hover:bg-neutral-200 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 text-white text-xs uppercase tracking-wider bg-black/60 px-3 py-1 rounded hover:bg-black/80 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}