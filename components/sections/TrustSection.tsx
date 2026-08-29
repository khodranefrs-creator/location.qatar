import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import type { Dict } from "@/components/types";

export function TrustSection({ dict }: { dict: Dict }) {
  const t = dict.trust;
  return (
    <section className="border-y border-line bg-mist py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-start">
            <div>
              <Eyebrow tone="gold" className="justify-center md:justify-start">
                {t.eyebrow}
              </Eyebrow>
              <p className="mt-4 max-w-md text-xl leading-8 text-ink md:text-2xl">
                {dict.hero.title1} {dict.hero.title2}
              </p>
            </div>

            <div className="border-s border-ink/10 ps-8">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-ink">Google</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-4xl font-semibold text-ink">{site.googleRating}</span>
                <div className="flex flex-col">
                  <span className="text-gold" aria-label={`${site.googleRating} rating`}>
                    {"★★★★★"}
                  </span>
                  <span className="text-xs text-stone">{t.basedOn}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
