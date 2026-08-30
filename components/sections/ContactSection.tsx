import Link from "next/link";
import { Container, Eyebrow, ArrowIcon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappUrl } from "@/lib/site";
import type { Dict } from "@/components/types";
import type { Locale } from "@/lib/dictionaries";

export function ContactSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const t = dict.contact;
  const s = dict.sell;
  const mapSrc =
    "https://www.google.com/maps?q=Al%20Jazira%20Al%20Arabiya%20St%20Doha%20Qatar&output=embed&z=14";
  const waMsg =
    locale === "ar"
      ? "مرحباً، أرغب في عرض عقار للبيع/الإيجار لدى لوكيشن للعقارات."
      : "Hello, I would like to list a property for sale/rent with Location Real Estate.";

  return (
    <section className="bg-ink py-24 text-mist md:py-32">
      <Container>
        {/* Owner pitch — the reason to act now */}
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow tone="gold">{s.eyebrow}</Eyebrow>
              <h2
                className={`mt-6 max-w-2xl text-3xl leading-[1.05] tracking-tight text-mist md:text-5xl ${
                  locale === "ar" ? "arabic font-bold" : "font-semibold"
                }`}
              >
                {s.title}
              </h2>
              <p className={`mt-5 max-w-xl text-base leading-relaxed text-mist/70 md:text-lg ${locale === "ar" ? "arabic" : ""}`}>
                {s.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href={`/${locale}/list-your-property`}
                  className="group inline-flex items-center gap-3 bg-mist px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
                >
                  {s.cta}
                  <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </a>
                <Link
                  href={whatsappUrl(waMsg, locale)}
                  className="group inline-flex items-center gap-2 border-b border-mist/40 pb-1 text-sm tracking-wide text-mist/85 transition-colors hover:border-gold hover:text-gold-soft"
                >
                  {s.secondary}
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Immediate contact access */}
            <div className="flex flex-col justify-end lg:col-span-5">
              <div className="border-t border-line-light pt-8">
                <div className="flex flex-col divide-y divide-line-light">
                  <Fact label={t.phone} value={site.phoneDisplay} href={`tel:${site.phoneRaw}`} dir="ltr" size="lg" />
                  <Fact label={t.whatsapp} value={site.phoneDisplay} href={site.whatsappLink} dir="ltr" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Message form */}
            <div className="min-w-0 border-t border-line-light pt-8 lg:col-span-6">
              <h3 className={`text-2xl font-medium text-mist ${locale === "ar" ? "arabic" : ""}`}>{t.form.title}</h3>
              <div className="mt-6">
                <ContactForm locale={locale} dict={dict} />
              </div>
            </div>

            {/* Contact facts + map */}
            <div className="min-w-0 border-t border-line-light pt-8 lg:col-span-6">
              <div className="flex flex-col divide-y divide-line-light">
                <Fact label={t.email} value={site.email} href={`mailto:${site.email}`} dir="ltr" />
                <Fact label={t.whatsapp} value={site.phoneDisplay} href={site.whatsappLink} dir="ltr" />
              </div>

              <div className="pt-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-mist/50">{t.address}</p>
                <p className="mt-2 text-lg font-medium text-mist">
                  {locale === "ar" ? site.addressAr : site.addressEn}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-gold-soft hover:text-mist"
                >
                  {t.directions} →
                </a>
              </div>

              <div className="mt-8 overflow-hidden border border-line-light/60">
                <iframe
                  title={t.address}
                  src={mapSrc}
                  width="100%"
                  height="220"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block border-0 opacity-90"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Fact({
  label,
  value,
  href,
  dir,
  size = "md",
}: {
  label: string;
  value: string;
  href: string;
  dir?: string;
  size?: "md" | "lg";
}) {
  const external = href.startsWith("http");
  return (
    <div className="flex min-w-0 items-baseline justify-between gap-4 py-5 md:gap-6">
      <p className="shrink-0 text-[12px] font-medium uppercase tracking-[0.22em] text-mist/50">{label}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`min-w-0 break-all text-end font-medium text-mist transition-colors hover:text-gold-soft ${
          size === "lg" ? "text-2xl md:text-3xl" : "text-lg"
        }`}
        dir={dir}
      >
        {value}
      </a>
    </div>
  );
}