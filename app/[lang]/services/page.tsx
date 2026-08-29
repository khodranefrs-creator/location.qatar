import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { PageHeader } from "@/components/PageHeader";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const dict = dictionaries[locale];
  return {
    title: `${dict.services.title} — ${dict.meta.siteName}`,
    description: dict.services.lead,
  };
}

const IMAGES = [
  "/images/properties/p01.jpg",
  "/images/properties/p05.jpg",
  "/images/properties/p08.jpg",
  "/images/properties/p10.jpg",
  "/images/properties/p12.jpg",
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const s = dict.services;

  return (
    <main className="bg-paper pb-20">
      <PageHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.lead} locale={locale} />

      <Container className="mt-14">
        <div className="divide-y divide-ink/10">
          {s.items.map((item, i) => (
            <Reveal key={item.title}>
              <div className="grid items-center gap-8 py-10 md:grid-cols-12 md:py-14">
                <div className="order-1 md:col-span-5">
                  <span className="text-sm font-semibold tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className={`mt-3 text-3xl font-medium text-ink md:text-4xl ${locale === "ar" ? "arabic" : ""}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 max-w-md text-lg leading-8 text-stone ${locale === "ar" ? "arabic" : ""}`}>
                    {item.desc}
                  </p>
                </div>
                <div className="order-2 md:col-span-7">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink-soft">
                    <Image
                      src={IMAGES[i % IMAGES.length]}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-12 md:flex-row md:items-center">
            <div>
              <Eyebrow tone="gold">{dict.contact.title}</Eyebrow>
              <p className={`mt-3 max-w-xl text-2xl leading-snug text-ink md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                {locale === "ar" ? "جاهزون للحديث عن عقارك." : "Ready to talk about your property."}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-ink px-7 py-4 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink"
            >
              {locale === "ar" ? "تواصل معنا" : "Contact us"}
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
