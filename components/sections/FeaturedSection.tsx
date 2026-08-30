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
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="gold">{f.eyebrow}</Eyebrow>
              <h2
                className={`mt-4 max-w-xl text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {f.title}
              </h2>
            </div>
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
            >
              {f.viewAll}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {primary && (
          <Reveal className="mt-12">
            <article className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-14">
              {/* Tall portrait cinematic image */}
              <div className="lg:col-span-7">
                <Link
                  href={`/${locale}/properties/${primary.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-ink-soft md:aspect-[16/11] lg:aspect-[4/5]"
                >
                  <Image
                    src={PORTRAIT[primary.slug] ?? primary.images[0]}
                    alt={locale === "ar" ? primary.titleAr : primary.titleEn}
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  />
                  <span className="absolute bottom-5 start-5 text-[11px] uppercase tracking-[0.26em] text-paper/85">
                    {locale === "ar" ? "العقار المختار" : "Featured property"}
                  </span>
                </Link>
              </div>

              {/* Typography/meta column */}
              <div className="flex flex-col justify-center lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  {getPurposeLabel(locale)(primary.purpose)} · {getPropertyTypeLabel(locale)(primary.propertyType)}
                </p>
                <h3
                  className={`mt-4 text-3xl leading-tight tracking-tight text-ink md:text-5xl ${
                    locale === "ar" ? "arabic font-semibold" : "font-semibold"
                  }`}
                >
                  {locale === "ar" ? primary.titleAr : primary.titleEn}
                </h3>
                <p className="mt-3 text-sm tracking-wide text-stone">{getDistrictLabels(locale, primary)} · Doha</p>

                <p className={`mt-6 max-w-md text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                  {locale === "ar" ? primary.descriptionAr : primary.descriptionEn}
                </p>

                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-stone">
                  {dict.propertyDetail.reference} ·{" "}
                  <span className="font-medium tracking-normal text-ink/70" dir="ltr">
                    {primary.referenceNumber}
                  </span>
                </p>

                <div className="mt-9 grid max-w-md grid-cols-3 gap-6 border-y border-line py-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.price}</p>
                    <p className="mt-2 text-lg font-medium text-ink tabular-nums">
                      {formatPrice(primary.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.areaLabel}</p>
                    <p className="mt-2 text-lg font-medium text-ink tabular-nums">{formatArea(primary.area, locale)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "النوع" : "Type"}</p>
                    <p className="mt-2 text-lg font-medium text-ink">{getPropertyTypeLabel(locale)(primary.propertyType)}</p>
                  </div>
                </div>

                <Link
                  href={`/${locale}/properties/${primary.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
                >
                  {f.viewProperty}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        )}

        {/* Supporting properties as slender editorial entries */}
        {rest.length > 0 && (
          <Reveal className="mt-14">
            <div className="border-t border-line">
              {rest.map((p) => (
                <Link
                  key={p.id}
                  href={`/${locale}/properties/${p.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-line py-6 md:grid-cols-[220px_1fr_auto] md:gap-10"
                >
                  <div className="relative hidden aspect-[16/10] overflow-hidden bg-ink-soft md:block">
                    <Image
                      src={LANDSCAPE[p.slug] ?? p.images[0]}
                      alt={locale === "ar" ? p.titleAr : p.titleEn}
                      fill
                      sizes="220px"
                      className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                      {getPurposeLabel(locale)(p.purpose)} · {getDistrictLabels(locale, p)}
                    </p>
                    <h4 className={`mt-1 text-xl text-ink md:text-2xl ${locale === "ar" ? "arabic" : ""}`}>
                      {locale === "ar" ? p.titleAr : p.titleEn}
                    </h4>
                    <p className="mt-1 text-sm text-stone tabular-nums">
                      {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                      {p.area ? ` · ${formatArea(p.area, locale)}` : ""}
                    </p>
                  </div>
                  <ArrowIcon className="mb-1 text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-burgundy rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
