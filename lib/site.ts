export const site = {
  nameAr: "لوكيشن للعقارات",
  nameEn: "LOCATION REAL ESTATE",
  wordmarkAr: "لوكيشن",
  taglineAr: "للعقارات",
  taglineEn: "Real Estate",
  phoneDisplay: "+974 3133 3789",
  phoneRaw: "+97431333789",
  whatsappNumber: "97431333789",
  whatsappLink: "https://wa.me/97431333789",
  email: "location_qatar@yahoo.com",
  addressAr: "شارع الجزيرة العربية، الدوحة، قطر",
  addressEn: "Al Jazira Al Arabiya St, Doha, Qatar",
  mapsUrl: "https://maps.app.goo.gl/VwQg6iM5gG7mamDf6",
  licenseAr: "ترخيص عقاري رقم 40",
  licenseEn: "Real Estate License No. 40",
  googleRating: "5.0",
  googleReviews: 2,
  instagram: "https://www.instagram.com/location.qatar",
  facebook: "https://www.facebook.com/location.qatar1",
  tiktok: "https://www.tiktok.com/@location.qatar",
  currency: "QAR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://location-real-estate.vercel.app",
} as const;

export function whatsappUrl(message: string, lang: "ar" | "en" = "ar") {
  const base = "https://wa.me/" + site.whatsappNumber;
  const prefix = lang === "ar" ? "" : "[EN] ";
  return `${base}?text=${encodeURIComponent(prefix + message)}`;
}
