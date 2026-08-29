import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as "ar" | "en";
  const dict = dictionaries[locale];
  return {
    title: `${dict.contact.title} — ${dict.meta.siteName}`,
    description: dict.meta.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const t = dict.contact;

  const mapSrc =
    "https://maps.google.com/maps?q=Al%20Jazira%20Al%20Arabiya%20St%20Doha%20Qatar&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <main className="bg-paper pb-20">
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={dict.meta.description} locale={locale} />

      <Container className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="space-y-1 divide-y divide-ink/10">
            <Row label={t.phone} value={site.phoneDisplay} href={`tel:${site.phoneRaw}`} dir="ltr" action={t.call} />
            <Row label={t.whatsapp} value={site.phoneDisplay} href={site.whatsappLink} action={t.call} />
            <div className="py-5">
              <p className="text-xs font-medium uppercase tracking-wider text-stone">{t.address}</p>
              <p className="mt-1 text-lg font-medium text-ink">
                {locale === "ar" ? "شارع الجزيرة العربية، الدوحة، قطر" : "Al Jazira Al Arabiya St, Doha, Qatar"}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-ink"
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
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-line bg-mist p-6 md:p-8">
            <h2 className={`mb-6 text-2xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>
              {t.form.title}
            </h2>
            <ContactForm locale={locale} dict={dict} />
          </div>
        </Reveal>
      </Container>
    </main>
  );
}

function Row({
  label,
  value,
  href,
  action,
  dir,
}: {
  label: string;
  value: string;
  href: string;
  action: string;
  dir?: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-stone">{label}</p>
        <p className="mt-1 text-lg font-medium text-ink" dir={dir}>
          {value}
        </p>
      </div>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-mist"
      >
        {action}
      </a>
    </div>
  );
}
