import { Container, Eyebrow } from "@/components/ui";
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
    <section className="bg-paper py-24 md:py-32">
      <Container>
        {/* Phone-first heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 max-w-xl text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-bold" : "font-semibold"
              }`}
            >
              {t.title}
            </h2>
          </div>
          <a
            href={`tel:${site.phoneRaw}`}
            className="group inline-flex items-end gap-3 text-3xl font-semibold tracking-tight text-ink tabular-nums md:text-5xl"
            dir="ltr"
          >
            {site.phoneDisplay}
            <span className="mb-1 hidden h-px w-10 bg-current transition-all group-hover:w-14 md:block" />
          </a>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Direct lines */}
          <div className="lg:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.24em] text-stone">{t.address}</p>
            <p className={`mt-3 text-xl font-medium text-ink md:text-2xl ${locale === "ar" ? "arabic" : ""}`}>
              {locale === "ar" ? site.addressAr : site.addressEn}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block border-b border-ink/30 pb-0.5 text-sm text-ink transition-colors hover:border-burgundy hover:text-burgundy"
            >
              {t.directions}
            </a>

            <div className="mt-10 flex flex-col divide-y divide-line">
              <ContactLine label={t.phone} value={site.phoneDisplay} href={`tel:${site.phoneRaw}`} dir="ltr" />
              <ContactLine label={t.whatsapp} value={site.phoneDisplay} href={site.whatsappLink} dir="ltr" />
              <ContactLine label={t.email} value={site.email} href={`mailto:${site.email}`} dir="ltr" />
            </div>

            <div className="mt-10 overflow-hidden border border-line">
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

          {/* Editorial form */}
          <div className="lg:col-span-7">
            <div className="border-t border-line pt-8">
              <h3 className={`text-2xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>{t.form.title}</h3>
              <div className="mt-8">
                <ContactForm locale={locale} dict={dict} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactLine({
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
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-baseline justify-between gap-6 py-6"
    >
      <span className="text-[12px] font-medium uppercase tracking-[0.24em] text-stone">{label}</span>
      <span
        className="break-all text-right text-xl font-medium text-ink transition-colors group-hover:text-burgundy md:text-2xl"
        dir={dir}
      >
        {value}
      </span>
    </a>
  );
}