import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { properties, getPropertyBySlug } from "@/lib/properties";
import { site, whatsappUrl } from "@/lib/site";
import {
  formatPrice,
  formatArea,
  getPurposeLabel,
  getPropertyTypeLabel,
  getDistrictLabels,
  propertyBrochureMessage,
} from "@/lib/utils";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Container, Eyebrow } from "@/components/ui";
import { PropertiesGrid } from "@/components/PropertiesGrid";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const dict = dictionaries[locale];
  const p = getPropertyBySlug(slug);
  if (!p) return { title: dict.propertyDetail.notFound };
  const title = locale === "ar" ? p.titleAr : p.titleEn;
  const desc = locale === "ar" ? p.descriptionAr : p.descriptionEn;
  return {
    title: `${title} — ${dict.meta.siteName}`,
    description: desc.slice(0, 155),
    openGraph: { title, description: desc, images: [p.images[0]] },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const p = getPropertyBySlug(slug);
  if (!p) notFound();

  const t = dict.propertyDetail;
  const price = formatPrice(p.price, locale);
  const area = formatArea(p.area, locale);
  const title = locale === "ar" ? p.titleAr : p.titleEn;
  const description = locale === "ar" ? p.descriptionAr : p.descriptionEn;
  const purposeLabel = getPurposeLabel(locale)(p.purpose);
  const typeLabel = getPropertyTypeLabel(locale)(p.propertyType);
  const district = getDistrictLabels(locale, p);
  const enquiryMsg = propertyBrochureMessage(p, locale);
  const waLink = whatsappUrl(enquiryMsg, locale);
  const visitMsg =
    locale === "ar"
      ? `السلام عليكم، أود طلب معاينة لهذا العقار: ${title} (المرجع ${p.referenceNumber})`
      : `Hello, I would like to request a viewing for this property: ${title} (Ref ${p.referenceNumber})`;
  const visitLink = whatsappUrl(visitMsg, locale);

  const similar = properties.filter((x) => x.id !== p.id).slice(0, 3);

  const specs = [
    { label: t.purposeLabel, value: purposeLabel },
    { label: typeLabel === "" ? " " : dict.search.type, value: typeLabel },
    ...(typeof p.bedrooms === "number" ? [{ label: locale === "ar" ? "غرف النوم" : "Bedrooms", value: String(p.bedrooms) }] : []),
    ...(typeof p.bathrooms === "number" ? [{ label: locale === "ar" ? "الحمامات" : "Bathrooms", value: String(p.bathrooms) }] : []),
    ...(area ? [{ label: t.areaLabel, value: area }] : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    image: p.images,
    sku: p.referenceNumber,
    brand: { "@type": "Brand", name: dict.meta.siteName },
    offers: p.price
      ? { "@type": "Offer", price: p.price, priceCurrency: p.currency, availability: "https://schema.org/InStock" }
      : undefined,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-16 md:pt-20">
        <Container className="pt-6">
          <Link
            href={`/${locale}/properties`}
            className="inline-flex items-center gap-2 text-sm text-stone hover:text-ink"
          >
            <span aria-hidden="true" className={locale === "ar" ? "rotate-180 inline-block" : ""}>{"→"}</span>
            {t.back}
          </Link>
        </Container>

        {/* Gallery */}
        <Container className="mt-6">
          <PropertyGallery images={p.images} title={title} locale={locale} />
        </Container>

        {/* Title + enquiry */}
        <Container className="mt-10 flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`px-3 py-1 text-xs font-semibold tracking-wide ${
                  p.purpose === "sale" ? "bg-gold text-ink" : "bg-ink text-mist"
                }`}
              >
                {purposeLabel}
              </span>
              <span className="border border-line px-3 py-1 text-xs font-medium text-stone">{typeLabel}</span>
              <span className="text-xs tracking-wider text-stone">
                {t.reference}: {p.referenceNumber}
              </span>
            </div>
            <h1
              className={`mt-4 text-3xl leading-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {title}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-base text-stone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {district} — {locale === "ar" ? p.city : p.city}
            </p>
          </div>

          <div className="text-start md:text-end">
            {price ? (
              <p className={`text-3xl font-semibold text-ink md:text-4xl ${locale === "ar" ? "arabic" : ""}`}>
                {price}
              </p>
            ) : (
              <p className="text-2xl font-medium text-stone">{t.priceOnRequest}</p>
            )}
            <p className="mt-1 text-sm text-stone">{dict.footer.tagline}</p>
          </div>
        </Container>

        {/* Specs strip */}
        <Container className="mt-10">
          <div className="grid grid-cols-2 divide-x divide-y divide-line border border-line bg-mist sm:grid-cols-3 md:grid-cols-5">
            {specs.map((s) => (
              <div key={s.label} className="px-5 py-5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-stone">{s.label}</p>
                <p className={`mt-1 text-xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </Container>

        {/* Description + amenities */}
        <Container className="mt-14 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Eyebrow tone="gold">{t.description}</Eyebrow>
            <p className={`mt-5 text-lg leading-8 text-ink/85 ${locale === "ar" ? "arabic" : ""}`}>{description}</p>

            {p.amenities.length > 0 && (
              <>
                <h2 className={`mt-12 text-2xl font-medium text-ink md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                  {t.amenities}
                </h2>
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {p.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2.5 border border-line bg-mist px-4 py-3 text-sm text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Enquiry module */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 border border-line bg-mist p-6 md:p-8">
              <p className={`text-xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>{t.interested}</p>
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex w-full items-center justify-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink"
                >
                  {t.call}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-mist"
                >
                  {t.whatsapp}
                </a>
                <a
                  href={visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-mist"
                >
                  {t.requestVisit}
                </a>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-stone">{t.location}</p>
                <iframe
                  title={t.location}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(`${p.districtEn}, Qatar`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="160"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mt-3 block border-0"
                />
              </div>
            </div>
          </aside>
        </Container>

        {/* Similar */}
        <Container className="mt-20 pb-4">
          <Eyebrow tone="gold">{dict.featured.eyebrow}</Eyebrow>
          <div className="mt-10">
            <PropertiesGrid locale={locale} items={similar} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </Container>

        <p className="mx-auto mt-14 max-w-[1380px] px-5 pb-16 text-xs text-stone/70 md:px-10">{dict.common.demoNote}</p>
      </div>
    </main>
  );
}
