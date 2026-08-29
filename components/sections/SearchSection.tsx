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
    <section className="bg-paper py-10 md:py-0" aria-label={dict.search.title}>
      <div className="mx-auto max-w-[1320px] px-5 md:-mt-2 md:px-10">
        <div className="bg-mist p-6 md:p-8">
          <p className="mb-6 flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.24em] text-stone">
            <span className="h-px w-6 bg-gold" />
            {dict.search.title}
          </p>
          <SearchBar locale={locale} dict={dict} areas={areas} />
        </div>
      </div>
    </section>
  );
}
