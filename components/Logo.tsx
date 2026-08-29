import Link from "next/link";
import Image from "next/image";

export function Logo({
  locale,
  className = "",
  variant = "white",
}: {
  locale: "ar" | "en";
  className?: string;
  variant?: "white" | "burgundy";
}) {
  const href = `/${locale}`;
  const src =
    variant === "burgundy"
      ? "/images/brand/logo-burgundy.png"
      : "/images/brand/logo.png";
  return (
    <Link
      href={href}
      aria-label={locale === "ar" ? "لوكيشن للعقارات" : "Location Real Estate"}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt={locale === "ar" ? "لوكيشن للعقارات" : "Location Real Estate"}
        width={192}
        height={192}
        priority
        className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
      />
    </Link>
  );
}
