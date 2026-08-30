"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

const PANEL_IMAGES = [
  "/images/clean/crop-p04.jpg",
  "/images/clean/crop-p07.jpg",
  "/images/clean/crop-p10.jpg",
  "/images/clean/crop-p22.jpg",
  "/images/clean/crop-p24.jpg",
];

export function ServicesSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const s = dict.services;
  const [active, setActive] = useState(0);

  return (
    <section
      className="bg-paper py-20 md:py-28"
      onMouseLeave={() => setActive(0)}
      aria-label={s.title}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Ledger */}
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
              <h2
                className={`mt-5 text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {s.title}
              </h2>
              <p className={`mt-4 max-w-md text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                {s.lead}
              </p>
            </Reveal>

            <div className="mt-10 border-t border-line">
              {s.items.map((item, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-5 text-start transition-colors md:gap-6 ${
                      isActive ? "bg-mist/60" : ""
                    }`}
                  >
                    <span className={`text-sm font-medium tabular-nums ${isActive ? "text-gold" : "text-stone"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-2xl transition-colors md:text-3xl ${
                        isActive ? "text-burgundy" : "text-ink"
                      } ${locale === "ar" ? "arabic font-medium" : "font-medium"}`}
                    >
                      {item.title}
                    </span>
                    <ArrowIcon className={`transition-all ${isActive ? "translate-x-1 text-burgundy rtl:-translate-x-1" : "text-ink/40"} rtl:-scale-x-100`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image panel — crossfades per active service */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft md:aspect-[16/13]">
              {PANEL_IMAGES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={`absolute inset-0 object-cover transition-opacity duration-700 ${
                    active === i || (i === 0 && active >= PANEL_IMAGES.length) ? "opacity-100" : "opacity-0"
                  }`}
                  loading={i === 0 ? "lazy" : "lazy"}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-paper/80">
                    {locale === "ar" ? "خبرتنا" : "Expertise"}
                  </p>
                  <p className={`mt-1 text-xl text-paper ${locale === "ar" ? "arabic" : ""}`}>
                    {s.items[active]?.title}
                  </p>
                </div>
                <span className="text-[11px] tracking-[0.2em] text-paper/60">{String(active + 1).padStart(2, "0")} / {String(s.items.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
