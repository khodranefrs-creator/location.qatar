import Link from "next/link";
import Image from "next/image";

export function Logo({
  locale,
  className = "",
}: {
  locale: "ar" | "en";
  className?: string;
}) {
  const href = `/${locale}`;
  return (
    <Link
      href={href}
      aria-label={locale === "ar" ? "لوكيشن للعقارات" : "Location Real Estate"}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/images/brand/logo.png"
        alt={locale === "ar" ? "لوكيشن للعقارات" : "Location Real Estate"}
        width={192}
        height={192}
        priority
        className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
      />
    </Link>
  );
}
