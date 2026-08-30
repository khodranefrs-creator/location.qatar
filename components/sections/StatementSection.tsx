import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function StatementSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const c = dict.cinematic;
  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <span className="hidden flex-1 border-t border-line pt-4 text-[12px] uppercase tracking-[0.24em] text-stone md:block">
            {c.eyebrow}
          </span>
          <Reveal className="max-w-[64ch] flex-[1_1_0]">
            <p
              className={`text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.18] tracking-tight text-ink ${
                locale === "ar" ? "arabic font-bold" : "font-medium"
              }`}
            >
              {c.title}
            </p>
            <p className={`mt-6 max-w-[46ch] text-base leading-relaxed text-stone md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
              {c.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}