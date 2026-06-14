"use client";

import { FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const fields = [
  { name: "name", label: "Nama", placeholder: "Nama Anda" },
  { name: "business", label: "Bisnis", placeholder: "Nama bisnis / brand" },
  { name: "project", label: "Jenis project", placeholder: "Website, landing page, sistem internal" },
  { name: "budget", label: "Budget", placeholder: "Contoh: Rp1,5jt - Rp3jt" },
  { name: "deadline", label: "Deadline", placeholder: "Contoh: 2 minggu" },
];

export function ContactBriefForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = `Halo Aeternum, saya ingin konsultasi project website/sistem digital.
Nama: ${formData.get("name") || "-"}
Bisnis: ${formData.get("business") || "-"}
Jenis project: ${formData.get("project") || "-"}
Budget: ${formData.get("budget") || "-"}
Deadline: ${formData.get("deadline") || "-"}
Kebutuhan: ${formData.get("message") || "-"}`;

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-borderLight bg-white p-7 shadow-ambient">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Form brief cepat</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold text-navy">
            {field.label}
            <input
              name={field.name}
              placeholder={field.placeholder}
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
      <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 font-bold text-navy transition hover:-translate-y-0.5 hover:shadow-gold">
        <MessageCircle className="h-5 w-5" />
        Kirim brief via WhatsApp
      </button>
    </form>
  );
}
