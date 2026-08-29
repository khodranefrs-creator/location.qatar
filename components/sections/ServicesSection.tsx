import { Container, Eyebrow } from "@/components/ui";
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
    <section className="bg-mist py-24 md:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Sticky-ish heading column */}
          <div className="lg:col-span-5">
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

          {/* Numbered editorial list */}
          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {s.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="group grid grid-cols-[auto_1fr] gap-6 border-b border-ink/15 py-9 transition-colors md:grid-cols-[80px_1fr] md:gap-10 md:py-12">
                    <span className="text-sm font-medium tracking-wide text-gold tabular-nums">
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
