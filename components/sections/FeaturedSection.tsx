import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { getPropertyBySlug } from "@/lib/properties";
import {
  formatPrice,
  formatArea,
  getPurposeLabel,
  getPropertyTypeLabel,
  getDistrictLabels,
} from "@/lib/utils";
import { site } from "@/lib/site";
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
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="gold">{f.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 max-w-xl text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {f.title}
            </h2>
          </div>
        </div>

        {/* Cinematic feature with overlapping property information plate */}
        <div className="relative mt-12 overflow-hidden bg-ink-soft">
          <Link
            href={`/${locale}/properties/${p.slug}`}
            className="group block aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/10]"
          >
            <Image
              src="/images/properties/p01.jpg"
              alt={locale === "ar" ? p.titleAr : p.titleEn}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform duration-[1.8s] group-hover:scale-105"
            />
          </Link>

          {/* Information plate overlapping the image edge */}
          <div className="relative z-10 mx-5 -mt-24 bg-paper p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)] sm:mx-8 sm:p-8 lg:absolute lg:inset-x-8 lg:-mt-0 lg:bottom-0 lg:max-w-md lg:px-10 lg:py-9">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
              <div className="min-w-0">
                <p className="text-[12px] uppercase tracking-[0.26em] text-gold">
                  {getPurposeLabel(locale)(p.purpose)} — {getPropertyTypeLabel(locale)(p.propertyType)} ·{" "}
                  {getDistrictLabels(locale, p)}
                </p>
                <h3
                  className={`mt-3 text-2xl leading-tight text-ink md:text-3xl ${
                    locale === "ar" ? "arabic font-bold" : "font-semibold"
                  }`}
                >
                  {locale === "ar" ? p.titleAr : p.titleEn}
                </h3>
                <p className="mt-1 text-sm tracking-wide text-stone">Doha · {getDistrictLabels(locale, p)}</p>
              </div>
              <div className="shrink-0 text-end">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.price}</p>
                <p className="mt-1 text-3xl font-semibold text-ink tabular-nums md:text-4xl">
                  {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{dict.propertyDetail.areaLabel}</p>
                <p className="mt-1 text-lg font-medium text-ink tabular-nums">{formatArea(p.area, locale) ?? "—"}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "الغرف" : "Beds"}</p>
                <p className="mt-1 text-lg font-medium text-ink tabular-nums">{p.bedrooms ?? "—"}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "الحمامات" : "Baths"}</p>
                <p className="mt-1 text-lg font-medium text-ink tabular-nums">{p.bathrooms ?? "—"}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">{locale === "ar" ? "المرجع" : "Ref"}</p>
                <p className="mt-1 text-lg font-medium text-ink tabular-nums" dir="ltr">
                  {p.referenceNumber}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-burgundy transition-colors hover:text-ink"
              >
                {locale === "ar" ? "استفسر عبر واتساب" : "Enquire on WhatsApp"}
              </a>
              <Link
                href={`/${locale}/properties/${p.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-burgundy"
              >
                {f.viewProperty}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}