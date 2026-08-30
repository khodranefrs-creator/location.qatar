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
    <section className="bg-paper py-20 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="border-b border-ink/15 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-8 max-w-4xl text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {t.title}
            </h2>
            <p
              className={`mt-8 max-w-3xl text-xl leading-9 text-stone md:text-2xl md:leading-10 ${
                locale === "ar" ? "arabic" : ""
              }`}
            >
              {t.statement}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3 lg:grid-cols-12 lg:gap-16">
          {/* Credential */}
          <Reveal className="lg:col-span-5 lg:col-start-1">
            <div className="border-s-2 border-gold ps-6">
              <p className="text-sm font-medium text-ink">{site.licenseAr}</p>
              <p className="mt-1 text-xs tracking-wide text-stone">{t.licenseLabel}</p>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-4">
            <div className="border-s border-ink/15 ps-6">
              <p className="text-xs font-medium uppercase tracking-wider text-stone">WhatsApp / {dict.contact.phone}</p>
              <p className="mt-1 text-sm text-ink" dir="ltr">
                {site.phoneDisplay}
              </p>
            </div>
          </Reveal>

          <Reveal delay={160} className="flex items-end lg:col-span-3">
            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-gold hover:text-gold"
            >
              {t.cta}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
