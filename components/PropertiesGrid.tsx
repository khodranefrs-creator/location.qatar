import { properties as allProperties, type Property } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import type { Locale } from "@/lib/dictionaries";

export function PropertiesGrid({
  locale,
  items = allProperties,
  className = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
}: {
  locale: Locale;
  items?: Property[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((p) => (
        <PropertyCard key={p.id} property={p} locale={locale} />
      ))}
    </div>
  );
}
