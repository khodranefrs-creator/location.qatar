import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { properties, propertyTypes, type Property, type PropertyType, type Purpose } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const dict = dictionaries[locale];
  return {
    title: `${dict.propertiesPage.title} — ${dict.meta.siteName}`,
    description: dict.propertiesPage.subtitle,
  };
}

export default async function PropertiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const qp = await searchParams;

  const purpose = (qp.purpose === "sale" || qp.purpose === "rent" ? qp.purpose : undefined) as Purpose | undefined;
  const type = (propertyTypes.includes(qp.type as PropertyType) ? (qp.type as PropertyType) : undefined);
  const area = qp.area;
  const maxPrice = qp.price ? Number(qp.price) : undefined;

  let list: Property[] = properties;
  if (purpose) list = list.filter((p) => p.purpose === purpose);
  if (type) list = list.filter((p) => p.propertyType === type);
  if (area) list = list.filter((p) => p.districtAr === area);
  if (maxPrice && !Number.isNaN(maxPrice)) list = list.filter((p) => p.price !== undefined && p.price <= maxPrice);

  const areas = Array.from(new Set(properties.map((p) => p.districtAr))).sort();

  const typeLabels =
    locale === "ar"
      ? { villa: "فيلا", house: "بيت", land: "أرض", building: "عمارة", apartment: "شقة", commercial: "تجاري", other: "أخرى" }
      : { villa: "Villa", house: "House", land: "Land", building: "Building", apartment: "Apartment", commercial: "Commercial", other: "Other" };

  function hrefFor(patch: Record<string, string>) {
    const sp = new URLSearchParams();
    if (purpose && !patch.purpose) sp.set("purpose", purpose);
    if (type && !patch.type) sp.set("type", type);
    if (area && !patch.area) sp.set("area", area);
    if (maxPrice && !patch.price) sp.set("price", String(maxPrice));
    Object.entries(patch).forEach(([k, v]) => (v ? sp.set(k, v) : sp.delete(k)));
    const qs = sp.toString();
    return `/${locale}/properties${qs ? `?${qs}` : ""}`;
  }

  const filterLink = (active: boolean, href: string, label: string) => (
    <Link
      href={href}
      aria-pressed={active}
      className={`px-4 py-2 text-sm transition-colors ${
        active ? "bg-ink text-mist" : "border border-ink/15 text-ink hover:border-ink"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <main>
      <PageHeader
        eyebrow={dict.nav.properties}
        title={dict.propertiesPage.title}
        subtitle={dict.propertiesPage.subtitle}
        locale={locale}
      />

      <div className="bg-paper pb-16">
        <Container className="pt-10">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 border-b border-line pb-6">
            {filterLink(!purpose, hrefFor({ purpose: "" }), dict.propertiesPage.all)}
            {filterLink(purpose === "sale", hrefFor({ purpose: "sale" }), dict.search.buy)}
            {filterLink(purpose === "rent", hrefFor({ purpose: "rent" }), dict.search.rent)}
            <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
            {(Object.keys(typeLabels) as PropertyType[]).map((k) =>
              filterLink(type === k, hrefFor({ type: k }), typeLabels[k])
            )}
            <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
            {areas.map((a) =>
              filterLink(area === a, hrefFor({ area: a }), a)
            )}
          </div>

          <p className="mt-5 text-sm text-stone">
            {dict.search.results} ({list.length})
          </p>

          {list.length === 0 ? (
            <div className="mt-10 border border-line bg-mist p-12 text-center">
              <p className="text-xl text-ink">{dict.search.noResults}</p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <PropertyCard key={p.id} property={p} locale={locale} />
              ))}
            </div>
          )}

          <p className="mt-12 text-xs text-stone/70">{dict.common.demoNote}</p>
        </Container>
      </div>
    </main>
  );
}
