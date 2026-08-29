"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import type { Dict } from "./types";
import type { Locale } from "@/lib/dictionaries";

const types = ["villa", "house", "land", "building", "apartment", "commercial", "other"];

export function ListPropertyForm({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.listProperty.fields;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    district: "",
    request: "sell",
    price: "",
    description: "",
    location: "",
    notes: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [sent, setSent] = useState(false);

  const typeLabel = (k: string) =>
    ({
      villa: dict.search.typeVilla,
      house: dict.search.typeHouse,
      land: dict.search.typeLand,
      building: dict.search.typeBuilding,
      apartment: dict.search.typeApartment,
      commercial: dict.search.typeCommercial,
      other: dict.search.typeOther,
    })[k] ?? k;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const photoNames = files && files.length ? Array.from(files).map((x) => x.name).join(", ") : "";
    const msg =
      locale === "ar"
        ? `طلب عرض عقار جديد (لوكيشن للعقارات):\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nنوع العقار: ${typeLabel(form.type)}\nالمنطقة: ${form.district}\nنوع الطلب: ${form.request === "sell" ? "بيع" : form.request === "rent" ? "إيجار" : "إدارة أملاك"}\nالسعر المتوقع: ${form.price}\nالموقع: ${form.location}\nالوصف: ${form.description}\nالصور: ${photoNames}${form.notes ? `\nملاحظات: ${form.notes}` : ""}`
        : `New listing request (Location Real Estate):\nName: ${form.name}\nPhone: ${form.phone}\nProperty type: ${typeLabel(form.type)}\nArea: ${form.district}\nRequest type: ${form.request}\nExpected price: ${form.price}\nLocation: ${form.location}\nDescription: ${form.description}\nPhotos: ${photoNames}${form.notes ? `\nNotes: ${form.notes}` : ""}`;
    window.location.href = whatsappUrl(msg, locale);
    setSent(true);
  };

  const inputCls =
    "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-stone/70 focus:border-gold focus:outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="lp-name" text={f.name} />
          <input id="lp-name" required type="text" value={form.name} onChange={set("name")} className={inputCls} />
        </div>
        <div>
          <Label htmlFor="lp-phone" text={f.phone} />
          <input id="lp-phone" required type="tel" dir="ltr" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+974 ..." />
        </div>
        <div>
          <Label htmlFor="lp-type" text={f.propertyType} />
          <select id="lp-type" value={form.type} onChange={set("type")} className={inputCls}>
            <option value="">{dict.search.type}</option>
            {types.map((t) => (
              <option key={t} value={t}>{typeLabel(t)}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="lp-district" text={f.district} />
          <input id="lp-district" value={form.district} onChange={set("district")} className={inputCls} />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-xs font-medium uppercase tracking-wider text-stone">{f.requestType}</legend>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "sell", label: f.sell },
            { value: "rent", label: f.rent },
            { value: "manage", label: f.manage },
          ].map((o) => (
            <label key={o.value} className="cursor-pointer">
              <input
                type="radio"
                name="request"
                value={o.value}
                checked={form.request === o.value}
                onChange={() => setForm({ ...form, request: o.value })}
                className="peer sr-only"
              />
              <span className="inline-block border border-ink/15 px-5 py-2.5 text-sm text-ink transition-colors peer-checked:bg-ink peer-checked:text-mist">
                {o.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="lp-price" text={f.expectedPrice} />
          <input id="lp-price" type="text" value={form.price} onChange={set("price")} className={inputCls} />
        </div>
        <div>
          <Label htmlFor="lp-location" text={f.location} />
          <input id="lp-location" value={form.location} onChange={set("location")} className={inputCls} />
        </div>
      </div>

      <div>
        <Label htmlFor="lp-desc" text={f.description} />
        <textarea id="lp-desc" rows={4} value={form.description} onChange={set("description")} className={inputCls} />
      </div>

      <div>
        <Label forHtml="lp-photos" text={f.photos} />
        <input
          id="lp-photos"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className={`${inputCls} file:me-3 file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:text-mist`}
        />
        {files && files.length > 0 && (
          <p className="mt-2 text-xs text-stone">
            {Array.from(files).map((x) => x.name).join("، ")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="lp-notes" text={f.notes} />
        <textarea id="lp-notes" rows={3} value={form.notes} onChange={set("notes")} className={inputCls} />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-ink px-7 py-4 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink sm:w-auto"
      >
        {f.submit}
      </button>

      {sent && (
        <p role="status" className="text-sm text-ink">{f.success}</p>
      )}
    </form>
  );
}

function Label({ htmlFor, text, forHtml }: { htmlFor?: string; text: string; forHtml?: string }) {
  return (
    <label htmlFor={htmlFor ?? forHtml} className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
      {text}
    </label>
  );
}
