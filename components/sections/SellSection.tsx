import Image from "next/image";
import { Eyebrow, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function SellSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const s = dict.sell;
  const waMsg =
    locale === "ar"
      ? "السلام عليكم، أود عرض عقار لدي للبيع/الإيجار عبر لوكيشن للعقارات."
      : "Hello, I would like to list a property for sale/rent with Location Real Estate.";

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[640px]">
          <Image
            src="/images/about/about-2.png"
            alt={s.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-ink text-mist">
          <div className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
            <Reveal>
              <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 max-w-xl text-4xl leading-[1.12] md:text-5xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {s.title}
              </h2>
              <p className={`mt-6 max-w-lg text-lg leading-8 text-mist/75 ${locale === "ar" ? "arabic" : ""}`}>
                {s.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={`/${locale}/list-your-property`} variant="gold">
                  {s.cta}
                </ButtonLink>
                <a
                  href={whatsappUrl(waMsg, locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-mist/35 px-7 py-3.5 text-sm font-medium text-mist transition-colors hover:bg-mist hover:text-ink"
                >
                  {s.secondary}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
