import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { properties } from "@/lib/properties";
import { PropertiesGrid } from "@/components/PropertiesGrid";
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
    title: `${dict.propertiesPage.forRentTitle} — ${dict.meta.siteName}`,
    description: dict.propertiesPage.forRentSubtitle,
  };
}

export default async function ForRentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const forRent = properties.filter((p) => p.purpose === "rent");

  return (
    <main>
      <PageHeader
        eyebrow={dict.nav.forRent}
        title={dict.propertiesPage.forRentTitle}
        subtitle={dict.propertiesPage.forRentSubtitle}
        locale={locale}
      />
      <div className="bg-paper pb-16">
        <Container className="pt-4">
          {forRent.length === 0 ? (
            <div className="border border-line bg-mist p-12 text-center">
              <p className="text-xl text-ink">{dict.search.noResults}</p>
            </div>
          ) : (
            <PropertiesGrid locale={locale} items={forRent} />
          )}
          <p className="mt-12 text-xs text-stone/70">{dict.common.demoNote}</p>
        </Container>
      </div>
    </main>
  );
}
