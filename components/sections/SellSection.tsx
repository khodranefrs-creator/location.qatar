import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui";
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
      ? "مرحباً، أرغب في عرض عقار للبيع/الإيجار لدى لوكيشن للعقارات."
      : "Hello, I would like to list a property for sale/rent with Location Real Estate.";

  return (
    <section className="relative flex min-h-[38svh] min-h-[420px] items-center overflow-hidden bg-ink-hard text-mist lg:min-h-[44svh]">
      <Image
        src="/images/clean/photo-b.png"
        alt={s.title}
        fill
        priority={false}
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40 rtl:bg-gradient-to-l" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10">
        <Reveal className="max-w-xl">
          <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft">
            <span className="h-px w-8 bg-gold" />
            {s.eyebrow}
          </p>
          <h2
            className={`mt-6 text-4xl leading-[1.05] tracking-tight text-mist md:text-5xl ${
              locale === "ar" ? "arabic font-semibold" : "font-semibold"
            }`}
          >
            {s.title}
          </h2>
          <p className={`mt-5 max-w-md text-base leading-relaxed text-mist/75 ${locale === "ar" ? "arabic" : ""}`}>
            {s.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={`/${locale}/list-your-property`}
              className="group inline-flex items-center gap-3 bg-mist px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
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
    </section>
  );
}
