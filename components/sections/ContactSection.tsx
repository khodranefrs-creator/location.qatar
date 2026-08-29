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
    "https://maps.google.com/maps?q=Al%20Jazira%20Al%20Arabiya%20St%20Doha%20Qatar&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="bg-mist py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow tone="gold">{t.eyebrow}</Eyebrow>
            <h2
              className={`mt-5 text-4xl leading-[1.1] text-ink md:text-5xl ${
                locale === "ar" ? "arabic font-semibold" : "font-semibold"
              }`}
            >
              {t.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form — dominant (55%) */}
          <Reveal className="lg:col-span-7">
            <div className="border border-line bg-paper p-6 md:p-10">
              <h3 className={`mb-6 text-2xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>
                {t.form.title}
              </h3>
              <ContactForm locale={locale} dict={dict} />
            </div>
          </Reveal>

          {/* Contact info + map (45%) */}
          <Reveal delay={100} className="lg:col-span-5">
            <div className="space-y-0 divide-y divide-ink/10">
              <ContactRow
                label={t.phone}
                value={site.phoneDisplay}
                actionLabel={t.call}
                href={`tel:${site.phoneRaw}`}
                dir="ltr"
              />
              <ContactRow
                label={t.whatsapp}
                value={site.phoneDisplay}
                actionLabel={t.whatsapp}
                href={site.whatsappLink}
              />
              <ContactRow
                label={t.email}
                value={site.email}
                actionLabel={t.email}
                href={`mailto:${site.email}`}
                dir="ltr"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 py-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone">{t.address}</p>
                  <p className="mt-1 text-lg font-medium text-ink">
                    {locale === "ar" ? "شارع الجزيرة العربية، الدوحة، قطر" : "Al Jazira Al Arabiya St, Doha, Qatar"}
                  </p>
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-ink"
                >
                  {t.directions}
                </a>
              </div>
            </div>

            <div className="mt-8 overflow-hidden border border-ink/10">
              <iframe
                title={t.address}
                src={mapSrc}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  label,
  value,
  actionLabel,
  href,
  dir,
}: {
  label: string;
  value: string;
  actionLabel: string;
  href: string;
  dir?: string;
}) {
  const external = href.startsWith("http");
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-5">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-stone">{label}</p>
        <p className="mt-1 break-all text-lg font-medium text-ink" dir={dir}>
          {value}
        </p>
      </div>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="shrink-0 inline-flex items-center gap-2 border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-mist"
      >
        {actionLabel}
      </a>
    </div>
  );
}
