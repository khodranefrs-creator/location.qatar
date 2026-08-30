import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getPropertyBySlug } from "@/lib/properties";
import { countByDistrict } from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

const AREA_ORDER = [
  "villa-luqtaifiya",
  "villa-al-dhakhira",
  "villa-al-thumama",
  "house-khalifa",
  "villa-al-rayyan",
];

export function AreasSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.areas;
  const areas = AREA_ORDER.map((slug) => {
    const p = getPropertyBySlug(slug);
    if (!p) return null;
    return { ar: p.districtAr, en: p.districtEn, count: countByDistrict(p.districtAr) };
  }).filter(Boolean) as { ar: string; en: string; count: number }[];

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {t.title}
            </h2>
            <p className={`mt-4 max-w-md text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Dominant photographic place moment */}
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden bg-ink-soft md:aspect-[16/10]">
              <Image
                src="/images/hero/hero-2.png"
                alt={locale === "ar" ? "قطر" : "Qatar"}
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 md:p-10">
                <span className={`text-[11px] uppercase tracking-[0.3em] text-paper/80`}>
                  {locale === "ar" ? "الدوحة — قطر" : "Doha — Qatar"}
                </span>
                <p className="max-w-[16ch] text-3xl leading-tight text-paper md:text-4xl">
                  {locale === "ar" ? "المكان الذي نخدمه." : "The place we serve."}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Geographic ledger of real areas */}
          <Reveal delay={80} className="lg:col-span-5">
            <div className="border-t border-line">
              {areas.map((a, i) => (
                <Link
                  key={a.en}
                  href={`/${locale}/properties?area=${encodeURIComponent(a.ar)}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:bg-mist/60 md:gap-6"
                >
                  <span className="text-xs font-medium tracking-[0.2em] text-stone tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-baseline justify-between gap-4">
                    <span className={`text-xl text-ink transition-colors group-hover:text-burgundy md:text-2xl ${locale === "ar" ? "arabic font-medium" : "font-medium"}`}>
                      {locale === "ar" ? a.ar : a.en}
                    </span>
                    <span className="text-xs tracking-wide text-stone">
                      {a.count} {t.properties}
                    </span>
                  </span>
                  <ArrowIcon className="text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-burgundy rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
