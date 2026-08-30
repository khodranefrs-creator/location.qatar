import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
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
  const mapSrc =
    "https://www.google.com/maps?q=Al%20Jazira%20Al%20Arabiya%20St%20Doha%20Qatar&output=embed&z=14";

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
              <h2
                className={`mt-5 text-4xl leading-[1.03] tracking-tight text-ink md:text-6xl ${
                  locale === "ar" ? "arabic font-semibold" : "font-semibold"
                }`}
              >
                {t.title}
              </h2>
              <p className={`mt-4 max-w-lg text-base leading-relaxed text-stone ${locale === "ar" ? "arabic" : ""}`}>
                {locale === "ar" ? "نتحدث العربية ونفهم سوق قطر المحلي — أرسل رسالتك وسنعاود التواصل قريباً." : "We speak Arabic and understand Qatar's local market — send a message and we'll be in touch shortly."}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <Reveal className="min-w-0 lg:col-span-6">
            <div className="border-t border-line pt-8">
              <h3 className={`text-2xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>{t.form.title}</h3>
              <div className="mt-6">
                <ContactForm locale={locale} dict={dict} />
              </div>
            </div>
          </Reveal>

          {/* Contact facts */}
          <Reveal delay={80} className="min-w-0 lg:col-span-6 lg:ps-10">
            <div className="border-t border-line pt-8">
              <div className="flex flex-col divide-y divide-line">
                <Fact label={t.phone} value={site.phoneDisplay} href={`tel:${site.phoneRaw}`} dir="ltr" />
                <Fact label={t.whatsapp} value={site.phoneDisplay} href={site.whatsappLink} dir="ltr" />
                <Fact label={t.email} value={site.email} href={`mailto:${site.email}`} dir="ltr" />
              </div>

              <div className="border-t border-line pt-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone">{t.address}</p>
                <p className="mt-2 text-lg font-medium text-ink">
                  {locale === "ar" ? site.addressAr : site.addressEn}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-burgundy hover:text-ink"
                >
                  {t.directions} →
                </a>
              </div>

              <div className="mt-8 overflow-hidden border border-line">
                <iframe
                  title={t.address}
                  src={mapSrc}
                  width="100%"
                  height="220"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Fact({
  label,
  value,
  href,
  dir,
}: {
  label: string;
  value: string;
  href: string;
  dir?: string;
}) {
  const external = href.startsWith("http");
  return (
    <div className="flex min-w-0 items-baseline justify-between gap-4 py-5 md:gap-6">
      <p className="shrink-0 text-[12px] font-medium uppercase tracking-[0.22em] text-stone">{label}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="min-w-0 break-all text-end text-lg font-medium text-ink transition-colors hover:text-burgundy"
        dir={dir}
      >
        {value}
      </a>
    </div>
  );
}
