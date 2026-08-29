import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/lib/properties";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

type AreaDef = {
  ar: string;
  en: string;
  image: string;
};

const AREAS: AreaDef[] = [
  { ar: "لقطيفية", en: "Luqtaifiya", image: "/images/properties/p01.jpg" },
  { ar: "الخور", en: "Al Khor", image: "/images/properties/p14.jpg" },
  { ar: "الثمامة", en: "Al Thumama", image: "/images/properties/p08.jpg" },
  { ar: "الريان", en: "Al Rayyan", image: "/images/properties/p23.jpg" },
  { ar: "مدينة خليفة", en: "Madinat Khalifa", image: "/images/properties/p20.jpg" },
  { ar: "أبو هامور", en: "Abu Hamour", image: "/images/properties/p10.jpg" },
];

export function AreasSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.areas;
  const countFor = (ar: string) => properties.filter((p) => p.districtAr === ar).length;

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 text-4xl leading-[1.1] text-ink md:text-6xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {t.title}
            </h2>
            <p className={`mt-4 text-lg text-stone ${locale === "ar" ? "arabic" : ""}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {AREAS.map((area, i) => {
            const count = countFor(area.ar);
            return (
              <Reveal key={area.ar} delay={i * 80}>
                <Link
                  href={`/${locale}/properties?area=${encodeURIComponent(area.ar)}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-ink-soft"
                >
                  <Image
                    src={area.image}
                    alt={locale === "ar" ? area.ar : area.en}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-mist md:p-6">
                    <div>
                      <h3 className="text-2xl font-medium md:text-3xl">{locale === "ar" ? area.ar : area.en}</h3>
                      <p className="mt-1 text-sm text-mist/75">
                        {count} {t.properties}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
