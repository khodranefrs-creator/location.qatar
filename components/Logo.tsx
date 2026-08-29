import Link from "next/link";

export function Logo({
  locale,
  variant = "light",
  className = "",
}: {
  locale: "ar" | "en";
  variant?: "light" | "dark";
  className?: string;
}) {
  const light = variant === "light";
  const href = `/${locale}`;
  return (
    <Link
      href={href}
      aria-label={locale === "ar" ? "لوكيشن للعقارات" : "Location Real Estate"}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center border"
        style={{ borderColor: light ? "rgba(250,250,248,0.4)" : "rgba(22,20,15,0.35)" }}
      >
        <span className="h-2.5 w-2.5 bg-gold" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans text-[13px] font-semibold tracking-[0.28em] ${
            light ? "text-mist" : "text-ink"
          }`}
        >
          LOCATION
        </span>
        <span
          className={`mt-1 text-[11px] font-medium tracking-[0.18em] ${
            light ? "text-mist/70" : "text-stone"
          }`}
        >
          REAL ESTATE — {locale === "ar" ? "قطر" : "QATAR"}
        </span>
      </span>
    </Link>
  );
}
