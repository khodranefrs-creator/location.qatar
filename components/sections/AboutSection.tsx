import Image from "next/image";
import Link from "next/link";
import { Eyebrow, ArrowIcon } from "@/components/ui";
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
    <section className="bg-paper py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden bg-ink-soft">
              <div className="relative aspect-[4/3] md:aspect-[3/2]">
                <Image
                  src="/images/clean/photo-b.png"
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="lg:pb-4">
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 max-w-xl text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
              <p className={`mt-7 max-w-md text-base leading-relaxed text-stone md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
                {t.statement}
              </p>

              <div className="mt-9 flex items-center gap-4 border-t border-ink/15 pt-7">
                <span className="h-11 w-px bg-gold" />
                <div>
                  <p className="text-sm font-medium text-ink">{site.licenseAr}</p>
                  <p className="mt-0.5 text-xs tracking-wide text-stone">{t.licenseLabel}</p>
                </div>
              </div>

              <div className="mt-9">
                <Link
                  href={`/${locale}/about`}
                  className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  {t.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
