"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import type { Dict } from "./types";
import type { Locale } from "@/lib/dictionaries";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === `/${locale}`;
  const scrolled = solid || !isHome;

  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const suffix = pathname === `/${locale}` ? "" : pathname.slice(locale.length + 1);
  const otherPath = `/${otherLocale}${suffix}`;

  const navLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.properties, href: `/${locale}/properties` },
    { label: dict.nav.forSale, href: `/${locale}/properties/for-sale` },
    { label: dict.nav.forRent, href: `/${locale}/properties/for-rent` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const onDark = isHome && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled && !open ? "border-b border-line bg-mist/95 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        {/* Language (desktop start) hidden in mobile menu */}
        <div className="hidden items-center md:flex md:flex-1 md:justify-start">
          <LocaleSwitch onDark={onDark} current={locale} other={otherLocale} otherPath={otherPath} />
        </div>

        {/* Logo - center on desktop, start on mobile */}
        <div className="flex-1 md:flex-initial md:flex-none">
          <Logo locale={locale} className="px-2 md:px-0" />
        </div>

        {/* Desktop nav - center */}
        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:flex"
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  onDark ? "text-mist/85 hover:text-mist" : "text-ink/70 hover:text-ink"
                } ${active ? (onDark ? "text-mist" : "text-ink") : ""}`}
              >
                {l.label}
                {active && <span className={`mt-0.5 block h-px w-full ${onDark ? "bg-gold-soft" : "bg-gold"}`} />}
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTA + mobile menu button (desktop) */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <a
            href={`/${locale}/list-your-property`}
            className={`hidden items-center px-5 py-2.5 text-[13px] font-medium transition-colors md:inline-flex lg:inline-flex ${
              onDark
                ? "bg-mist text-ink hover:bg-gold-soft hover:text-ink"
                : "bg-ink text-mist hover:bg-gold hover:text-ink"
            }`}
          >
            {dict.nav.list}
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}
            className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${
              onDark ? "text-mist" : "text-ink"
            }`}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 top-0 block h-px w-full transition-all ${
                  open ? "top-1/2 rotate-45 bg-ink" : "bg-current"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-full transition-all ${open ? "opacity-0" : "bg-current"}`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-px w-full transition-all ${
                  open ? "bottom-auto top-1/2 -rotate-45 bg-ink" : "bg-current"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / off-canvas menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-0 z-50 flex flex-col bg-mist lg:hidden"
        >
          <div className="flex h-16 items-center justify-between px-5">
            <Logo locale={locale} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={locale === "ar" ? "إغلاق القائمة" : "Close menu"}
              className="inline-flex h-11 w-11 items-center justify-center text-ink"
            >
              <span className="relative block h-4 w-6">
                <span className="absolute left-0 top-1/2 block h-px w-full -rotate-45 bg-ink" />
                <span className="absolute left-0 top-1/2 block h-px w-full rotate-45 bg-ink" />
              </span>
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8"
            aria-label={locale === "ar" ? "قائمة الجوال" : "Mobile menu"}
          >
            {[
              ...navLinks,
              { label: dict.nav.list, href: `/${locale}/list-your-property` },
            ].map((l, i) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-line py-4 text-2xl font-medium transition-colors ${
                    active ? "text-gold" : "text-ink"
                  }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-line px-8 py-6">
            <LocaleSwitch
              onDark={false}
              current={locale}
              other={otherLocale}
              otherPath={otherPath}
            />
          </div>
        </div>
      )}
    </header>
  );
}

function LocaleSwitch({
  onDark,
  current,
  other,
  otherPath,
}: {
  onDark: boolean;
  current: Locale;
  other: Locale;
  otherPath: string;
}) {
  return (
    <div
      className={`inline-flex items-center text-[13px] font-medium ${
        onDark ? "text-mist/85" : "text-ink/70"
      }`}
    >
      <span className="opacity-50 pe-1">{current === "ar" ? "ع" : "A"}</span>
      <span className="mx-1 block h-3 w-px opacity-30 bg-current" />
      <Link
        href={otherPath}
        className={`px-2 py-1 transition-colors ${
          onDark ? "hover:text-gold-soft" : "hover:text-gold"
        }`}
      >
        {other === "ar" ? "العربية" : "EN"}
      </Link>
    </div>
  );
}
