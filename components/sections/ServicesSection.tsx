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
    <section className="bg-mist py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
              <h2
                className={`mt-5 max-w-md text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {s.title}
              </h2>
              <p className={`mt-5 max-w-sm text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                {s.lead}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <div className="border-t border-line">
                {s.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 border-b border-line py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-10"
                  >
                    <h3 className={`text-xl text-ink md:text-2xl ${locale === "ar" ? "arabic font-medium" : "font-medium"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}