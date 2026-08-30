import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function MarketStatementSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.marketStatement;
  return (
    <section className="relative overflow-hidden bg-burgundy-deep text-mist">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/80 via-burgundy-deep/60 to-burgundy-deep" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 text-center md:px-10 md:py-40">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-8 bg-gold" />
            {t.eyebrow}
            <span className="h-px w-8 bg-gold" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className={`mx-auto mt-10 max-w-5xl text-[clamp(2.5rem,7.5vw,4.25rem)] leading-[1.02] tracking-tight text-mist md:text-[clamp(4rem,9vw,6.5rem)] ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {t.title1}
            <br className="md:hidden" />
            <span className="block text-gold-soft">{t.title2}</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mx-auto mt-12 max-w-2xl md:mt-16">
            <p className={`mx-auto max-w-lg text-base leading-relaxed text-mist/70 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
              {t.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
