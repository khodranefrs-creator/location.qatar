import Image from "next/image";
import Link from "next/link";
import { Eyebrow, ArrowIcon } from "@/components/ui";
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
    <section className="relative overflow-hidden bg-ink-hard text-mist">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[300px] order-2 lg:order-1 lg:min-h-[640px]">
          <Image
            src="/images/clean/banner-wide-b.png"
            alt={s.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-hard/40" />
        </div>

        <div className="order-1 flex items-center lg:order-2">
          <div className="px-6 py-20 md:px-14 md:py-28 lg:px-20">
            <Reveal>
              <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 max-w-xl text-4xl leading-[1.05] tracking-tight text-mist md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {s.title}
              </h2>
              <p className={`mt-6 max-w-md text-base leading-relaxed text-mist/70 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
                {s.description}
              </p>
              <div className="mt-11 flex flex-wrap items-center gap-7">
                <a
                  href={`/${locale}/list-your-property`}
                  className="group inline-flex items-center gap-3 bg-mist px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
                >
                  {s.cta}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </a>
                <Link
                  href={whatsappUrl(waMsg, locale)}
                  className="group inline-flex items-center gap-2 border-b border-mist/40 pb-1 text-sm tracking-wide text-mist/85 transition-colors hover:border-gold hover:text-gold-soft"
                >
                  {s.secondary}
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
