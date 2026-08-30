import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function CompanySection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.about;
  const m = dict.marketStatement;

  return (
    <section className="bg-mist py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-6 max-w-xl text-3xl leading-[1.1] tracking-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-bold" : "font-semibold"
              }`}
            >
              {locale === "ar" ? site.nameAr : site.nameEn}
            </h2>
            <p className={`mt-6 max-w-xl text-lg leading-relaxed text-stone md:text-xl ${locale === "ar" ? "arabic" : ""}`}>
              {m.body} {t.statement}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
              <Link
                href={`tel:${site.phoneRaw}`}
                className="text-sm tracking-wide text-ink transition-colors hover:text-burgundy"
                dir="ltr"
              >
                {site.phoneDisplay}
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-sm tracking-wide text-ink transition-colors hover:text-burgundy"
                dir="ltr"
              >
                {site.email}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-ink transition-colors hover:text-burgundy"
              >
                {locale === "ar" ? site.addressAr : site.addressEn}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px border border-line bg-line">
              <div className="bg-paper p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-stone">
                  {locale === "ar" ? "الترخيص" : "License"}
                </p>
                <p className="mt-3 text-2xl font-medium text-ink md:text-3xl">{locale === "ar" ? "رقم 40" : "No. 40"}</p>
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
                <p className="text-[11px] uppercase tracking-[0.24em] text-stone">{locale === "ar" ? "الموقع" : "Location"}</p>
                <p className="mt-3 text-2xl font-medium text-ink md:text-3xl">{locale === "ar" ? "قطر" : "Qatar"}</p>
              </div>
              <div className="bg-paper p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-stone">{locale === "ar" ? "المقر" : "Office"}</p>
                <p className="mt-3 text-base font-medium leading-6 text-ink" dir="ltr">
                  {site.addressEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}