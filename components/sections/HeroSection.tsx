import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui";
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
    <section
      className="relative flex min-h-[80svh] min-h-[600px] flex-col justify-end overflow-hidden lg:min-h-[90svh]"
      aria-label={h.title1 + " " + h.title2}
    >
      <Image
        src="/images/hero/banner-wide-b.png"
        alt={h.eyebrow}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Cinematic overlay, heavier at the text anchor */}
      <div
        className={`absolute inset-0 bg-black/40 ${
          locale === "ar"
            ? "bg-gradient-to-r from-black/10 via-black/35 to-black/75"
            : "bg-gradient-to-l from-black/10 via-black/35 to-black/75"
        }`}
      />
      {/* Soft bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="max-w-2xl md:max-w-3xl text-start">
          <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-8 bg-gold" />
            {h.eyebrow}
          </p>

          <h1
            className={`mt-7 text-[clamp(2.4rem,8.5vw,5.5rem)] leading-[0.98] tracking-tight text-mist md:text-[clamp(3.5rem,7vw,5.5rem)] ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {h.title1}
            <br />
            <span className="text-gold-soft">{h.title2}</span>
          </h1>

          <p
            className={`mt-6 max-w-md text-base leading-relaxed text-mist/80 md:text-lg ${
              locale === "ar" ? "arabic" : ""
            }`}
          >
            {h.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            <a
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-3 bg-mist px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              {h.cta}
              <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
            <Link
              href={`/${locale}/list-your-property`}
              className="group inline-flex items-center gap-2 border-b border-mist/40 pb-1 text-sm tracking-wide text-mist/85 transition-colors hover:border-gold hover:text-gold-soft"
            >
              {h.ctaSecondary}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <p className="inline-flex items-center gap-2 border-s-2 border-gold ps-3 text-[11px] uppercase tracking-[0.22em] text-mist/55">
              {h.license}
            </p>
            <p className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-mist/45 md:inline-flex">
              <span className="h-px w-6 bg-mist/40" />
              {h.scroll}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
