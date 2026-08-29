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
    title: `${dict.propertiesPage.forSaleTitle} — ${dict.meta.siteName}`,
    description: dict.propertiesPage.forSaleSubtitle,
  };
}

export default async function ForSalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const forSale = properties.filter((p) => p.purpose === "sale");

  return (
    <main>
      <PageHeader
        eyebrow={dict.nav.forSale}
        title={dict.propertiesPage.forSaleTitle}
        subtitle={dict.propertiesPage.forSaleSubtitle}
        locale={locale}
      />
      <div className="bg-paper pb-16">
        <Container className="pt-4">
          <PropertiesGrid locale={locale} items={forSale} />
          <p className="mt-12 text-xs text-stone/70">{dict.common.demoNote}</p>
        </Container>
      </div>
    </main>
  );
}
