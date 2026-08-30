import Image from "next/image";
import Link from "next/link";
import { Eyebrow, ArrowIcon } from "@/components/ui";
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
    <section className="overflow-x-clip bg-paper text-ink" aria-label={h.title1 + " " + h.title2}>
      <div className="mx-auto grid max-w-[1440px] gap-0 px-5 pt-24 md:px-10 md:pt-28 lg:grid-cols-12 lg:px-0">
        {/* Typography block */}
        <div className="flex flex-col justify-center pb-10 lg:col-span-5 lg:pb-0 lg:pl-10 lg:pr-6">
          <Eyebrow tone="gold">{h.eyebrow}</Eyebrow>
          <h1
            className={`mt-7 text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.0] tracking-tight text-ink md:text-[clamp(3rem,6vw,4.5rem)] ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {h.title1}
            <br />
            <span className="text-burgundy">{h.title2}</span>
          </h1>
          <p className={`mt-7 max-w-md text-base leading-relaxed text-stone md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
            {h.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-burgundy"
            >
              {h.cta}
              <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/list-your-property`}
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
            >
              {h.ctaSecondary}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Framed architectural photograph bleeding off the opposite edge */}
        <div className="lg:col-span-7">
          <div className={`relative h-[46vh] min-h-[320px] overflow-hidden md:h-[58vh] ${locale === "ar" ? "lg:-ml-10" : "lg:-mr-10"}`}>
            <Image
              src="/images/clean/banner-wide-b.png"
              alt={h.eyebrow}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
            <span className={`absolute bottom-4 text-[11px] uppercase tracking-[0.26em] text-paper/90 ${locale === "ar" ? "right-5" : "left-5"}`}>
              Qatar · Doha
            </span>
          </div>
        </div>
      </div>

      {/* Grounding metadata strip */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-0">
        <div className="grid grid-cols-3 border-t border-line py-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "الترخيص" : "License"}</p>
            <p className="mt-1 text-sm font-medium text-ink">{h.license}</p>
          </div>
          <div className="border-s border-line ps-5 md:ps-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "الدوحة — قطر" : "Doha — Qatar"}</p>
            <p className="mt-1 text-sm font-medium text-ink" dir="ltr">{site.phoneDisplay}</p>
          </div>
          <div className="border-s border-line ps-5 md:ps-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.nav.services}</p>
            <p className="mt-1 text-sm font-medium text-ink">{locale === "ar" ? "بيع · شراء · إيجار" : "Sales · Purchase · Lease"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
