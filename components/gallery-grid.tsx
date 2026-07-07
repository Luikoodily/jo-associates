"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";

interface GalleryGridProps {
  items: GalleryItem[];
}

const spanClasses: Record<NonNullable<GalleryItem["span"]>, string> = {
  small: "sm:row-span-1",
  medium: "sm:row-span-2",
  large: "sm:row-span-2 lg:col-span-2",
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  const close = useCallback(() => setActiveIndex(null), []);

  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % items.length,
    );
  }, [items.length]);

  const prev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + items.length) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn
            key={item.id}
            delay={index * 0.04}
            className={cn(
              "relative row-span-1",
              item.span && spanClasses[item.span],
            )}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block h-full w-full overflow-hidden rounded-3xl border border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Enlarge ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
                <span className="text-sm font-semibold leading-tight">
                  {item.title}
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal
          aria-label={active.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur"
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={close}
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:inline-flex"
            onClick={prev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:inline-flex"
            onClick={next}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
          <div className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-3xl">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/80">
            {active.category} · {activeIndex! + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
