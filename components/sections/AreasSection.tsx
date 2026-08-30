import Image from "next/image";
import Link from "next/link";
import { Container, ArrowIcon } from "@/components/ui";
import { countByDistrict } from "@/lib/utils";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

const AREAS = [
  { ar: "لقطيفية", en: "Luqtaifiya" },
  { ar: "الذخيرة", en: "Al Dhakhira" },
  { ar: "الثمامة", en: "Al Thumama" },
  { ar: "شعبية خليفة", en: "Khalifa" },
  { ar: "الريان", en: "Al Rayyan" },
  { ar: "الخيسة", en: "Al Kheesa" },
  { ar: "أبو هامور", en: "Abu Hamour" },
  { ar: "الخور", en: "Al Khor" },
] as const;

export function AreasSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.areas;

  return (
    <section className="bg-paper pb-28 md:pb-36">
      {/* Qatar photographic band */}
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-soft sm:aspect-[21/9] md:aspect-[24/9]">
        <Image
          src="/images/hero/hero-2.png"
          alt={locale === "ar" ? "الدوحة، قطر" : "Doha, Qatar"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <Container className="w-full">
            <div className="max-w-sm">
              <p className="text-[12px] uppercase tracking-[0.3em] text-gold-soft">{t.eyebrow}</p>
              <h2
                className={`mt-3 text-2xl leading-tight text-paper md:text-4xl ${
                  locale === "ar" ? "arabic font-bold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
              <p className={`mt-2 max-w-xs text-sm leading-relaxed text-paper/75 ${locale === "ar" ? "arabic" : ""}`}>
                {t.subtitle}
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Geographic place index */}
      <Container>
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <Link
              key={a.en}
              href={`/${locale}/properties?area=${encodeURIComponent(a.ar)}`}
              className="group flex items-center justify-between gap-4 bg-paper px-6 py-7 transition-colors hover:bg-mist"
            >
              <div>
                <span className={`text-lg text-ink group-hover:text-burgundy md:text-xl ${locale === "ar" ? "arabic font-medium" : "font-medium"}`}>
                  {locale === "ar" ? a.ar : a.en}
                </span>
                <p className="mt-1 text-xs tracking-wide text-stone">
                  {countByDistrict(a.ar)} {t.properties} ·{" "}
                  <span className="text-burgundy group-hover:underline">{t.view}</span>
                </p>
              </div>
              <ArrowIcon className="text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-burgundy rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}