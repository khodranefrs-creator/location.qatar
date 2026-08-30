import Link from "next/link";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function AboutSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.about;
  const m = dict.marketStatement;
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-5 max-w-md text-3xl leading-[1.06] tracking-tight text-ink md:text-5xl ${
                  locale === "ar" ? "arabic font-bold" : "font-semibold"
                }`}
              >
                {m.title1}
                <span className="block">{m.title2}</span>
              </h2>
              <p className={`mt-5 max-w-md text-base leading-relaxed text-stone md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
                {m.body} {t.statement}
              </p>
              <Link
                href={`/${locale}/about`}
                className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-burgundy hover:text-burgundy"
              >
                {t.cta}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                <div className="bg-paper p-7">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-stone">
                    {locale === "ar" ? "الترخيص" : "License"}
                  </p>
                  <p className="mt-3 text-2xl font-medium text-ink md:text-3xl">
                    {locale === "ar" ? "رقم 40" : "No. 40"}
                  </p>
                </div>
                <div className="bg-paper p-7">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-stone">{dict.trust.google}</p>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-medium text-ink md:text-3xl">{site.googleRating}</span>
                    <span className="text-sm text-gold" aria-label={`${site.googleRating} rating`}>★★★★★</span>
                  </p>
                  <p className="mt-2 text-xs text-stone">{dict.trust.basedOn}</p>
                </div>
                <div className="bg-paper p-7">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-stone">
                    {locale === "ar" ? "الموقع" : "Location"}
                  </p>
                  <p className="mt-3 text-2xl font-medium text-ink md:text-3xl">{locale === "ar" ? "قطر" : "Qatar"}</p>
                </div>
                <div className="bg-paper p-7">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-stone">
                    {locale === "ar" ? "المقر" : "Office"}
                  </p>
                  <p className="mt-3 text-base font-medium leading-6 text-ink" dir="ltr">
                    {site.addressEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}