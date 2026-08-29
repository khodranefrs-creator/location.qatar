import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function CinematicSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.cinematic;
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink-hard text-mist">
      <Image
        src="/images/hero/hero-2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-[88vh] items-end">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-gold-soft">
              {t.eyebrow}
            </p>
            <p
              className={`mt-7 max-w-4xl text-4xl leading-[1.05] tracking-tight text-mist md:text-7xl ${
                locale === "ar" ? "arabic font-bold" : "font-semibold"
              }`}
            >
              {t.title}
            </p>
            <p className={`mt-7 max-w-md text-base leading-relaxed text-mist/75 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
              {t.body}
            </p>
            <div className="mt-11">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 border-b border-mist/50 pb-1 text-sm tracking-wide text-mist transition-colors hover:border-gold hover:text-gold-soft"
              >
                {t.cta}
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
