import Image from "next/image";
import Link from "next/link";
import { Container, ArrowIcon } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";
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
      ? "مرحباً، أرغب في عرض عقار للبيع/الإيجار لدى لوكيشن للعقارات."
      : "Hello, I would like to list a property for sale/rent with Location Real Estate.";

  return (
    <section className="bg-ink text-mist">
      <Container>
        <div className="grid items-stretch gap-10 py-20 md:py-24 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-center lg:col-span-6 lg:py-8">
            <p className="text-[12px] uppercase tracking-[0.3em] text-gold-soft">{s.eyebrow}</p>
            <h2
              className={`mt-5 max-w-lg text-3xl leading-[1.08] tracking-tight text-mist md:text-5xl ${
                locale === "ar" ? "arabic font-bold" : "font-semibold"
              }`}
            >
              {s.title}
            </h2>
            <p className={`mt-5 max-w-md text-base leading-relaxed text-mist/70 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
              {s.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
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
                {s.secondary} · {site.phoneDisplay}
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative order-first min-h-[260px] overflow-hidden bg-ink-soft sm:order-none lg:col-span-6 lg:min-h-[460px]">
            <Image
              src="/images/clean/photo-b.png"
              alt={s.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}