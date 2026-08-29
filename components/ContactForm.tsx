"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import type { Dict } from "./types";
import type { Locale } from "@/lib/dictionaries";

export function ContactForm({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.contact.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = locale === "ar"
      ? `رسالة جديدة عبر موقع لوكيشن للعقارات:\nالاسم: ${name}\nالهاتف: ${phone}\nالرسالة: ${message}`
      : `New message via Location Real Estate website:\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const url = whatsappUrl(body, locale);
    window.location.href = url;
    setStatus("sent");
  };

  const inputCls =
    "w-full border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-stone/70 focus:border-gold focus:outline-none transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
            {f.name}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder={f.name}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
            {f.phone}
          </label>
          <input
            id="cf-phone"
            type="tel"
            dir="ltr"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
            placeholder="+974 ..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          {f.message}
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
          placeholder={f.message}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-ink px-7 py-4 text-sm font-medium text-mist transition-colors hover:bg-gold hover:text-ink sm:w-auto"
      >
        {f.submit}
      </button>

      {status === "sent" && (
        <p role="status" className="text-sm text-ink">
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {f.error}
        </p>
      )}
    </form>
  );
}
