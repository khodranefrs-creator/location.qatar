import Link from "next/link";
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
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
            <h2
              className={`mt-6 text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-bold" : "font-semibold"
              }`}
            >
              {s.title}
            </h2>
            <p className={`mt-5 max-w-sm text-base leading-relaxed text-stone md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
              {s.lead}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {s.items.map((item) => (
                <Link
                  key={item.title}
                  href={`/${locale}/services`}
                  className="group grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <h3
                    className={`text-xl text-ink transition-colors group-hover:text-burgundy sm:col-span-5 md:text-2xl ${
                      locale === "ar" ? "arabic font-medium" : "font-medium"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-base leading-relaxed text-stone sm:col-span-6 ${locale === "ar" ? "arabic" : ""}`}>
                    {item.desc}
                  </p>
                  <ArrowIcon className="hidden w-4 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-burgundy sm:col-span-1 sm:inline-flex rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}