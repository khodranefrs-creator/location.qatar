import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-5 md:px-10 ${
        wide ? "max-w-[1720px]" : "max-w-[1320px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "gold";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-mist/60"
      : tone === "gold"
        ? "text-gold"
        : "text-stone";
  return (
    <p
      className={`flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.28em] ${color} ${className}`}
    >
      <span className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}

type ButtonVariant = "solid" | "outline" | "light-outline" | "gold" | "light";

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium transition-all duration-300";
  const styles: Record<ButtonVariant, string> = {
    solid: "bg-ink text-mist hover:bg-gold hover:text-ink",
    gold: "bg-gold text-ink hover:bg-gold-soft",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-mist",
    "light-outline":
      "border border-mist/40 text-mist hover:bg-mist hover:text-ink",
    light: "bg-mist text-ink hover:bg-gold-soft hover:text-ink",
  };
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("https://wa.me");
  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-block ${className}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M1 8h13M9 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
