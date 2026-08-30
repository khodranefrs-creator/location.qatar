import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { SellSection } from "@/components/sections/SellSection";
import { ContactSection } from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const dict = dictionaries[locale];
  return {
    title: `${dict.meta.siteName} — ${locale === "ar" ? "قطر" : "Qatar"}`,
    description: dict.meta.description,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];

  return (
    <main>
      <HeroSection locale={locale} dict={dict} />
      <FeaturedSection locale={locale} dict={dict} />
      <CollectionSection locale={locale} dict={dict} />
      <AreasSection locale={locale} dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <CompanySection locale={locale} dict={dict} />
      <SellSection locale={locale} dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </main>
  );
}