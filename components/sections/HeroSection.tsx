import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui";
import { site } from "@/lib/site";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function HeroSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const h = dict.hero;
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-ink text-mist">
      <Image
        src="/images/clean/banner-wide-b.png"
        alt={h.subtitle}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient keeps the architecture readable while grounding the anchor type */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55" />

      {/* Campaign headline — bottom-anchored, start-aligned */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-8 pt-32 md:px-10 md:pb-14">
        <div className="max-w-[15ch]">
          <p
            className={`flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft ${
              locale === "ar" ? "arabic" : ""
            }`}
          >
            <span className="h-px w-10 bg-gold-soft/70" />
            {h.eyebrow}
          </p>

          <h1
            className={`mt-7 text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02] tracking-tight text-paper ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {h.title1}
            <br />
            {h.title2}
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-3 bg-mist px-9 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              {h.cta}
              <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Campaign footer line — market + license + contact */}
      <div className="relative border-t border-paper/20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-5 text-[12px] tracking-[0.18em] text-paper/70 md:flex-row md:items-center md:justify-between md:px-10">
          <span>
            {h.market}
            <span className="mx-3 text-paper/35">·</span>
            {h.license}
          </span>
          <a href={`tel:${site.phoneRaw}`} dir="ltr" className="transition-colors hover:text-paper">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}