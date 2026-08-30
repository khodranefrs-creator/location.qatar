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

  const fieldCls =
    "w-full border-0 border-b border-ink/20 bg-transparent px-0 pb-3 pt-1 text-base text-ink placeholder:text-stone/50 focus:border-ink focus:outline-none focus:ring-0 transition-colors";

  const labelCls = "mb-2 block text-xs font-medium uppercase tracking-wider text-stone";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            {f.name}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldCls}
            placeholder={f.name}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>
            {f.phone}
          </label>
          <input
            id="cf-phone"
            type="tel"
            dir="ltr"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldCls}
            placeholder="+974 ..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={labelCls}>
          {f.message}
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldCls} resize-none`}
          placeholder={f.message}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-sm font-medium text-mist transition-colors hover:bg-burgundy"
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
      </div>
    </form>
  );
}