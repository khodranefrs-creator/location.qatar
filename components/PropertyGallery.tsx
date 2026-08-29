"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/dictionaries";

export function PropertyGallery({
  images,
  title,
  locale,
}: {
  images: string[];
  title: string;
  locale: Locale;
}) {
  const isRTL = locale === "ar";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [primary, ...rest] = images;

  const close = useCallback(() => setLightboxOpen(false), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key === "ArrowRight") return isRTL ? prev() : next();
      if (e.key === "ArrowLeft") return isRTL ? next() : prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, close, next, prev, isRTL]);

  const openAt = (i: number) => {
    setIndex(i);
    setLightboxOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-2">
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink-soft md:col-span-2 md:row-span-2"
          aria-label={title}
        >
          <Image
            src={primary}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </button>
        {rest.slice(0, 4).map((img, i) => (
          <button
            key={img + i}
            type="button"
            onClick={() => openAt(i + 1)}
            className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink-soft md:aspect-auto"
            aria-label={`${title} ${i + 2}`}
          >
            <Image
              src={img}
              alt=""
              fill
              sizes="(min-width: 1024px) 16vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={locale === "ar" ? "معرض الصور" : "Image gallery"}
          className="fixed inset-0 z-[70] flex flex-col bg-black/95"
          onClick={close}
        >
          <div className="flex items-center justify-between p-4 md:p-6">
            <span className="text-sm text-mist/70">
              {(index + 1)} / {images.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={locale === "ar" ? "إغلاق" : "Close"}
              className="flex h-11 w-11 items-center justify-center text-mist hover:text-gold"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
              </span>
            </button>
          </div>
          <div
            className="relative flex-1 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-between p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={prev}
              aria-label={locale === "ar" ? "السابق" : "Previous"}
              className="flex h-12 w-12 items-center justify-center border border-mist/30 text-mist hover:border-gold hover:text-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={locale === "ar" ? "rotate-180" : ""}>
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={locale === "ar" ? "التالي" : "Next"}
              className="flex h-12 w-12 items-center justify-center border border-mist/30 text-mist hover:border-gold hover:text-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={locale === "ar" ? "rotate-180" : ""}>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
