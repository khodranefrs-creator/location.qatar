"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const onDark = isHome && !scrolled && !open;

  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const suffix = pathname === `/${locale}` ? "" : pathname.slice(locale.length + 1);
  const otherPath = `/${otherLocale}${suffix}`;

  const navLinks = [
    { id: "properties", label: dict.nav.properties, href: `/${locale}/properties` },
    { id: "buy", label: dict.nav.buy, href: `/${locale}/properties/for-sale` },
    { id: "rent", label: dict.nav.rent, href: `/${locale}/properties/for-rent` },
    { id: "areas", label: dict.nav.areas, href: `/${locale}/properties` },
    { id: "services", label: dict.nav.services, href: `/${locale}/services` },
    { id: "about", label: dict.nav.about, href: `/${locale}/about` },
    { id: "contact", label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled && !open ? "border-b border-line bg-mist/95 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-5 md:h-20 md:px-10 xl:h-24">
        {/* Brand wordmark */}
        <Link
          href={`/${locale}`}
          aria-label={locale === "ar" ? "لوكيشن للعقارات" : "Location Real Estate"}
          className="group relative flex items-center"
        >
          <Image
            src={onDark ? "/images/brand/logo.png" : "/images/brand/logo-burgundy.png"}
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain md:h-11 md:w-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.id}
                href={l.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  onDark ? "text-mist/85 hover:text-paper" : "text-ink/70 hover:text-ink"
                } ${active ? (onDark ? "text-paper" : "text-ink") : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: language + CTA + mobile menu */}
        <div className="flex items-center gap-4">
          <div
            className={`hidden items-center text-[13px] font-medium md:flex ${
              onDark ? "text-mist/85" : "text-ink/70"
            }`}
          >
            <span className="opacity-50 pe-1">{locale === "ar" ? "ع" : "A"}</span>
            <span className="mx-1 block h-3 w-px bg-current opacity-30" />
            <Link
              href={otherPath}
              className={`px-2 py-1 transition-colors ${
                onDark ? "hover:text-gold-soft" : "hover:text-gold"
              }`}
            >
              {otherLocale === "ar" ? "العربية" : "EN"}
            </Link>
          </div>

          <a
            href={`/${locale}/list-your-property`}
            className={`hidden items-center px-6 py-2.5 text-[13px] font-medium transition-colors lg:inline-flex ${
              onDark
                ? "border border-mist/40 text-mist hover:bg-mist hover:text-ink"
                : "border border-ink/25 text-ink hover:bg-ink hover:text-mist"
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
            className={`inline-flex h-11 w-11 items-center justify-center xl:hidden ${
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

      {/* Mobile / full-screen menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex-col bg-mist lg:hidden ${open ? "flex" : "hidden"}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Logo locale={locale} variant="burgundy" />
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
            { label: dict.nav.properties, href: `/${locale}/properties` },
            { label: dict.nav.buy, href: `/${locale}/properties/for-sale` },
            { label: dict.nav.rent, href: `/${locale}/properties/for-rent` },
            { label: dict.nav.areas, href: `/${locale}/properties` },
            { label: dict.nav.services, href: `/${locale}/services` },
            { label: dict.nav.about, href: `/${locale}/about` },
            { label: dict.nav.contact, href: `/${locale}/contact` },
            { label: dict.nav.list, href: `/${locale}/list-your-property` },
          ].map((l, i) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-4 text-2xl font-medium transition-colors ${
                  active ? "text-gold" : "text-ink"
                } ${l.label === dict.nav.list ? "font-semibold text-burgundy" : ""}`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-line px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href={otherPath}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink transition-colors hover:text-gold"
            >
              {otherLocale === "ar" ? "العربية" : "English"}
            </Link>
            <span className="text-xs uppercase tracking-[0.2em] text-stone">{dict.hero.license}</span>
          </div>
        </div>
      </div>
    </header>
  );
}