import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { locales, dictionaries, type Locale } from "@/lib/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as Locale;
  const dict = dictionaries[locale];
  const meta = {
    title: `${dict.meta.siteName} — ${locale === "ar" ? "قطر" : "Qatar"}`,
    description: dict.meta.description,
  };
  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    icons: {
      icon: "/images/brand/favicon.png",
      apple: "/images/brand/apple-touch-icon.png",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: dict.meta.siteName,
      locale: locale === "ar" ? "ar_QA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "ar" && lang !== "en") notFound();
  const locale = lang as Locale;
  const dict = dictionaries[locale];

  return (
    <html lang={locale} dir={dict.dir} className={`${inter.variable} ${arabic.variable}`}>
      <body
        data-locale={locale}
        className={`min-h-svh flex flex-col ${locale === "ar" ? "arabic" : ""}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:bg-ink focus:text-mist focus:px-4 focus:py-2"
        >
          {locale === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
        </a>
        <Header locale={locale} dict={dict} />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton locale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: dict.meta.siteName,
              alternateName: "Location Real Estate",
              description: dict.meta.description,
              telephone: site.phoneDisplay,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: locale === "ar" ? "شارع الجزيرة العربية" : "Al Jazira Al Arabiya St",
                addressLocality: "Doha",
                addressCountry: "QA",
              },
              areaServed: "QA",
              knowsAbout: [
                "بيع العقارات",
                "شراء العقارات",
                "الإيجار والاستئجار",
                "إدارة الأملاك",
                "التسويق العقاري",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
