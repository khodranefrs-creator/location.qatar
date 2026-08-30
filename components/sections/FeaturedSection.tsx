import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getFeaturedProperties } from "@/lib/properties";
import { formatPrice, formatArea, getPurposeLabel, getPropertyTypeLabel, getDistrictLabels } from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";
import type { Property } from "@/lib/properties";

const CLEAN_IMAGE: Record<string, string> = {
  "villa-luqtaifiya": "/images/clean/crop-p03.jpg",
  "house-khalifa": "/images/clean/crop-p12.jpg",
  "villa-al-dhakhira": "/images/clean/crop-p07.jpg",
};

export function FeaturedSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const f = dict.featured;
  const featured = getFeaturedProperties();
  const ordered = (
    ["villa-luqtaifiya", "house-khalifa", "villa-al-dhakhira"]
      .map((slug) => featured.find((p) => p.slug === slug))
      .filter(Boolean) as Property[]
  ).slice(0, 3);

  const [primary, ...rest] = ordered;

  return (
    <section className="bg-paper py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="gold">{f.eyebrow}</Eyebrow>
              <h2
                className={`mt-5 max-w-2xl text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {f.title}
              </h2>
            </div>
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-gold hover:text-gold"
            >
              {f.viewAll}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {primary && (
          <Reveal className="mt-14">
            <article className="grid gap-10 border-t border-ink/15 pt-12 lg:grid-cols-12 lg:gap-0">
              {/* Dominant image — ~65% */}
              <Link
                href={`/${locale}/properties/${primary.slug}`}
                className="group relative block overflow-hidden bg-ink lg:col-span-7"
              >
                <div className="zoom-img relative aspect-[4/3] md:aspect-[16/10] lg:h-full lg:min-h-[640px]">
                  <Image
                    src={CLEAN_IMAGE[primary.slug] ?? primary.images[0]}
                    alt={locale === "ar" ? primary.titleAr : primary.titleEn}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-5 start-5 text-[11px] uppercase tracking-[0.26em] text-mist/80">
                    01 — {locale === "ar" ? "العقار المختار" : "Featured"}
                  </span>
                </div>
              </Link>

              {/* Catalogue info panel — ~35% */}
              <div className="flex flex-col justify-center lg:col-span-5 lg:ps-14">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  {getPurposeLabel(locale)(primary.purpose)} · {getPropertyTypeLabel(locale)(primary.propertyType)} ·{" "}
                  {getDistrictLabels(locale, primary)}
                </p>
                <h3
                  className={`mt-5 max-w-md text-3xl leading-tight text-ink md:text-4xl ${
                    locale === "ar" ? "arabic font-semibold" : "font-semibold"
                  }`}
                >
                  {locale === "ar" ? primary.titleAr : primary.titleEn}
                </h3>
                <p className={`mt-6 max-w-md text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                  {locale === "ar" ? primary.descriptionAr : primary.descriptionEn}
                </p>

                <div className="mt-9 grid max-w-md grid-cols-2 gap-6 border-y border-ink/15 py-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.price}</p>
                    <p className="mt-2 text-lg font-medium text-ink tabular-nums">
                      {formatPrice(primary.price, locale) ??
                        (locale === "ar" ? "عند الطلب" : "On request")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.areaLabel}</p>
                    <p className="mt-2 text-lg font-medium text-ink tabular-nums">
                      {formatArea(primary.area, locale)}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${locale}/properties/${primary.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  {f.viewProperty}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        )}

        {/* Two secondary editorials */}
        {rest.length > 0 && (
          <Reveal className="mt-16">
            <div className="grid gap-x-10 gap-y-12 border-t border-ink/15 pt-12 sm:grid-cols-2 lg:gap-x-14">
              {rest.map((p, i) => (
                <Reveal key={p.id} delay={(i + 1) * 60}>
                  <Link
                    href={`/${locale}/properties/${p.slug}`}
                    className="group block"
                  >
                    <div className="zoom-img relative aspect-[16/9] overflow-hidden bg-ink-soft">
                      <Image
                        src={CLEAN_IMAGE[p.slug] ?? p.images[0]}
                        alt={locale === "ar" ? p.titleAr : p.titleEn}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                          {String(i + 2).padStart(2, "0")} — {getPurposeLabel(locale)(p.purpose)} ·{" "}
                          {getDistrictLabels(locale, p)}
                        </p>
                        <h4
                          className={`mt-2 text-xl leading-snug text-ink md:text-2xl ${
                            locale === "ar" ? "arabic" : ""
                          }`}
                        >
                          {locale === "ar" ? p.titleAr : p.titleEn}
                        </h4>
                        <p className="mt-2 text-sm text-stone tabular-nums">
                          {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                          {p.area ? ` · ${formatArea(p.area, locale)}` : ""}
                        </p>
                      </div>
                      <ArrowIcon className="mb-1 h-5 w-5 shrink-0 text-ink transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
