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
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 text-4xl leading-[1.1] text-ink md:text-6xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {s.title}
            </h2>
            <p className={`mt-5 max-w-2xl text-lg leading-8 text-stone ${locale === "ar" ? "arabic" : ""}`}>
              {s.lead}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-16 divide-y divide-ink/10 lg:grid-cols-2">
          <div>
            {s.items.slice(0, 3).map((item, i) => (
              <ServiceRow key={item.title} num={String(i + 1).padStart(2, "0")} title={item.title} desc={item.desc} locale={locale} />
            ))}
          </div>
          <div>
            {s.items.slice(3).map((item, i) => (
              <ServiceRow key={item.title} num={String(i + 4).padStart(2, "0")} title={item.title} desc={item.desc} locale={locale} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceRow({
  num,
  title,
  desc,
  locale,
}: {
  num: string;
  title: string;
  desc: string;
  locale: Locale;
}) {
  return (
    <Reveal>
      <div className="group flex gap-6 border-t border-ink/10 py-8 first:border-t-0 lg:py-10">
        <span className="text-sm font-semibold tabular-nums text-stone transition-colors group-hover:text-gold">
          {num}
        </span>
        <div>
          <h3
            className={`text-2xl font-medium text-ink transition-colors group-hover:text-gold md:text-3xl ${
              locale === "ar" ? "arabic" : ""
            }`}
          >
            {title}
          </h3>
          <p className={`mt-2 max-w-md leading-7 text-stone ${locale === "ar" ? "arabic" : ""}`}>{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}
