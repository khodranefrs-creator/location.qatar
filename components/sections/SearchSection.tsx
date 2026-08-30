import { SearchBar } from "@/components/SearchBar";
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
  const seen = new Set<string>();
  const areas: { value: string; label: string }[] = [];
  for (const p of properties) {
    if (!seen.has(p.districtAr)) {
      seen.add(p.districtAr);
      areas.push({ value: p.districtAr, label: locale === "ar" ? p.districtAr : p.districtEn });
    }
  }
  areas.sort((a, b) => a.label.localeCompare(b.label, locale === "ar" ? "ar" : "en"));

  return (
    <section className="border-b border-ink/10 bg-paper" aria-label={dict.search.title}>
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-gold" />
            <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-stone">
              {dict.search.title}
            </p>
          </div>
          <p className="hidden text-sm text-stone md:block">
            {areas.length} {locale === "ar" ? "منطقة متاحة" : "areas available"}
          </p>
        </div>
        <SearchBar locale={locale} dict={dict} areas={areas} />
      </div>
    </section>
  );
}
