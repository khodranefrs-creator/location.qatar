import Image from "next/image";
import { Container, Eyebrow, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function CinematicSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.cinematic;
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="/images/about/about-3.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/55" />
      <Container className="relative z-10 flex h-full min-h-[70vh] items-center">
        <Reveal>
          <div className="max-w-3xl py-24 text-mist">
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <p
              className={`mt-7 text-4xl leading-[1.12] md:text-6xl ${locale === "ar" ? "arabic font-semibold" : "font-semibold"}`}
            >
              {t.title}
            </p>
            <p className={`mt-6 max-w-xl text-lg leading-8 text-mist/80 ${locale === "ar" ? "arabic" : ""}`}>
              {t.body}
            </p>
            <div className="mt-9">
              <ButtonLink href={`/${locale}/contact`} variant="light-outline">
                {t.cta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
