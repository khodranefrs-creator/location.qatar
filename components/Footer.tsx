import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/dictionaries";
import type { Dict } from "./types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const t = dict.footer;
  const year = new Date().getFullYear();

  const colLink = (href: string, label: string) => (
    <Link
      href={href}
      className="text-sm text-mist/60 transition-colors hover:text-mist"
    >
      {label}
    </Link>
  );

  const socials = [
    { href: site.instagram, src: "/images/brand/instagram.svg", label: "Instagram" },
    { href: site.facebook, src: "/images/brand/facebook.svg", label: "Facebook" },
    { href: site.whatsappLink, src: "/images/brand/whatsapp.svg", label: "WhatsApp" },
    {
      href: site.tiktok,
      src: "/images/brand/tiktok.svg",
      label: "TikTok",
      invert: true,
    },
  ];

  return (
    <footer className="bg-ink-hard text-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 border-b border-line-light pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center border border-mist/30">
                <span className="h-2.5 w-2.5 bg-gold" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-sans text-sm font-semibold tracking-[0.3em]">
                  LOCATION
                </span>
                <span className="mt-1 text-[10px] tracking-[0.2em] text-mist/50">
                  REAL ESTATE — {locale === "ar" ? "قطر" : "QATAR"}
                </span>
              </div>
            </div>
            <p className="arabic mt-6 max-w-xs text-sm leading-7 text-mist/70">
              {dict.meta.siteName}
              <span className="mt-1 block text-mist/50">{t.tagline}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                    s.invert ? "border-mist/25 bg-mist text-ink hover:bg-gold" : "border-mist/25 hover:border-gold"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt=""
                    width={18}
                    height={18}
                    className={s.invert ? "" : "opacity-80"}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mist/40">
              {t.propertiesCol}
            </h3>
            <div className="flex flex-col gap-3">
              {colLink(`/${locale}/properties`, dict.nav.properties)}
              {colLink(`/${locale}/properties/for-sale`, dict.nav.forSale)}
              {colLink(`/${locale}/properties/for-rent`, dict.nav.forRent)}
              {colLink(`/${locale}/list-your-property`, dict.nav.list)}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mist/40">
              {t.companyCol}
            </h3>
            <div className="flex flex-col gap-3">
              {colLink(`/${locale}/about`, dict.nav.about)}
              {colLink(`/${locale}/services`, dict.nav.services)}
              {colLink(`/${locale}/contact`, dict.nav.contact)}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-mist/40">
              {t.contactCol}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-mist/70">
              <a href={`tel:${site.phoneRaw}`} className="transition-colors hover:text-mist" dir="ltr">
                {site.phoneDisplay}
              </a>
              <span>{locale === "ar" ? "الدوحة، قطر" : "Doha, Qatar"}</span>
              <span className="text-mist/50">{locale === "ar" ? "شارع الجزيرة العربية" : "Al Jazira Al Arabiya St"}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-start">
          <p className="text-xs text-mist/45">
            {t.copyright} · {dict.meta.siteName}
          </p>
          <p className="text-xs text-mist/45">{dict.hero.license}</p>
          <p className="text-xs text-mist/30">{locale === "ar" ? "قطر" : "Qatar"} · {year}</p>
        </div>
      </div>
    </footer>
  );
}
