import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getPropertyBySlug } from "@/lib/properties";
import { formatPrice, formatArea, getPurposeLabel, getPropertyTypeLabel, getDistrictLabels } from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";
import type { Property } from "@/lib/properties";

const PORTRAIT: Record<string, string> = {
  "villa-luqtaifiya": "/images/properties/p01.jpg",
  "house-khalifa": "/images/properties/p12.jpg",
  "villa-al-dhakhira": "/images/properties/p05.jpg",
};
const LANDSCAPE: Record<string, string> = {
  "villa-luqtaifiya": "/images/clean/crop-p03.jpg",
  "house-khalifa": "/images/clean/crop-p12.jpg",
  "villa-al-dhakhira": "/images/properties/p05.jpg",
};

export function FeaturedSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const f = dict.featured;
  const ordered = (
    ["villa-luqtaifiya", "house-khalifa", "villa-al-dhakhira"]
      .map((slug) => getPropertyBySlug(slug))
      .filter(Boolean) as Property[]
  ).slice(0, 3);

  const [primary, ...rest] = ordered;

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        {/* Quiet chapter intro — the property is the hero, not the heading */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
            <div>
              <Eyebrow tone="gold">{f.eyebrow}</Eyebrow>
              <h2
                className={`mt-4 max-w-md text-2xl leading-tight tracking-tight text-ink md:text-4xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {f.title}
              </h2>
            </div>
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-stone transition-colors hover:border-burgundy hover:text-burgundy"
            >
              {f.viewAll}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {primary && (
          <Reveal className="mt-12">
            <article className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft sm:aspect-[16/12] lg:aspect-[21/10]">
              <Link
                href={`/${locale}/properties/${primary.slug}`}
                className="group absolute inset-0 block"
              >
                <Image
                  src={PORTRAIT[primary.slug] ?? primary.images[0]}
                  alt={locale === "ar" ? primary.titleAr : primary.titleEn}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1.8s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
              </Link>

              {/* Elegant edge metadata plate over the image */}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 md:p-10 lg:p-14">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft">
                    {getPurposeLabel(locale)(primary.purpose)} · {getPropertyTypeLabel(locale)(primary.propertyType)}
                  </p>
                  <h3
                    className={`mt-3 text-3xl leading-tight text-paper md:text-5xl ${
                      locale === "ar" ? "arabic font-bold" : "font-semibold"
                    }`}
                  >
                    {locale === "ar" ? primary.titleAr : primary.titleEn}
                  </h3>
                  <p className="mt-2 text-sm tracking-wide text-paper/70">{getDistrictLabels(locale, primary)} · Doha</p>
                </div>

                <div className="flex flex-col items-start gap-5 md:items-end">
                  <div className="text-end">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-paper/60">{dict.propertyDetail.price}</p>
                    <p className="mt-1 text-2xl font-semibold text-paper tabular-nums md:text-3xl">
                      {formatPrice(primary.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-paper/50">
                      {formatArea(primary.area, locale)} ·{" "}
                      <span dir="ltr">{primary.referenceNumber}</span>
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/properties/${primary.slug}`}
                    className="group inline-flex items-center gap-2 border-b border-paper/50 pb-1 text-sm tracking-wide text-paper transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    {f.viewProperty}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Supporting properties as slim photographic entries */}
        {rest.length > 0 && (
          <Reveal className="mt-14">
            <div className="grid gap-8 md:grid-cols-2">
              {rest.map((p) => (
                <Link
                  key={p.id}
                  href={`/${locale}/properties/${p.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
                    <Image
                      src={LANDSCAPE[p.slug] ?? p.images[0]}
                      alt={locale === "ar" ? p.titleAr : p.titleEn}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <p className="absolute bottom-4 start-4 text-[11px] uppercase tracking-[0.26em] text-gold-soft">
                      {getPurposeLabel(locale)(p.purpose)} · {getDistrictLabels(locale, p)}
                    </p>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-4">
                    <h4 className={`text-xl text-ink md:text-2xl ${locale === "ar" ? "arabic" : ""}`}>
                      {locale === "ar" ? p.titleAr : p.titleEn}
                    </h4>
                    <p className="shrink-0 text-lg font-medium text-ink tabular-nums">
                      {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
