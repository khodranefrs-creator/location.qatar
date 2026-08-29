import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { whatsappUrl, site } from "@/lib/site";
import { ListPropertyForm } from "@/components/ListPropertyForm";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
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
    title: `${dict.nav.list} — ${dict.meta.siteName}`,
    description: dict.listProperty.description,
  };
}

export default async function ListPropertyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as "ar" | "en";
  const dict = dictionaries[locale];
  const l = dict.listProperty;

  const waMsg =
    locale === "ar"
      ? "السلام عليكم، أود عرض عقار لدي للبيع/الإيجار عبر لوكيشن للعقارات."
      : "Hello, I would like to list a property for sale/rent with Location Real Estate.";

  return (
    <main className="bg-paper pb-20">
      <PageHeader eyebrow={l.eyebrow} title={l.title} subtitle={l.description} locale={locale} />

      <Container className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <div className="border border-line bg-mist p-6 md:p-10">
            <h2 className={`mb-2 text-xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>
              {locale === "ar" ? "تفاصيل العقار" : "Property details"}
            </h2>
            <p className="mb-8 text-sm text-stone">{l.heroNote}</p>
            <ListPropertyForm locale={locale} dict={dict} />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-2">
          <div className="border border-ink/10 bg-paper p-6 md:p-8">
            <h3 className={`text-xl font-medium text-ink ${locale === "ar" ? "arabic" : ""}`}>
              {l.fields.whatsappAlt}
            </h3>
            <a
              href={whatsappUrl(waMsg, locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.4-5.1-4.6-.1-.2-1.2-1.6-1.2-3.1 0-1.4.7-2.1 1-2.4.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.3 0 .5l-.4.6-.4.5c-.1.1-.3.3-.1.6.1.3.7 1.1 1.5 1.8 1 1 1.9 1.4 2.2 1.5.3.1.4.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
              </svg>
              {locale === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
            </a>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-stone">{dict.contact.phone}</p>
              <a href={`tel:${site.phoneRaw}`} dir="ltr" className="mt-1 block text-xl font-medium text-ink">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
