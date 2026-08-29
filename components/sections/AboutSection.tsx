import Image from "next/image";
import { Container, Eyebrow, ButtonLink } from "@/components/ui";
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
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-1">
            <div className="relative mr-2 overflow-hidden lg:mr-10">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                <Image
                  src="/images/about/about-1.png"
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-2">
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-6 max-w-xl text-4xl leading-[1.1] text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {t.title}
            </h2>
            <p className={`mt-6 max-w-lg text-lg leading-8 text-stone ${locale === "ar" ? "arabic" : ""}`}>
              {t.statement}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-ink/10 bg-mist px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center border border-ink/20">
                <span className="h-2 w-2 bg-gold" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{site.licenseAr}</p>
                <p className="text-xs text-stone">{t.licenseLabel}</p>
              </div>
            </div>

            <div className="mt-10">
              <ButtonLink href={`/${locale}/about`} variant="solid">
                {t.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
