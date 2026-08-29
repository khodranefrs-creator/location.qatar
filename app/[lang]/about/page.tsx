import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Container, Eyebrow, ButtonLink } from "@/components/ui";
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
    title: `${dict.about.title} — ${dict.meta.siteName}`,
    description: dict.about.statement,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const a = dict.about;
  const t = dict.trust;

  return (
    <main className="bg-paper pb-20">
      <PageHeader eyebrow={a.eyebrow} title={a.title} subtitle={a.statement} locale={locale} />

      <Container className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
          <Image
            src="/images/about/about-1.png"
            alt={a.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <Reveal>
            <Eyebrow tone="gold">لوكيشن</Eyebrow>
            <h2 className={`mt-5 text-3xl leading-snug text-ink md:text-4xl ${locale === "ar" ? "arabic font-semibold" : "font-semibold"}`}>
              {locale === "ar" ? "شركة عقارية داخل دولة قطر." : "A Qatari real estate company."}
            </h2>
            <p className={`mt-5 text-lg leading-8 text-ink/80 ${locale === "ar" ? "arabic" : ""}`}>
              {a.statement}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-ink/15 bg-mist px-4 py-2.5 text-sm font-medium text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {site.licenseAr} · {a.licenseLabel}
              </span>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-stone">{t.google}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-5xl font-semibold text-ink">{site.googleRating}</span>
                <div className="flex flex-col">
                  <span className="text-gold" aria-label={`${site.googleRating} rating`}>{"★★★★★"}</span>
                  <span className="mt-1 text-sm text-stone">{t.basedOn}</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <ButtonLink href={`/${locale}/contact`} variant="solid">
                {dict.contact.title}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
