import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function HeroSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const h = dict.hero;
  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      aria-label={h.title1 + " " + h.title2}
    >
      <Image
        src="/images/hero/hero-1.png"
        alt={h.eyebrow}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 md:px-10 md:pb-24">
        <div className="max-w-3xl md:max-w-2xl lg:max-w-3xl">
          <p className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.28em] text-mist/70">
            <span className="h-px w-8 bg-gold-soft" />
            {h.eyebrow}
          </p>
          <h1
            className={`mt-6 text-[44px] leading-[1.05] text-mist md:text-[72px] lg:text-[84px] ${
              locale === "ar" ? "arabic font-semibold" : "font-semibold"
            }`}
          >
            {h.title1}
            <br />
            <span className="text-gold-soft">{h.title2}</span>
          </h1>
          <p
            className={`mt-6 max-w-xl text-lg leading-8 text-mist/85 md:text-xl ${
              locale === "ar" ? "arabic" : ""
            }`}
          >
            {h.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href={`/${locale}/properties`} variant="gold">
              {h.cta}
            </ButtonLink>
            <ButtonLink href={`/${locale}/list-your-property`} variant="light-outline">
              {h.ctaSecondary}
            </ButtonLink>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 border border-mist/25 bg-black/25 px-3.5 py-2 text-xs tracking-wide text-mist/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {h.license}
          </p>
        </div>
      </div>
    </section>
  );
}
