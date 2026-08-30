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
    <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink text-mist">
      <Image
        src="/images/clean/banner-wide-b.png"
        alt={h.eyebrow}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility: darker at the top for the header, softer toward the copy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-black/50" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-10 md:pb-14">
        <div className="max-w-[56ch]">
          <p className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-8 bg-gold-soft/70" />
            {h.eyebrow}
          </p>

          <h1
            className={`mt-6 text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-paper ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {h.title1}
            <br />
            {h.title2}
          </h1>

          <p className={`mt-5 max-w-md text-base leading-relaxed text-mist/75 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
            {h.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-3 bg-mist px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              {h.cta}
              <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/list-your-property`}
              className="group inline-flex items-center gap-2 border-b border-mist/40 pb-1 text-sm tracking-wide text-mist/85 transition-colors hover:border-gold hover:text-gold-soft"
            >
              {h.ctaSecondary}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* Campaign registration line */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-mist/25 pt-5 text-[12px] tracking-wide text-mist/65">
            <span>{h.license}</span>
            <span dir="ltr">{site.phoneDisplay}</span>
            <span>{locale === "ar" ? site.addressAr : site.addressEn}</span>
          </div>
        </div>
      </div>
    </section>
  );
}