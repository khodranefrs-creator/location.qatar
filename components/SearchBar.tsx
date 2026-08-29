"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Dict } from "./types";
import type { Locale } from "@/lib/dictionaries";
import type { PropertyType } from "@/lib/properties";

const typeKeys: PropertyType[] = [
  "villa",
  "house",
  "land",
  "building",
  "apartment",
  "commercial",
  "other",
];

export function SearchBar({
  locale,
  dict,
  areas,
}: {
  locale: Locale;
  dict: Dict;
  areas: { value: string; label: string }[];
}) {
  const router = useRouter();
  const s = dict.search;
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const typeLabel = (k: PropertyType) =>
    ({
      villa: s.typeVilla,
      house: s.typeHouse,
      land: s.typeLand,
      building: s.typeBuilding,
      apartment: s.typeApartment,
      commercial: s.typeCommercial,
      other: s.typeOther,
    })[k];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (purpose) params.set("purpose", purpose);
    if (type) params.set("type", type);
    if (area) params.set("area", area);
    if (maxPrice) params.set("price", maxPrice);
    const qs = params.toString();
    router.push(`/${locale}/properties${qs ? `?${qs}` : ""}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 md:grid-cols-5 md:gap-px md:bg-line"
      role="search"
      aria-label={s.title}
    >
      <Field label={s.purpose} className="md:bg-mist">
        <select
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          aria-label={s.purpose}
        >
          <option value="">{locale === "ar" ? "الكل" : "All"}</option>
          <option value="sale">{s.buy}</option>
          <option value="rent">{s.rent}</option>
        </select>
      </Field>

      <Field label={s.type} className="md:bg-mist">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          aria-label={s.type}
        >
          <option value="">{locale === "ar" ? "الكل" : "All"}</option>
          {typeKeys.map((k) => (
            <option key={k} value={k}>
              {typeLabel(k)}
            </option>
          ))}
        </select>
      </Field>

      <Field label={s.area} className="md:bg-mist">
        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          aria-label={s.area}
        >
          <option value="">{s.allAreas}</option>
          {areas.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label={s.price} className="md:bg-mist">
        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          aria-label={s.price}
        >
          <option value="">{s.anyPrice}</option>
          <option value="1500000">{locale === "ar" ? "حتى 1.5 مليون" : "Up to 1.5M"}</option>
          <option value="3000000">{locale === "ar" ? "حتى 3 ملايين" : "Up to 3M"}</option>
          <option value="5000000">{locale === "ar" ? "حتى 5 ملايين" : "Up to 5M"}</option>
        </select>
      </Field>

      <div className="md:bg-mist">
        <button
          type="submit"
          className="flex h-full w-full items-center justify-center gap-2 bg-ink px-6 py-5 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink md:py-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          {s.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`relative flex flex-col bg-mist px-5 py-3 ${className}`}>
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone">
        {label}
      </span>
      {children}
    </label>
  );
}
