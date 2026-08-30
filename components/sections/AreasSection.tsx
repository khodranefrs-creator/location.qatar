import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getPropertyBySlug } from "@/lib/properties";
import { countByDistrict } from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

const AREA_ORDER = [
  { slug: "villa-luqtaifiya", image: "/images/clean/crop-p04.jpg" },
  { slug: "villa-al-thumama", image: "/images/clean/crop-p10.jpg" },
  { slug: "villa-al-rayyan", image: "/images/clean/crop-p24.jpg" },
  { slug: "villa-medinat-khalifa", image: "/images/clean/crop-p20.jpg" },
  { slug: "villa-al-dhakhira", image: "/images/clean/crop-p22.jpg" },
];

export function AreasSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.areas;

  const areas = AREA_ORDER.map(({ slug, image }) => {
    const p = getPropertyBySlug(slug);
    if (!p) return null;
    return {
      ar: p.districtAr,
      en: p.districtEn,
      image,
      count: countByDistrict(p.districtAr),
    };
  }).filter(Boolean) as {
    ar: string;
    en: string;
    image: string;
    count: number;
  }[];

  const [dominant, ...support] = areas;

  return (
    <section className="bg-mist py-20 md:py-36">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
            </div>
            <p className={`max-w-sm text-base leading-relaxed text-stone md:text-end ${locale === "ar" ? "arabic" : ""}`}>
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Editorial composition: dominant + supporting, asymmetric */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Dominant location */}
          {dominant && (
            <Reveal className="lg:col-span-7">
              <Link
                href={`/${locale}/properties?area=${encodeURIComponent(dominant.ar)}`}
                aria-label={locale === "ar" ? dominant.ar : dominant.en}
                className="group relative block h-full min-h-[420px] overflow-hidden bg-ink md:min-h-[640px]"
              >
                <Image
                  src={dominant.image}
                  alt={locale === "ar" ? dominant.ar : dominant.en}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute start-5 top-5 text-[11px] tracking-[0.3em] text-mist/80">
                  01
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 md:p-8">
                  <div>
                    <h3 className={`text-3xl text-mist md:text-5xl ${locale === "ar" ? "arabic" : ""}`}>
                      {locale === "ar" ? dominant.ar : dominant.en}
                    </h3>
                    <p className="mt-2 text-sm tracking-wide text-mist/70">
                      {dominant.count} {t.properties}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-mist/40 text-mist transition-colors group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                    <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Supporting: two stacked in the right column */}
          <div className="grid grid-cols-1 gap-5 lg:col-span-5">
            {support.slice(0, 2).map((a, i) => (
              <Reveal key={a.en} delay={i * 80}>
                <Link
                  href={`/${locale}/properties?area=${encodeURIComponent(a.ar)}`}
                  aria-label={locale === "ar" ? a.ar : a.en}
                  className="group relative block min-h-[220px] overflow-hidden bg-ink md:min-h-[308px]"
                >
                  <Image
                    src={a.image}
                    alt={locale === "ar" ? a.ar : a.en}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                    <div>
                      <h3 className={`text-2xl text-mist md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                        {locale === "ar" ? a.ar : a.en}
                      </h3>
                      <p className="mt-1 text-sm tracking-wide text-mist/70">
                        {a.count} {t.properties}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-mist/40 text-mist transition-colors group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                      <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Wide supporting strip: remaining two as a horizontal split */}
          {support.slice(2).length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-12">
              {support.slice(2).map((a, i) => (
                <Reveal key={a.en} delay={i * 80}>
                  <Link
                    href={`/${locale}/properties?area=${encodeURIComponent(a.ar)}`}
                    aria-label={locale === "ar" ? a.ar : a.en}
                    className="group relative block aspect-[16/9] overflow-hidden bg-ink"
                  >
                    <Image
                      src={a.image}
                      alt={locale === "ar" ? a.ar : a.en}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-6">
                      <h3 className={`text-2xl text-mist md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                        {locale === "ar" ? a.ar : a.en}
                      </h3>
                      <span className="flex items-center gap-3">
                        <span className="text-sm tracking-wide text-mist/70">
                          {a.count} {t.properties}
                        </span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-mist/40 text-mist transition-colors group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                          <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex justify-end border-t border-ink/15 pt-10">
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-ink transition-colors hover:text-gold"
            >
              {dict.nav.properties}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
