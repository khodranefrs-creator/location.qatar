import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
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
    <section className="bg-paper py-20 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Sticky heading column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
                <h2
                  className={`mt-6 text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                    locale === "ar" ? "arabic font-semibold" : "font-semibold"
                  }`}
                >
                  {s.title}
                </h2>
                <p className={`mt-6 max-w-sm text-base leading-relaxed text-stone md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
                  {s.lead}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Numbered editorial index */}
          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {s.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="group grid grid-cols-[60px_1fr_auto] items-baseline gap-4 border-b border-ink/15 py-9 transition-colors hover:bg-mist md:grid-cols-[90px_1fr_auto] md:gap-8 md:py-11">
                    <span className="text-2xl font-medium text-ink/20 tabular-nums transition-colors group-hover:text-gold md:text-4xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`text-2xl leading-tight text-ink transition-colors group-hover:text-gold md:text-4xl ${
                          locale === "ar" ? "arabic font-medium" : "font-medium"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className={`mt-3 max-w-lg text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                        {item.desc}
                      </p>
                    </div>
                    <ArrowIcon className="h-5 w-5 translate-y-1 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-ink rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
