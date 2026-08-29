import { properties } from "./properties";
import { site } from "./site";
import { Locale } from "./dictionaries";

export function formatPrice(price: number | undefined, locale: Locale) {
  if (price === undefined || price === null) return null;
  const num = new Intl.NumberFormat(locale === "ar" ? "ar-QA" : "en-QA", {
    maximumFractionDigits: 0,
  }).format(price);
  return locale === "ar" ? `${num} ريال` : `${num} QAR`;
}

export function formatArea(area: number | undefined, locale: Locale) {
  if (area === undefined || area === null) return null;
  const num = new Intl.NumberFormat(locale === "ar" ? "ar-QA" : "en-QA", {
    maximumFractionDigits: 0,
  }).format(area);
  return locale === "ar" ? `${num} م²` : `${num} m²`;
}

export function getPurposeLabel(locale: Locale) {
  return (purpose: "sale" | "rent") =>
    locale === "ar" ? (purpose === "sale" ? "للبيع" : "للإيجار") : purpose === "sale" ? "For Sale" : "For Rent";
}

export function getPropertyTypeLabel(locale: Locale) {
  const ar: Record<string, string> = {
    villa: "فيلا",
    house: "بيت",
    land: "أرض",
    building: "عمارة",
    apartment: "شقة",
    commercial: "تجاري",
    other: "أخرى",
  };
  const en: Record<string, string> = {
    villa: "Villa",
    house: "House",
    land: "Land",
    building: "Building",
    apartment: "Apartment",
    commercial: "Commercial",
    other: "Other",
  };
  const map = locale === "ar" ? ar : en;
  return (t: string) => map[t] ?? t;
}

export function getDistrictLabels(locale: Locale, p: { districtAr: string; districtEn: string }) {
  return locale === "ar" ? p.districtAr : p.districtEn;
}

export { site };

export function countByDistrict(districtAr: string) {
  return properties.filter((p) => p.districtAr === districtAr).length;
}

export function propertyBrochureMessage(p: {
  titleAr: string;
  titleEn: string;
  referenceNumber: string;
}, locale: Locale) {
  const name = locale === "ar" ? p.titleAr : p.titleEn;
  return locale === "ar"
    ? `السلام عليكم، أود الاستفسار عن هذا العقار: ${name} (المرجع ${p.referenceNumber})`
    : `Hello, I would like to inquire about this property: ${name} (Ref ${p.referenceNumber})`;
}

export function generalInquiryMessage(locale: Locale) {
  return locale === "ar"
    ? "السلام عليكم، أود الاستفسار عن خدمات لوكيشن للعقارات."
    : "Hello, I would like to inquire about Location Real Estate services.";
}
