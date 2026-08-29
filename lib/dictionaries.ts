export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export type Dict = {
  dir: "rtl" | "ltr";
  code: "ar" | "en";
  meta: {
    siteName: string;
    description: string;
  };
  nav: {
    home: string;
    properties: string;
    forSale: string;
    forRent: string;
    services: string;
    list: string;
    about: string;
    contact: string;
    search: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    license: string;
    scroll: string;
  };
  search: {
    title: string;
    purpose: string;
    buy: string;
    rent: string;
    type: string;
    typeVilla: string;
    typeHouse: string;
    typeLand: string;
    typeBuilding: string;
    typeApartment: string;
    typeCommercial: string;
    typeOther: string;
    area: string;
    price: string;
    allAreas: string;
    anyPrice: string;
    submit: string;
    results: string;
    noResults: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewProperty: string;
  };
  sell: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    secondary: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  investment: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  areas: {
    eyebrow: string;
    title: string;
    subtitle: string;
    view: string;
    properties: string;
  };
  cinematic: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  marketStatement: {
    eyebrow: string;
    title1: string;
    title2: string;
    body: string;
  };
  about: {
    eyebrow: string;
    title: string;
    statement: string;
    licenseLabel: string;
    cta: string;
  };
  trust: {
    eyebrow: string;
    google: string;
    basedOn: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    call: string;
    directions: string;
    form: {
      title: string;
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    propertiesCol: string;
    companyCol: string;
    contactCol: string;
    copyright: string;
  };
  propertyDetail: {
    overview: string;
    description: string;
    specs: string;
    amenities: string;
    purposeLabel: string;
    areaLabel: string;
    price: string;
    priceOnRequest: string;
    location: string;
    interested: string;
    call: string;
    whatsapp: string;
    requestVisit: string;
    back: string;
    share: string;
    reference: string;
    gallery: string;
    notFound: string;
    notFoundDesc: string;
  };
  listProperty: {
    eyebrow: string;
    title: string;
    description: string;
    heroNote: string;
    fields: {
      name: string;
      phone: string;
      propertyType: string;
      district: string;
      requestType: string;
      sell: string;
      rent: string;
      manage: string;
      expectedPrice: string;
      description: string;
      photos: string;
      location: string;
      notes: string;
      submit: string;
      success: string;
      whatsappAlt: string;
    };
  };
  propertiesPage: {
    title: string;
    subtitle: string;
    forSaleTitle: string;
    forSaleSubtitle: string;
    forRentTitle: string;
    forRentSubtitle: string;
    all: string;
    sort: string;
  };
  common: {
    demoNote: string;
    readMore: string;
  };
  notFound: {
    title: string;
    desc: string;
    home: string;
  };
};

const ar: Dict = {
  dir: "rtl",
  code: "ar",
  meta: {
    siteName: "لوكيشن للعقارات",
    description:
      "شركة عقارية داخل دولة قطر تقدم خدمات البيع والشراء والإيجار وإدارة الأملاك، بترخيص رقم 40.",
  },
  nav: {
    home: "الرئيسية",
    properties: "العقارات",
    forSale: "للبيع",
    forRent: "للإيجار",
    services: "الخدمات",
    list: "اعرض عقارك",
    about: "عن لوكيشن",
    contact: "تواصل معنا",
    search: "بحث",
  },
  hero: {
    eyebrow: "لوكيشن للعقارات — قطر",
    title1: "عقارك يبدأ من",
    title2: "اللوكيشن الصحيح.",
    subtitle: "بيع، شراء، إيجار وإدارة أملاك داخل قطر.",
    cta: "استكشف العقارات",
    ctaSecondary: "اعرض عقارك لدينا",
    license: "ترخيص عقاري رقم 40",
    scroll: "اكتشف المزيد",
  },
  search: {
    title: "ابحث عن عقارك",
    purpose: "نوع العملية",
    buy: "بيع",
    rent: "إيجار",
    type: "نوع العقار",
    typeVilla: "فيلا",
    typeHouse: "بيت",
    typeLand: "أرض",
    typeBuilding: "عمارة",
    typeApartment: "شقة",
    typeCommercial: "تجاري",
    typeOther: "أخرى",
    area: "المنطقة",
    price: "السعر",
    allAreas: "جميع المناطق",
    anyPrice: "أي سعر",
    submit: "بحث عن عقار",
    results: "نتائج البحث",
    noResults: "لا توجد عقارات مطابقة، جرّب تعديل خيارات البحث.",
  },
  featured: {
    eyebrow: "عقارات مختارة",
    title: "فرص عقارية مختارة",
    subtitle: "تسويق مميز لعقارات داخل قطر، بعرضٍ نظيف وواضح.",
    viewAll: "عرض جميع العقارات",
    viewProperty: "التفاصيل",
  },
  sell: {
    eyebrow: "اعرض عقارك",
    title: "لديك عقار للبيع أو الإيجار؟",
    description:
      "اعرض عقارك لدى لوكيشن للعقارات، وسيتواصل معك فريقنا لمراجعة التفاصيل ومساعدتك في تسويقه.",
    cta: "اعرض عقارك الآن",
    secondary: "تواصل عبر واتساب",
  },
  services: {
    eyebrow: "خدماتنا",
    title: "خدمات عقارية متكاملة",
    lead: "نرافقك في كل خطوة من رحلة عقارك داخل قطر — من التقييم إلى التوقيع.",
    items: [
      { title: "بيع العقارات", desc: "تسويق منظم وواضح لعقارك للوصول إلى المشترين المناسبين داخل قطر." },
      { title: "شراء العقارات", desc: "نساعدك في تحديد العقار المناسب وتوفير الوقت أثناء البحث." },
      { title: "الإيجار والاستئجار", desc: "إيجاد العقارات المؤجرة وإدارتها بما يناسب المالك والمستأجر." },
      { title: "إدارة الأملاك", desc: "إدارة دورية لعقارك ومتابعة شؤونه نيابةً عنك." },
      { title: "التسويق العقاري", desc: "طرق تسويق حديثة تعرض عقارك بأفضل صورة ممكنة." },
    ],
  },
  investment: {
    eyebrow: "استثمار",
    title: "استثمر في المكان الصحيح.",
    body: "نساعدك على اكتشاف الفرص العقارية المناسبة داخل قطر، من خلال فهم السوق والمواقع المناسبة لطموحك.",
    cta: "تحدث معنا عن الاستثمار العقاري",
  },
  areas: {
    eyebrow: "المناطق",
    title: "اكتشف العقارات حسب المنطقة",
    subtitle: "مجموعة مختارة من المناطق الرئيسية داخل قطر.",
    view: "تصفح المنطقة",
    properties: "عقار",
  },
  cinematic: {
    eyebrow: "حضور مميز",
    title: "المكان المناسب يعرض القيمة الحقيقية.",
    body: "نهتم بالتفاصيل التي يصنعها اللوكيشن، لنعرض عقارك في المكان المثالي أمام المستثمر الصحيح.",
    cta: "تواصل معنا",
  },
  marketStatement: {
    eyebrow: "لوكيشن للعقارات",
    title1: "نعرف السوق.",
    title2: "نعرف المكان.",
    body: "خبرة محلية حقيقية داخل قطر — نفهم السوق ونختار اللوكيشن المناسب لعقارك.",
  },
  about: {
    eyebrow: "عن لوكيشن",
    title: "لوكيشن الصحيح لعقارك.",
    statement:
      "شركة عقارية داخل دولة قطر تقدم خدمات البيع والشراء والإيجار وإدارة الأملاك، برؤية محلية قريبة من أصحاب العقارات والمستثمرين.",
    licenseLabel: "مرخصة رسمياً في دولة قطر",
    cta: "تعرف علينا",
  },
  trust: {
    eyebrow: "سمعتنا",
    google: "Google",
    basedOn: "بناءً على مراجعات Google الحالية",
  },
  contact: {
    eyebrow: "تواصل معنا",
    title: "نسعد بالتحدث معك",
    phone: "الهاتف",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    address: "العنوان",
    call: "اتصال",
    directions: "الموقع على الخريطة",
    form: {
      title: "أرسل رسالة",
      name: "الاسم",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      success: "شكراً لك، سنتواصل معك قريباً.",
      error: "حدث خطأ، يرجى المحاولة لاحقاً.",
    },
  },
  footer: {
    tagline: "شركة عقارية داخل دولة قطر.",
    propertiesCol: "العقارات",
    companyCol: "الشركة",
    contactCol: "التواصل",
    copyright: "© Location Real Estate",
  },
  propertyDetail: {
    overview: "نظرة عامة",
    description: "الوصف",
    specs: "المواصفات",
    amenities: "المرافق",
    purposeLabel: "نوع الطلب",
    areaLabel: "المساحة",
    price: "السعر",
    priceOnRequest: "عند الطلب",
    location: "الموقع",
    interested: "مهتم بهذا العقار؟",
    call: "اتصل بنا",
    whatsapp: "واتساب",
    requestVisit: "طلب معاينة",
    back: "العودة إلى العقارات",
    share: "مشاركة",
    reference: "المرجع",
    gallery: "معرض الصور",
    notFound: "العقار غير موجود",
    notFoundDesc: "عذراً، لم نجد هذا العقار.",
  },
  listProperty: {
    eyebrow: "اعرض عقارك",
    title: "لديك عقار للبيع أو الإيجار؟",
    description:
      "اعرض عقارك لدى لوكيشن للعقارات، وسيتواصل معك فريقنا لمراجعة التفاصيل ومساعدتك في تسويقه.",
    heroNote: "لوكيشن الصحيح لعقارك.",
    fields: {
      name: "الاسم",
      phone: "رقم الهاتف",
      propertyType: "نوع العقار",
      district: "المنطقة",
      requestType: "نوع الطلب",
      sell: "بيع",
      rent: "إيجار",
      manage: "إدارة أملاك",
      expectedPrice: "السعر المتوقع",
      description: "الوصف",
      photos: "رفع صور العقار",
      location: "الموقع",
      notes: "ملاحظات",
      submit: "إرسال الطلب",
      success: "تم استلام طلبك، سنتواصل معك قريباً.",
      whatsappAlt: "أو أرسل التفاصيل مباشرة عبر واتساب",
    },
  },
  propertiesPage: {
    title: "عقاراتنا",
    subtitle: "مجموعة من العقارات داخل قطر.",
    forSaleTitle: "عقارات للبيع",
    forSaleSubtitle: "فلل وبيوت وأراضٍ معروضة للبيع في قطر.",
    forRentTitle: "عقارات للإيجار",
    forRentSubtitle: "خيارات متاحة للإيجار في قطر.",
    all: "الكل",
    sort: "ترتيب",
  },
  common: {
    demoNote: "قائمة تطوير تجريبية — تُستبدل بالعقارات الفعلية.",
    readMore: "اعرف المزيد",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    desc: "عذراً، لم نتمكن من العثور على الصفحة المطلوبة.",
    home: "العودة إلى الرئيسية",
  },
};

const en: Dict = {
  dir: "ltr",
  code: "en",
  meta: {
    siteName: "LOCATION REAL ESTATE",
    description:
      "A Qatari real estate company offering sales, purchases, leasing and property management across Qatar. Licensed no. 40.",
  },
  nav: {
    home: "Home",
    properties: "Properties",
    forSale: "For Sale",
    forRent: "For Rent",
    services: "Services",
    list: "List Your Property",
    about: "About",
    contact: "Contact",
    search: "Search",
  },
  hero: {
    eyebrow: "LOCATION REAL ESTATE — Qatar",
    title1: "Property starts at the",
    title2: "right location.",
    subtitle: "Sales, purchase, leasing and property management across Qatar.",
    cta: "Explore Properties",
    ctaSecondary: "List Your Property",
    license: "Real Estate License No. 40",
    scroll: "Discover more",
  },
  search: {
    title: "Find your property",
    purpose: "Purpose",
    buy: "For Sale",
    rent: "For Rent",
    type: "Property Type",
    typeVilla: "Villa",
    typeHouse: "House",
    typeLand: "Land",
    typeBuilding: "Building",
    typeApartment: "Apartment",
    typeCommercial: "Commercial",
    typeOther: "Other",
    area: "Area",
    price: "Price",
    allAreas: "All areas",
    anyPrice: "Any price",
    submit: "Search Properties",
    results: "Search results",
    noResults: "No matching properties. Try adjusting your search.",
  },
  featured: {
    eyebrow: "Featured",
    title: "Featured Opportunities",
    subtitle: "Curated properties across Qatar, presented cleanly and clearly.",
    viewAll: "View all properties",
    viewProperty: "Details",
  },
  sell: {
    eyebrow: "List Your Property",
    title: "Own a property to sell or rent?",
    description:
      "List your property with Location Real Estate and our team will reach out to review the details and help you market it.",
    cta: "List Your Property Now",
    secondary: "Contact via WhatsApp",
  },
  services: {
    eyebrow: "Services",
    title: "Complete Real Estate Services",
    lead: "We guide you through every step of your property journey in Qatar — from valuation to signature.",
    items: [
      { title: "Property Sales", desc: "Organised, clear marketing of your property to the right buyers in Qatar." },
      { title: "Property Purchase", desc: "We help you identify the right property and save time while searching." },
      { title: "Leasing & Rental", desc: "Finding and managing rented properties for both owners and tenants." },
      { title: "Property Management", desc: "Regular management and follow-up of your property on your behalf." },
      { title: "Property Marketing", desc: "Modern marketing methods presenting your property at its best." },
    ],
  },
  investment: {
    eyebrow: "Investment",
    title: "Invest in the right place.",
    body: "We help you discover suitable property opportunities in Qatar, by understanding the market and locations that fit your ambitions.",
    cta: "Talk to us about property investment",
  },
  areas: {
    eyebrow: "Areas",
    title: "Explore Properties by Area",
    subtitle: "A curated selection of key areas across Qatar.",
    view: "Browse area",
    properties: "properties",
  },
  cinematic: {
    eyebrow: "Presence",
    title: "The right place reveals true value.",
    body: "We care about the details created by location, to showcase your property in the right place in front of the right investor.",
    cta: "Contact us",
  },
  marketStatement: {
    eyebrow: "LOCATION REAL ESTATE",
    title1: "We know the market.",
    title2: "We know the place.",
    body: "Genuine local expertise in Qatar — we read the market and find the right location for your property.",
  },
  about: {
    eyebrow: "About",
    title: "The right location for your property.",
    statement:
      "A Qatari real estate company offering sales, purchase, leasing and property management, with a local vision close to owners and investors.",
    licenseLabel: "Officially licensed in Qatar",
    cta: "Learn about us",
  },
  trust: {
    eyebrow: "Reputation",
    google: "Google",
    basedOn: "Based on current Google reviews",
  },
  contact: {
    eyebrow: "Contact",
    title: "We'd love to talk",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    address: "Address",
    call: "Call",
    directions: "View on map",
    form: {
      title: "Send a message",
      name: "Name",
      phone: "Phone number",
      email: "Email",
      message: "Your message",
      submit: "Send message",
      success: "Thank you, we will contact you soon.",
      error: "Something went wrong, please try again later.",
    },
  },
  footer: {
    tagline: "A Qatari real estate company.",
    propertiesCol: "Properties",
    companyCol: "Company",
    contactCol: "Contact",
    copyright: "© Location Real Estate",
  },
  propertyDetail: {
    overview: "Overview",
    description: "Description",
    specs: "Specifications",
    amenities: "Amenities",
    purposeLabel: "Purpose",
    areaLabel: "Area",
    price: "Price",
    priceOnRequest: "On request",
    location: "Location",
    interested: "Interested in this property?",
    call: "Call us",
    whatsapp: "WhatsApp",
    requestVisit: "Request a viewing",
    back: "Back to properties",
    share: "Share",
    reference: "Reference",
    gallery: "Gallery",
    notFound: "Property not found",
    notFoundDesc: "Sorry, we couldn't find this property.",
  },
  listProperty: {
    eyebrow: "List Your Property",
    title: "Own a property to sell or rent?",
    description:
      "List your property with Location Real Estate and our team will reach out to review the details and help you market it.",
    heroNote: "The right location for your property.",
    fields: {
      name: "Name",
      phone: "Phone number",
      propertyType: "Property type",
      district: "Area/District",
      requestType: "Request type",
      sell: "Sell",
      rent: "Rent",
      manage: "Property management",
      expectedPrice: "Expected price",
      description: "Description",
      photos: "Upload property photos",
      location: "Location",
      notes: "Notes",
      submit: "Submit request",
      success: "We received your request, we will contact you soon.",
      whatsappAlt: "Or send details directly via WhatsApp",
    },
  },
  propertiesPage: {
    title: "Our Properties",
    subtitle: "A collection of properties across Qatar.",
    forSaleTitle: "Properties for Sale",
    forSaleSubtitle: "Villas, houses and land available for sale in Qatar.",
    forRentTitle: "Properties for Rent",
    forRentSubtitle: "Options available for rent across Qatar.",
    all: "All",
    sort: "Sort",
  },
  common: {
    demoNote: "Development demo list — to be replaced with actual listings.",
    readMore: "Learn more",
  },
  notFound: {
    title: "Page not found",
    desc: "Sorry, we couldn't find the page you were looking for.",
    home: "Back to home",
  },
};

export const dictionaries: Record<Locale, Dict> = { ar, en };