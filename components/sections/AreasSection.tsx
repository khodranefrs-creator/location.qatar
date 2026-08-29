import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

type AreaTile = {
  num: string;
  ar: string;
  en: string;
  image: string;
  wide?: boolean;
};

const TILES: AreaTile[] = [
  { num: "01", ar: "لقطيفية", en: "Luqtaifiya", image: "/images/clean/crop-p04.jpg", wide: true },
  { num: "02", ar: "الثمامة", en: "Al Thumama", image: "/images/clean/crop-p10.jpg" },
  { num: "03", ar: "الريان", en: "Al Rayyan", image: "/images/clean/crop-p24.jpg" },
  { num: "04", ar: "مدينة خليفة", en: "Madinat Khalifa", image: "/images/clean/crop-p20.jpg", wide: true },
  { num: "05", ar: "الذخيرة", en: "Al Dhakhira", image: "/images/clean/crop-p07.jpg" },
];

export function AreasSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.areas;
  return (
    <section className="bg-mist py-24 md:py-40">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
            </div>
            <p className={`max-w-sm text-base leading-relaxed text-stone md:text-end ${locale === "ar" ? "arabic" : ""}`}>
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TILES.map((area, i) => (
            <Reveal
              key={area.num}
              delay={i * 90}
              className={area.wide ? "md:col-span-2 lg:col-span-2" : "lg:col-span-1"}
            >
              <Link
                href={`/${locale}/properties?area=${encodeURIComponent(area.ar)}`}
                className={`group relative block overflow-hidden bg-ink ${
                  area.wide ? "aspect-[16/10] md:aspect-[4/3]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={area.image}
                  alt={locale === "ar" ? area.ar : area.en}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <span className="absolute start-5 top-5 text-[11px] tracking-[0.3em] text-mist/80">
                  {area.num}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <h3 className={`text-2xl text-mist md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                    {locale === "ar" ? area.ar : area.en}
                  </h3>
                  <span className="flex h-9 w-9 items-center justify-center border border-mist/40 text-mist transition-colors group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                    <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Final area tile — editorial CTA to view all */}
          <Reveal delay={TILES.length * 90} className="lg:col-span-1">
            <Link
              href={`/${locale}/properties`}
              className="group flex aspect-[4/5] flex-col justify-between border border-ink/15 bg-paper p-6 transition-colors hover:border-gold"
            >
              <span className="text-[11px] tracking-[0.3em] text-gold">{String(TILES.length + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={`text-2xl leading-snug text-ink md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                  {locale === "ar" ? "جميع المناطق" : "All Areas"}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                  {dict.propertiesPage.subtitle}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm text-ink transition-colors group-hover:border-gold group-hover:text-gold">
                  {dict.nav.properties}
                  <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
