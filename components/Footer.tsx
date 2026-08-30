import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/dictionaries";
import type { Dict } from "./types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const t = dict.footer;
  const year = new Date().getFullYear();

  const socials = [
    { href: site.instagram, src: "/images/brand/instagram.svg", label: "Instagram" },
    { href: site.facebook, src: "/images/brand/facebook.svg", label: "Facebook" },
    { href: site.whatsappLink, src: "/images/brand/whatsapp.svg", label: "WhatsApp" },
    { href: site.tiktok, src: "/images/brand/tiktok.svg", label: "TikTok", invert: true },
  ];

  const nav = [
    { label: dict.nav.properties, href: `/${locale}/properties` },
    { label: dict.nav.buy, href: `/${locale}/properties/for-sale` },
    { label: dict.nav.rent, href: `/${locale}/properties/for-rent` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-ink-hard text-mist">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-12 border-b border-line-light pb-14 md:grid-cols-12">
          {/* Brand + statement */}
          <div className="md:col-span-5">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
              <Image
                src="/images/brand/logo.png"
                alt={locale === "ar" ? site.nameAr : site.nameEn}
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-sans text-sm font-semibold tracking-[0.3em]">LOCATION</span>
                <span className="mt-1 text-[10px] tracking-[0.2em] text-mist/50">
                  REAL ESTATE — {locale === "ar" ? "قطر" : "QATAR"}
                </span>
              </span>
            </Link>
            <p className={`mt-6 max-w-xs text-sm leading-7 text-mist/70 ${locale === "ar" ? "arabic" : ""}`}>
              {t.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mist/40">{t.companyCol}</h3>
            <div className="flex flex-col gap-3 text-sm">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="text-mist/60 transition-colors hover:text-mist">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mist/40">{t.contactCol}</h3>
            <div className="flex flex-col gap-3 text-sm text-mist/70">
              <a href={`tel:${site.phoneRaw}`} className="transition-colors hover:text-mist" dir="ltr">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-mist" dir="ltr">
                {site.email}
              </a>
              <span>{locale === "ar" ? site.addressAr : site.addressEn}</span>
              <span className="text-mist/50">{dict.hero.license}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                    s.invert ? "border-mist/25 bg-mist text-ink hover:bg-gold" : "border-mist/25 hover:border-gold"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt=""
                    width={17}
                    height={17}
                    className={s.invert ? "" : "opacity-80"}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-center md:flex-row md:text-start">
          <p className="text-xs text-mist/45">
            {t.copyright} · {year} · {locale === "ar" ? "قطر" : "Qatar"}
          </p>
          <p className="text-xs text-mist/45">{dict.meta.siteName}</p>
        </div>
      </div>
    </footer>
  );
}