import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";
import { Container, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/lib/properties";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function SearchSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const s = dict.search;
  const seen = new Set<string>();
  const areas: { value: string; label: string }[] = [];
  for (const p of properties) {
    if (!seen.has(p.districtAr)) {
      seen.add(p.districtAr);
      areas.push({ value: p.districtAr, label: locale === "ar" ? p.districtAr : p.districtEn });
    }
  }
  areas.sort((a, b) => a.label.localeCompare(b.label, locale === "ar" ? "ar" : "en"));

  const channels = [
    {
      label: locale === "ar" ? "للبيع" : "For Sale",
      note: locale === "ar" ? "فلل، بيوت، أراضٍ" : "Villas, houses, land",
      href: `/${locale}/properties/for-sale`,
    },
    {
      label: locale === "ar" ? "للإيجار" : "For Rent",
      note: locale === "ar" ? "خيارات سكنية" : "Residential options",
      href: `/${locale}/properties/for-rent`,
    },
  ];

  return (
    <section className="bg-paper py-16 md:py-28" aria-label={s.title}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                {s.title}
              </p>
              <h2
                className={`mt-5 text-3xl leading-tight tracking-tight text-ink md:text-4xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {locale === "ar" ? "اختر الاتجاه الصحيح." : "Choose the right direction."}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <div className="border-t border-line">
                {channels.map((c, i) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-7 transition-colors hover:bg-mist/60 md:gap-8"
                  >
                    <span className="text-xs font-medium tracking-[0.2em] text-stone tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-baseline gap-4">
                      <span className={`text-2xl text-ink transition-colors group-hover:text-burgundy md:text-3xl ${locale === "ar" ? "arabic font-medium" : "font-medium"}`}>
                        {c.label}
                      </span>
                      <span className={`hidden text-sm text-stone sm:inline ${locale === "ar" ? "arabic" : ""}`}>{c.note}</span>
                    </span>
                    <ArrowIcon className="text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-burgundy rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <SearchBar locale={locale} dict={dict} areas={areas} />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
