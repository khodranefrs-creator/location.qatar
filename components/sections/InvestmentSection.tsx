import Image from "next/image";
import { Eyebrow, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function InvestmentSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.investment;
  return (
    <section className="relative overflow-hidden bg-ink-hard text-mist">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex items-center lg:order-1">
          <div className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
            <Reveal>
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 max-w-xl text-4xl leading-[1.12] text-mist md:text-5xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
              <p className={`mt-6 max-w-lg text-lg leading-8 text-mist/70 ${locale === "ar" ? "arabic" : ""}`}>
                {t.body}
              </p>
              <div className="mt-10">
                <ButtonLink href={`/${locale}/contact`} variant="light-outline">
                  {t.cta}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 min-h-[300px] lg:order-2 lg:min-h-[620px]">
          <Image
            src="/images/about/about-1.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-hard/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
