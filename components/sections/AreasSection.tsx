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
  className: string;
};

const TILES: AreaTile[] = [
  {
    num: "01",
    ar: "لقطيفية",
    en: "Luqtaifiya",
    image: "/images/clean/crop-p04.jpg",
    className: "lg:col-span-4 aspect-[16/10] md:aspect-[4/3]",
  },
  {
    num: "02",
    ar: "الثمامة",
    en: "Al Thumama",
    image: "/images/clean/crop-p10.jpg",
    className: "lg:col-span-2 aspect-[16/10] md:aspect-[4/5]",
  },
  {
    num: "03",
    ar: "الريان",
    en: "Al Rayyan",
    image: "/images/clean/crop-p24.jpg",
    className: "lg:col-span-2 aspect-[16/10] md:aspect-[4/5]",
  },
  {
    num: "04",
    ar: "مدينة خليفة",
    en: "Madinat Khalifa",
    image: "/images/clean/crop-p20.jpg",
    className: "lg:col-span-4 aspect-[16/10] md:aspect-[3/2]",
  },
  {
    num: "05",
    ar: "الذخيرة",
    en: "Al Dhakhira",
    image: "/images/clean/crop-p22.jpg",
    className: "lg:col-span-2 aspect-[16/10] md:aspect-[4/5]",
  },
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

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {TILES.map((area, i) => (
            <Reveal key={area.num} delay={i * 80} className={area.className}>
              <Link
                href={`/${locale}/properties?area=${encodeURIComponent(area.ar)}`}
                aria-label={locale === "ar" ? area.ar : area.en}
                className="group relative block h-full w-full overflow-hidden bg-ink"
              >
                <Image
                  src={area.image}
                  alt={locale === "ar" ? area.ar : area.en}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <span className="absolute start-5 top-5 text-[11px] tracking-[0.3em] text-mist/80">
                  {area.num}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                  <h3 className={`text-2xl text-mist md:text-3xl ${locale === "ar" ? "arabic" : ""}`}>
                    {locale === "ar" ? area.ar : area.en}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-mist/40 text-mist transition-colors group-hover:bg-gold group-hover:text-ink group-hover:border-gold">
                    <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 border-t border-ink/15 pt-10">
            <Link
              href={`/${locale}/properties`}
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-ink transition-colors hover:text-gold"
            >
              {dict.nav.properties}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
