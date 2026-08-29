import Image from "next/image";
import { Eyebrow, ArrowIcon } from "@/components/ui";
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
    <section className="relative min-h-[82vh] overflow-hidden bg-ink-hard text-mist">
      <Image
        src="/images/clean/banner-wide-c.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div
        className={`absolute inset-0 bg-ink-hard/70 ${
          locale === "ar"
            ? "bg-gradient-to-r from-ink-hard/85 via-ink-hard/50 to-ink-hard/25"
            : "bg-gradient-to-l from-ink-hard/85 via-ink-hard/50 to-ink-hard/25"
        }`}
      />

      <div className="relative z-10 flex min-h-[82vh] items-center">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-10">
          <div className="max-w-xl text-start">
            <Reveal>
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-7 text-5xl leading-[1.02] tracking-tight text-mist md:text-7xl ${
                  locale === "ar" ? "arabic font-bold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
              <p className={`mt-7 max-w-md text-base leading-relaxed text-mist/75 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
                {t.body}
              </p>
              <div className="mt-11">
                <a
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center gap-3 border border-mist/40 px-8 py-4 text-sm font-medium text-mist transition-colors hover:bg-mist hover:text-ink"
                >
                  {t.cta}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
