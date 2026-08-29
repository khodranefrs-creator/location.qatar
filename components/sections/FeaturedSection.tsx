import { Container, Eyebrow, ButtonLink } from "@/components/ui";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { getFeaturedProperties } from "@/lib/properties";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function FeaturedSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const f = dict.featured;
  const featured = getFeaturedProperties();
  const [primary, ...rest] = featured;

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow tone="gold">{f.eyebrow}</Eyebrow>
              <h2
                className={`mt-5 max-w-2xl text-4xl leading-[1.1] text-ink md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {f.title}
              </h2>
              <p className={`mt-4 max-w-xl text-lg text-stone ${locale === "ar" ? "arabic" : ""}`}>
                {f.subtitle}
              </p>
            </div>
            <ButtonLink href={`/${locale}/properties`} variant="outline" className="shrink-0">
              {f.viewAll}
            </ButtonLink>
          </div>
        </Reveal>

        {/* Asymmetric grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {primary && (
            <Reveal className="lg:col-span-7">
              <PropertyCard property={primary} locale={locale} large priority />
            </Reveal>
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 2).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <PropertyCard property={p} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
