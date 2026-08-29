export type Purpose = "sale" | "rent";
export type PropertyType =
  | "villa"
  | "house"
  | "land"
  | "building"
  | "apartment"
  | "commercial"
  | "other";

export interface Property {
  id: string;
  slug: string;
  referenceNumber: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  purpose: Purpose;
  propertyType: PropertyType;
  city: string;
  districtAr: string;
  districtEn: string;
  price?: number;
  currency: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  images: string[];
  featured: boolean;
  latitude?: number;
  longitude?: number;
  amenities: string[];
  status: "available" | "on-request" | "leased";
  createdAt: string;
}

const IMG = "/images/properties";

export const propertyTypes: PropertyType[] = [
  "villa",
  "house",
  "land",
  "building",
  "apartment",
  "commercial",
  "other",
];

/**
 * DEMO DATASET — Development listings assembled from public material published
 * by Location Real Estate (areas, prices and types are drawn from the company's
 * own public Canva page). Images are the company's own property photos.
 * Replace this dataset with the official, verified listing feed when available.
 */

export const properties: Property[] = [
  {
    id: "1",
    slug: "villa-luqtaifiya",
    referenceNumber: "LOC-001",
    titleAr: "فيلا للبيع — لقطيفية",
    titleEn: "Villa for Sale — Luqtaifiya",
    descriptionAr:
      "فيلا بتشطيب سوبر لوكس في لقطيفية، بجوار سفارة سويسرا ومركز الدفنة الطبي، على شارعين أمامي وخلفي وموقع مميز. فرصة سكنية واستثمارية من الطراز الأول.",
    descriptionEn:
      "A super-luxury finished villa in Luqtaifiya, beside the Swiss Embassy and Dafna Medical Centre, on both front and rear streets in a prime location. A first-class residential and investment opportunity.",
    purpose: "sale",
    propertyType: "villa",
    city: "Doha",
    districtAr: "لقطيفية",
    districtEn: "Luqtaifiya",
    price: 3800000,
    currency: "QAR",
    bedrooms: 6,
    bathrooms: 7,
    area: 1225,
    images: [IMG + "/p01.jpg", IMG + "/p02.jpg", IMG + "/p03.jpg", IMG + "/p04.jpg"],
    featured: true,
    latitude: 25.3511,
    longitude: 51.5279,
    amenities: ["موقف سيارات", "غرفة خادمة", "حديقة", "تشطيب فاخر"],
    status: "available",
    createdAt: "2026-01-10",
  },
  {
    id: "2",
    slug: "villa-al-dhakhira",
    referenceNumber: "LOC-002",
    titleAr: "فيلا مؤجرة — الذخيرة",
    titleEn: "Rented Villa — Al Dhakhira",
    descriptionAr:
      "فيلا مؤجرة لإسكان حكومي في الذخيرة بمساحة واسعة، قريبة من المسجد والبحر، بتشطيب سوبر لوكس. خيار استثماري بدخل شهري ثابت.",
    descriptionEn:
      "A villa rented for government housing in Al Dhakhira on a large area, close to the mosque and the sea, with super-luxury finishing. An investment option with steady monthly income.",
    purpose: "sale",
    propertyType: "villa",
    city: "Al Khor",
    districtAr: "الذخيرة",
    districtEn: "Al Dhakhira",
    price: undefined,
    currency: "QAR",
    bedrooms: 6,
    bathrooms: 6,
    area: 1200,
    images: [IMG + "/p05.jpg", IMG + "/p06.jpg", IMG + "/p07.jpg"],
    featured: true,
    amenities: ["مؤجرة", "تشطيب فاخر", "قريبة من البحر"],
    status: "on-request",
    createdAt: "2026-01-12",
  },
  {
    id: "3",
    slug: "villa-al-thumama",
    referenceNumber: "LOC-003",
    titleAr: "فيلا فاخرة — الثمامة",
    titleEn: "Luxury Villa — Al Thumama",
    descriptionAr:
      "فيلا فاخرة في الثمامة بتشطيب سوبر ديلوكس، واجهة حجر وبها مصعد، بالقرب من الميرة وستاد الثمامة. سكن راقٍ في موقع عصري.",
    descriptionEn:
      "A luxury villa in Al Thumama with super-deluxe finishing, stone facade and an elevator, near Al Meera and Thumama Stadium. Refined living in a modern location.",
    purpose: "sale",
    propertyType: "villa",
    city: "Doha",
    districtAr: "الثمامة",
    districtEn: "Al Thumama",
    price: undefined,
    currency: "QAR",
    bedrooms: 5,
    bathrooms: 6,
    area: 426,
    images: [IMG + "/p08.jpg", IMG + "/p09.jpg", IMG + "/p10.jpg"],
    featured: false,
    amenities: ["مصعد", "تشطيب ديلوكس", "قريبة من الاستاد"],
    status: "on-request",
    createdAt: "2026-01-15",
  },
  {
    id: "4",
    slug: "house-khalifa",
    referenceNumber: "LOC-004",
    titleAr: "بيت ممتاز للاستثمار — شعبية خليفة",
    titleEn: "Investment House — Khalifa",
    descriptionAr:
      "بيت ممتاز للاستثمار في شعبية خليفة على شارع كبير وبالقرب من مسجد، بدخل شهري جيد. خيار استثماري عملي داخل المدينة.",
    descriptionEn:
      "An excellent investment house in Khalifa on a main street near a mosque, with a healthy monthly income. A practical investment option inside the city.",
    purpose: "sale",
    propertyType: "house",
    city: "Doha",
    districtAr: "شعبية خليفة",
    districtEn: "Khalifa",
    price: 2200000,
    currency: "QAR",
    bedrooms: 5,
    bathrooms: 4,
    area: 607,
    images: [IMG + "/p11.jpg", IMG + "/p12.jpg", IMG + "/p13.jpg"],
    featured: true,
    amenities: ["شارع رئيسي", "قريبة من مسجد", "دخل شهري"],
    status: "available",
    createdAt: "2026-01-18",
  },
  {
    id: "5",
    slug: "twin-villas-al-khor",
    referenceNumber: "LOC-005",
    titleAr: "فلتين متلاصقتين — الخور",
    titleEn: "Twin Villas — Al Khor",
    descriptionAr:
      "فلتين متلاصقتين في الخور خلف مجمع خدمات الخور، قريبان من اللولو وواحة ازدان، مؤجرتان بعقود حكومية. خيار استثماري ممتاز.",
    descriptionEn:
      "Twin villas in Al Khor behind the Khor Services Complex, near Lulu and Azdan Oasis, rented under government contracts. An excellent investment option.",
    purpose: "sale",
    propertyType: "villa",
    city: "Al Khor",
    districtAr: "الخور",
    districtEn: "Al Khor",
    price: 2650000,
    currency: "QAR",
    bedrooms: 6,
    bathrooms: 6,
    area: 600,
    images: [IMG + "/p14.jpg", IMG + "/p15.jpg", IMG + "/p16.jpg"],
    featured: true,
    amenities: ["مؤجرتين", "عقود حكومية", "قريبة من الخدمات"],
    status: "available",
    createdAt: "2026-01-20",
  },
  {
    id: "6",
    slug: "land-jeraimisbeh",
    referenceNumber: "LOC-006",
    titleAr: "أرض للبيع — جري مصبح",
    titleEn: "Land for Sale — Jeraim Isbeh",
    descriptionAr:
      "أرض للبيع في جري مصبح بموقع استثنائي وسهولة وصول، على شارعين أمامي وخلفي. فرصة لإنشاء فيلا أو استثمار مستقبلي.",
    descriptionEn:
      "Land for sale in Jeraim Isbeh in an exceptional location with easy access, on both front and rear streets. An opportunity to build a villa or invest for the future.",
    purpose: "sale",
    propertyType: "land",
    city: "Doha",
    districtAr: "جري مصبح",
    districtEn: "Jeraim Isbeh",
    price: 2990000,
    currency: "QAR",
    bedrooms: undefined,
    bathrooms: undefined,
    area: 1058,
    images: [IMG + "/p17.jpg", IMG + "/p18.jpg", IMG + "/p19.jpg"],
    featured: false,
    amenities: ["شارع أمامي وخلفي", "سهولة وصول"],
    status: "available",
    createdAt: "2026-01-25",
  },
  {
    id: "7",
    slug: "villa-medinat-khalifa",
    referenceNumber: "LOC-007",
    titleAr: "فيلا — مدينة خليفة",
    titleEn: "Villa — Madinat Khalifa",
    descriptionAr:
      "فيلا في مدينة خليفة بمساحة جيدة، موقع مركزي قريب من الخدمات والطرق الرئيسية. خيار سكني مميز داخل المدينة.",
    descriptionEn:
      "A villa in Madinat Khalifa on a good area, centrally located near services and main roads. A standout residential option in the city.",
    purpose: "rent",
    propertyType: "villa",
    city: "Doha",
    districtAr: "مدينة خليفة",
    districtEn: "Madinat Khalifa",
    price: 95000,
    currency: "QAR",
    bedrooms: 5,
    bathrooms: 5,
    area: 482,
    images: [IMG + "/p20.jpg", IMG + "/p21.jpg", IMG + "/p22.jpg"],
    featured: false,
    amenities: ["موقع مركزي", "مجهزة"],
    status: "available",
    createdAt: "2026-02-01",
  },
  {
    id: "8",
    slug: "villa-al-rayyan",
    referenceNumber: "LOC-008",
    titleAr: "فيلا — الريان",
    titleEn: "Villa — Al Rayyan",
    descriptionAr:
      "فيلا في الريان بتشطيب ديلوكس ومساحة واسعة، خيار سكني عائلي في منطقة مستقرة داخل قطر.",
    descriptionEn:
      "A villa in Al Rayyan with deluxe finishing and a generous area, a family residential option in an established area of Qatar.",
    purpose: "sale",
    propertyType: "villa",
    city: "Al Rayyan",
    districtAr: "الريان",
    districtEn: "Al Rayyan",
    price: undefined,
    currency: "QAR",
    bedrooms: 5,
    bathrooms: 5,
    area: 744,
    images: [IMG + "/p23.jpg", IMG + "/p24.jpg", IMG + "/p25.jpg"],
    featured: false,
    amenities: ["تشطيب ديلوكس", "مساحة واسعة"],
    status: "on-request",
    createdAt: "2026-02-03",
  },
  {
    id: "9",
    slug: "land-al-kheesa",
    referenceNumber: "LOC-009",
    titleAr: "أرض — الخيسة",
    titleEn: "Land — Al Kheesa",
    descriptionAr:
      "أرض للبيع في الخيسة بمساحة 540 متراً، فرصة لتطوير فيلا أو استثمار في إحدى مناطق قطر الناشئة.",
    descriptionEn:
      "Land for sale in Al Kheesa on a 540 square metre area, an opportunity to build a villa or invest in one of Qatar's developing areas.",
    purpose: "sale",
    propertyType: "land",
    city: "Al Daayen",
    districtAr: "الخيسة",
    districtEn: "Al Kheesa",
    price: undefined,
    currency: "QAR",
    bedrooms: undefined,
    bathrooms: undefined,
    area: 540,
    images: [IMG + "/p26.jpg", IMG + "/p27.jpg", IMG + "/p28.jpg"],
    featured: false,
    amenities: ["منطقة ناشئة"],
    status: "on-request",
    createdAt: "2026-02-06",
  },
  {
    id: "10",
    slug: "villa-abu-hamour",
    referenceNumber: "LOC-010",
    titleAr: "فيلا للاستثمار — أبو هامور",
    titleEn: "Investment Villa — Abu Hamour",
    descriptionAr:
      "فيلا للاستثمار في أبو هامور بدخل شهري جيد، موقع مناسب للاستثمار المؤجر مع عائد شهري منتظم.",
    descriptionEn:
      "An investment villa in Abu Hamour with a good monthly income, a suitable location for leased investment with regular monthly returns.",
    purpose: "sale",
    propertyType: "villa",
    city: "Doha",
    districtAr: "أبو هامور",
    districtEn: "Abu Hamour",
    price: undefined,
    currency: "QAR",
    bedrooms: 5,
    bathrooms: 5,
    area: 550,
    images: [IMG + "/p01.jpg", IMG + "/p03.jpg", IMG + "/p05.jpg"],
    featured: false,
    amenities: ["مؤجرة", "دخل شهري"],
    status: "on-request",
    createdAt: "2026-02-10",
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured);
}

export const districtGroups = [
  "الدوحة",
  "الريان",
  "الوكرة",
  "الخور",
  "الثمامة",
  "أم صلال",
] as const;
