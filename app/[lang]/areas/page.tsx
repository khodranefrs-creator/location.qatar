import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { properties } from "@/lib/properties";
import { PageHeader } from "@/components/PageHeader";
import { Container, ArrowIcon } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const dict = dictionaries[locale];
  return {
    title: `${dict.nav.areas} — ${dict.meta.siteName}`,
    description: dict.areasPage.subtitle,
  };
}

export default async function AreasPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];

  const byDistrict = new Map<string, { ar: string; en: string; count: number }>();
  for (const p of properties) {
    const cur = byDistrict.get(p.districtAr) ?? { ar: p.districtAr, en: p.districtEn, count: 0 };
    cur.count += 1;
    byDistrict.set(p.districtAr, cur);
  }
  const districts = Array.from(byDistrict.values()).sort((a, b) =>
    locale === "ar" ? a.ar.localeCompare(b.ar, "ar") : a.en.localeCompare(b.en)
  );

  return (
    <main className="bg-paper pb-20">
      <PageHeader
        eyebrow={dict.nav.areas}
        title={dict.areasPage.title}
        subtitle={dict.areasPage.subtitle}
        locale={locale}
      />

      <Container className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <p className="text-sm text-stone">
            {districts.length} {dict.areasPage.allAreas} · {properties.length} {dict.areasPage.properties}
          </p>
          <Link
            href={`/${locale}/properties`}
            className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
          >
            {dict.areas.viewAll}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((d) => (
            <Link
              key={d.ar}
              href={`/${locale}/properties?area=${encodeURIComponent(d.ar)}`}
              className="group flex items-center justify-between gap-4 bg-paper px-6 py-8 transition-colors hover:bg-mist"
            >
              <div>
                <span className={`text-xl text-ink transition-colors group-hover:text-burgundy md:text-2xl ${locale === "ar" ? "arabic font-medium" : "font-medium"}`}>
                  {locale === "ar" ? d.ar : d.en}
                </span>
                <p className="mt-1.5 text-xs tracking-wide text-stone">
                  {d.count} {dict.areasPage.properties} ·{" "}
                  <span className="text-burgundy group-hover:underline">{dict.areasPage.browse}</span>
                </p>
              </div>
              <ArrowIcon className="shrink-0 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-burgundy rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
