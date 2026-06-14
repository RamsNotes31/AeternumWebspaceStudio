"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";

const fields = [
  { name: "name", label: "Nama", placeholder: "Nama Anda" },
  { name: "business", label: "Bisnis", placeholder: "Nama bisnis / brand" },
  { name: "project", label: "Jenis project", placeholder: "Website, landing page, sistem internal" },
  { name: "budget", label: "Budget", placeholder: "Contoh: Rp1,5jt - Rp3jt" },
  { name: "deadline", label: "Deadline", placeholder: "Contoh: 2 minggu" },
];

export function ContactBriefForm() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Brief belum bisa dikirim. Coba cek data Anda.");
        return;
      }

      if (!data.whatsappUrl) {
        return;
      }

      window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setError("Koneksi bermasalah. Silakan coba lagi atau gunakan tombol WhatsApp langsung.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-borderLight bg-white p-7 shadow-ambient">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Form brief cepat</p>
      <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold text-navy">
            {field.label}
            <input
              name={field.name}
              placeholder={field.placeholder}
              required={["name", "business", "project"].includes(field.name)}
              className="min-h-12 rounded-2xl border border-borderLight bg-background px-4 text-sm font-medium text-ink outline-none transition focus:border-gold focus:bg-white"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold text-navy sm:col-span-2">
          Kebutuhan singkat
          <textarea
            name="message"
            placeholder="Ceritakan halaman, fitur, referensi, atau kendala bisnis Anda."
            rows={5}
            className="rounded-2xl border border-borderLight bg-background px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-gold focus:bg-white"
          />
        </label>
      </div>
      {error ? <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
      <button type="submit" data-event="contact_form_submit" disabled={isSubmitting} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 font-bold text-navy transition hover:-translate-y-0.5 hover:shadow-gold disabled:cursor-not-allowed disabled:opacity-60">
        <MessageCircle className="h-5 w-5" />
        {isSubmitting ? "Menyiapkan pesan..." : "Kirim brief via WhatsApp"}
      </button>
    </form>
  );
}
