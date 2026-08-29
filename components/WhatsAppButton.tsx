"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site";
import type { Locale } from "@/lib/dictionaries";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const msg =
    locale === "ar"
      ? "السلام عليكم، أود الاستفسار عن خدمات لوكيشن للعقارات."
      : "Hello, I would like to inquire about Location Real Estate services.";

  return (
    <a
      href={whatsappUrl(msg, locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={locale === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
      className={`fixed bottom-6 end-5 z-40 flex h-13 w-13 items-center justify-center rounded-full border border-line bg-ink text-mist shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:bg-gold hover:text-ink ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ width: "3.25rem", height: "3.25rem" }}
    >
      <Image
        src="/images/brand/whatsapp.svg"
        alt=""
        width={22}
        height={22}
        className="opacity-90"
      />
    </a>
  );
}
