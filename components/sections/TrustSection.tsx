import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function TrustSection({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.trust;
  return (
    <section className="bg-mist py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1">
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            </div>

            <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
              {/* Google rating — verified */}
              <div className="border-s border-ink/10 ps-8">
                <span className="text-xs font-medium uppercase tracking-wider text-stone">{t.google}</span>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-4xl font-semibold text-ink">{site.googleRating}</span>
                  <div className="flex flex-col">
                    <span className="text-lg leading-none text-gold" aria-label={`${site.googleRating} rating`}>
                      ★★★★★
                    </span>
                    <span className="mt-1 text-xs text-stone">{t.basedOn}</span>
                  </div>
                </div>
              </div>

              {/* License — verified */}
              <div className="border-s border-ink/10 ps-8">
                <span className="text-xs font-medium uppercase tracking-wider text-stone">
                  {locale === "ar" ? "الترخيص" : "License"}
                </span>
                <p className="mt-1 text-lg font-medium text-ink">
                  {locale === "ar" ? site.licenseAr : site.licenseEn}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
