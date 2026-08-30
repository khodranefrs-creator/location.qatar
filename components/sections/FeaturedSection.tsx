import Image from "next/image";
import Link from "next/link";
import { Container, ArrowIcon } from "@/components/ui";
import { getPropertyBySlug } from "@/lib/properties";
import {
  formatPrice,
  formatArea,
  getPurposeLabel,
  getPropertyTypeLabel,
  getDistrictLabels,
} from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";
import type { Property } from "@/lib/properties";

export function FeaturedSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const f = dict.featured;
  const p = getPropertyBySlug("villa-luqtaifiya") as Property;

  if (!p) return null;

  return (
    <section className="bg-paper pb-28 md:pb-40">
      <Container>
        <div className="border-t border-line pt-6">
          {/* Editorial spread: image carries the weight, info in a narrow rail */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <Link
                href={`/${locale}/properties/${p.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-ink-soft sm:aspect-[16/11] lg:aspect-[4/3]"
              >
                <Image
                  src="/images/properties/p01.jpg"
                  alt={locale === "ar" ? p.titleAr : p.titleEn}
                  fill
                  priority
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="object-cover transition-transform duration-[1.8s] group-hover:scale-105"
                />
                <span className="absolute bottom-5 start-5 text-[11px] uppercase tracking-[0.26em] text-paper/85">
                  {f.eyebrow}
                </span>
              </Link>
            </div>

            <div className="flex lg:col-span-4">
              <div className="flex w-full flex-col justify-between border-t border-line pt-6 lg:border-t-0 lg:pt-0">
                <div>
                  <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-gold">
                    {getPurposeLabel(locale)(p.purpose)} — {getPropertyTypeLabel(locale)(p.propertyType)}
                  </p>
                  <h2
                    className={`mt-5 text-3xl leading-[1.1] tracking-tight text-ink md:text-5xl ${
                      locale === "ar" ? "arabic font-bold" : "font-semibold"
                    }`}
                  >
                    {locale === "ar" ? p.titleAr : p.titleEn}
                  </h2>
                  <p className="mt-3 text-sm tracking-wide text-stone">{getDistrictLabels(locale, p)} · Doha</p>
                </div>

                <div className="mt-10">
                  <div className="grid grid-cols-3 gap-4 border-y border-line py-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.price}</p>
                      <p className="mt-2 text-lg font-semibold text-ink tabular-nums">
                        {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.areaLabel}</p>
                      <p className="mt-2 text-lg font-medium text-ink tabular-nums">{formatArea(p.area, locale)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "النوع" : "Type"}</p>
                      <p className="mt-2 text-lg font-medium text-ink">{getPropertyTypeLabel(locale)(p.propertyType)}</p>
                    </div>
                  </div>

                  <p className={`mt-6 text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                    {locale === "ar" ? p.descriptionAr : p.descriptionEn}
                  </p>

                  <Link
                    href={`/${locale}/properties/${p.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
                  >
                    {f.viewProperty}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}