import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { getPropertyBySlug } from "@/lib/properties";
import { formatPrice, formatArea, getPurposeLabel, getPropertyTypeLabel, getDistrictLabels } from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";
import type { Property } from "@/lib/properties";

const ENTRY = [
  "house-khalifa",
  "villa-al-dhakhira",
  "twin-villas-al-khor",
] as const;

export function CollectionSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const c = dict.collection;
  const entries = ENTRY.map((slug) => getPropertyBySlug(slug)).filter(Boolean) as Property[];
  const [primary, ...rest] = entries;

  return (
    <section className="bg-mist py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="gold">{c.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 max-w-xl text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {c.title}
            </h2>
            <p className={`mt-4 max-w-md text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
              {c.subtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/properties`}
            className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
          >
            {c.viewAll}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric catalogue: large feature + stacked smaller entries */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {primary && (
            <Link
              href={`/${locale}/properties/${primary.slug}`}
              className="group block lg:col-span-7"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft sm:aspect-[16/11]">
                <Image
                  src="/images/properties/p11.jpg"
                  alt={locale === "ar" ? primary.titleAr : primary.titleEn}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <PropertyMeta p={primary} locale={locale} />
            </Link>
          )}

          <div className="flex flex-col gap-12 lg:col-span-5">
            {rest.map((p) => (
              <Link key={p.id} href={`/${locale}/properties/${p.slug}`} className="group flex gap-6 sm:gap-8">
                <div className="w-36 shrink-0 overflow-hidden bg-ink-soft sm:w-48">
                  <Image
                    src={p.images[0]}
                    alt={locale === "ar" ? p.titleAr : p.titleEn}
                    width={640}
                    height={740}
                    sizes="(min-width: 640px) 192px, 144px"
                    className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-line pt-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                    {getPurposeLabel(locale)(p.purpose)} — {getPropertyTypeLabel(locale)(p.propertyType)}
                  </p>
                  <h3 className={`mt-2 text-xl text-ink md:text-2xl ${locale === "ar" ? "arabic" : ""}`}>
                    {locale === "ar" ? p.titleAr : p.titleEn}
                  </h3>
                  <p className="mt-1 text-sm text-stone">{getDistrictLabels(locale, p)}</p>
                  <p className="mt-auto pt-3 text-lg font-medium text-ink tabular-nums">
                    {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
                  </p>
                  <div className="mt-1 flex items-center gap-4 text-sm text-stone">
                    <span className="tabular-nums">
                      {formatArea(p.area, locale)}
                      {p.bedrooms ? ` · ${p.bedrooms} ${locale === "ar" ? "غرف" : "beds"} · ${p.bathrooms ?? ""} ${locale === "ar" ? "حمامات" : "baths"}` : ""}
                    </span>
                  </div>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-burgundy">
                    {locale === "ar" ? "عرض العقار" : "View property"}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PropertyMeta({ p, locale }: { p: Property; locale: Locale }) {
  return (
    <div className="mt-4 grid gap-x-6 gap-y-4 border-t border-line pt-5 md:grid-cols-2">
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
          {getPurposeLabel(locale)(p.purpose)} — {getPropertyTypeLabel(locale)(p.propertyType)} —{" "}
          {getDistrictLabels(locale, p)}
        </p>
        <h3 className={`mt-2 text-2xl text-ink md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
          {locale === "ar" ? p.titleAr : p.titleEn}
        </h3>
        <p className="mt-2 text-xs tracking-wide text-stone" dir="ltr">
          {locale === "ar" ? "المرجع" : "Ref"} {p.referenceNumber}
        </p>
      </div>
      <div className="flex flex-col items-start justify-between gap-3 md:items-end md:text-end">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink">
          <span className="tabular-nums">{formatArea(p.area, locale) ?? "—"}</span>
          <span className="tabular-nums">
            {p.bedrooms ?? "—"} {locale === "ar" ? "غرف" : "beds"} · {p.bathrooms ?? "—"}{" "}
            {locale === "ar" ? "حمامات" : "baths"}
          </span>
        </div>
        <p className="text-2xl font-medium text-ink tabular-nums md:text-3xl">
          {formatPrice(p.price, locale) ?? (locale === "ar" ? "عند الطلب" : "On request")}
        </p>
      </div>
    </div>
  );
}