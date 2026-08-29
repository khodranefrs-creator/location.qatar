import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/lib/properties";
import type { Locale } from "@/lib/dictionaries";
import {
  formatPrice,
  formatArea,
  getPurposeLabel,
  getPropertyTypeLabel,
  getDistrictLabels,
} from "@/lib/utils";

export function PropertyCard({
  property: p,
  locale,
  large = false,
  priority = false,
}: {
  property: Property;
  locale: Locale;
  large?: boolean;
  priority?: boolean;
}) {
  const purposeLabel = getPurposeLabel(locale)(p.purpose);
  const typeLabel = getPropertyTypeLabel(locale)(p.propertyType);
  const district = getDistrictLabels(locale, p);
  const price = formatPrice(p.price, locale);
  const area = formatArea(p.area);
  const href = `/${locale}/properties/${p.slug}`;

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden ${large ? "" : ""}`}
    >
      <div
        className={`zoom-img relative overflow-hidden bg-ink-soft ${
          large ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={p.images[0]}
          alt={locale === "ar" ? p.titleAr : p.titleEn}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 55vw, 100vw"
              : "(min-width: 1024px) 28vw, 100vw"
          }
          className="object-cover"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Status badges */}
        <div className="absolute start-4 top-4 flex flex-wrap gap-2">
          <span
            className={`px-3 py-1 text-xs font-semibold tracking-wide ${
              p.purpose === "sale" ? "bg-gold text-ink" : "bg-mist text-ink"
            }`}
          >
            {purposeLabel}
          </span>
        </div>

        <span className="absolute end-4 top-4 bg-black/40 px-2.5 py-1 text-[11px] tracking-wider text-mist/90 backdrop-blur-sm">
          {typeLabel}
        </span>

        {/* Bottom info */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-mist md:p-6">
          <p className="text-sm font-medium text-mist/80">{district}</p>
          <h3
            className={`mt-1 leading-snug text-mist ${
              locale === "ar" ? "arabic" : ""
            } ${large ? "text-2xl md:text-3xl" : "text-xl"}`}
          >
            {locale === "ar" ? p.titleAr : p.titleEn}
          </h3>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-mist/25 pt-3">
            <p className="text-sm font-semibold text-gold-soft">
              {price ?? (p.status === "on-request" ? (locale === "ar" ? "عند الطلب" : "On request") : price)}
            </p>
            <div className="flex items-center gap-4 text-xs text-mist/70">
              {typeof p.bedrooms === "number" && (
                <span>
                  {p.bedrooms} {locale === "ar" ? "غرف" : "bd"}
                </span>
              )}
              {typeof p.bathrooms === "number" && (
                <span>
                  {p.bathrooms} {locale === "ar" ? "حمامات" : "ba"}
                </span>
              )}
              {area && <span className="hidden sm:inline">{area}</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
