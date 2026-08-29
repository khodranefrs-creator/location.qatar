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
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
        <Reveal>
          <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-8 bg-gold" />
            {t.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className={`mt-10 max-w-5xl text-4xl leading-[1.02] tracking-tight text-mist md:text-7xl lg:text-8xl ${
              locale === "ar" ? "arabic font-bold" : "font-semibold"
            }`}
          >
            {t.title1}
            <br className="md:hidden" />
            <span className="block text-gold-soft">{t.title2}</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex max-w-xl items-start gap-6 md:mt-16">
            <span className="mt-2 block h-px w-10 shrink-0 bg-gold" />
            <p className={`max-w-md text-base leading-relaxed text-mist/70 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
              {t.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
