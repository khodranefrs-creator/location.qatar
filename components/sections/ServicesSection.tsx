import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function ServicesSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const s = dict.services;

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
            <h2
              className={`mt-6 text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl ${
                locale === "ar" ? "arabic font-bold" : "font-semibold"
              }`}
            >
              {s.title}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className={`max-w-xl text-lg leading-relaxed text-stone md:text-xl ${locale === "ar" ? "arabic" : ""}`}>
              {s.lead}
            </p>

            <div className="mt-12">
              <div className="border-t border-line">
                {s.items.map((item) => (
                  <div
                    key={item.title}
                    className="group grid gap-3 border-b border-line py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                  >
                    <h3
                      className={`text-xl text-ink sm:col-span-5 md:text-2xl ${
                        locale === "ar" ? "arabic font-medium" : "font-medium"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-base leading-relaxed text-stone sm:col-span-6 ${locale === "ar" ? "arabic" : ""}`}>
                      {item.desc}
                    </p>
                    <ArrowIcon className="hidden w-4 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-burgundy sm:col-span-1 sm:inline-flex rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}