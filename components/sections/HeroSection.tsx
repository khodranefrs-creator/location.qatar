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
      {/* Light gradient so the architecture stays visible; stronger only at the base for type */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-8 pt-32 md:px-10 md:pb-14">
        <div className="max-w-[42ch]">
          <p
            className={`flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft ${
              locale === "ar" ? "arabic" : ""
            }`}
          >
            <span className="h-px w-10 bg-gold-soft/70" />
            {h.eyebrow}
          </p>

          <h1
            className={`mt-6 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.04] tracking-tight text-paper ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {h.title1}
            <br />
            {h.title2}
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-3 bg-mist px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              {h.cta}
              <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/list-your-property`}
              className="group inline-flex items-center gap-3 border border-paper/40 px-8 py-4 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              {h.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Brokerage context line — market, license, phone */}
      <div className="relative border-t border-paper/20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-5 text-[12px] tracking-[0.16em] text-paper/75 md:flex-row md:items-center md:justify-between md:px-10">
          <span>
            {h.market}
            <span className="mx-3 text-paper/35">·</span>
            {h.license}
          </span>
          <span className="flex items-center gap-6">
            <a href={`tel:${site.phoneRaw}`} dir="ltr" className="transition-colors hover:text-paper">
              {site.phoneDisplay}
            </a>
            <span className="hidden h-3 w-px bg-paper/25 md:inline-block" />
            <span dir="ltr">{site.email}</span>
          </span>
        </div>
      </div>
    </section>
  );
}