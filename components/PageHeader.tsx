import { Eyebrow } from "@/components/ui";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  locale,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  locale: "ar" | "en";
  dark?: boolean;
}) {
  return (
    <header
      className={`pt-28 pb-12 md:pt-40 md:pb-16 ${
        dark ? "bg-ink-hard text-mist" : "border-b border-line bg-paper"
      }`}
    >
      <div className="mx-auto max-w-[1380px] px-5 md:px-10">
        <Eyebrow tone={dark ? "gold" : "gold"}>{eyebrow}</Eyebrow>
        <h1
          className={`mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl ${
            locale === "ar" ? "arabic font-semibold" : "font-semibold"
          } ${dark ? "text-mist" : "text-ink"}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 max-w-2xl text-lg leading-8 ${
              dark ? "text-mist/70" : "text-stone"
            } ${locale === "ar" ? "arabic" : ""}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
