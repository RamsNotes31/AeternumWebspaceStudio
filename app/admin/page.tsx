import type { Metadata } from "next";
import { CheckCircle2, Lock, LogOut, ShieldCheck, Webhook } from "lucide-react";
import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { getStoredInquiries, type StoredInquiry } from "@/lib/inquiries";

export const metadata: Metadata = {
  title: "Admin | Aeternum Webspace Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const configured = isAdminConfigured();
  const authenticated = await isAdminAuthenticated();

  return (
    <main className="min-h-screen bg-background px-4 py-24 text-navy">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-borderLight bg-white p-6 shadow-ambient md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                <ShieldCheck className="h-4 w-4" />
                Admin Dashboard
              </p>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                Inquiry operations status.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slateText">
                Dashboard ini adalah fondasi admin untuk memantau kesiapan inquiry. Daftar inquiry baru bisa ditampilkan setelah storage permanen seperti Supabase, Airtable, Google Sheets, atau CRM disambungkan.
              </p>
            </div>

            {authenticated ? (
              <form action="/api/admin/logout" method="post">
                <button className="inline-flex min-h-11 items-center gap-2 rounded-full border border-borderLight px-4 text-sm font-bold transition hover:border-gold hover:text-gold">
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </form>
            ) : null}
          </div>

          {!configured ? <AdminSetupNotice /> : authenticated ? <AdminStatusPanel /> : <AdminLoginForm />}
        </div>
      </section>
    </main>
  );
}

function AdminSetupNotice() {
  return (
    <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
      <p className="font-bold">Admin belum aktif.</p>
      <p className="mt-2">Set `ADMIN_PASSWORD` di environment production untuk mengaktifkan login admin.</p>
    </div>
  );
}

function AdminLoginForm() {
  return (
    <form action="/api/admin/login" method="post" className="mt-8 grid max-w-md gap-4 rounded-3xl border border-borderLight bg-background p-5">
      <label className="grid gap-2 text-sm font-bold text-navy">
        Password admin
        <input
          name="password"
          type="password"
          required
          className="min-h-12 rounded-2xl border border-borderLight bg-white px-4 text-sm outline-none transition focus:border-gold"
          placeholder="Masukkan password admin"
        />
      </label>
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-5 font-bold text-white transition hover:bg-midnight hover:shadow-gold">
        <Lock className="h-4 w-4" />
        Masuk Dashboard
      </button>
    </form>
  );
}

async function AdminStatusPanel() {
  const hasWebhook = Boolean(process.env.INQUIRY_WEBHOOK_URL);
  const storage = await getStoredInquiries();
  const items = [
    ["Inquiry API", "Aktif", true],
    ["WhatsApp Redirect", "Aktif", true],
    ["Webhook Storage", hasWebhook ? "Tersambung" : "Belum diset", hasWebhook],
    ["Inquiry List", storage.configured ? `${storage.inquiries.length} inquiry terbaru` : "Belum diset", storage.configured],
  ] as const;

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {items.map(([title, value, active]) => (
        <div key={title} className="rounded-3xl border border-borderLight bg-background p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-navy">{title}</p>
              <p className="mt-2 text-sm text-slateText">{value}</p>
            </div>
            {active ? <CheckCircle2 className="h-6 w-6 text-emerald-500" /> : <Webhook className="h-6 w-6 text-gold" />}
          </div>
        </div>
      ))}
      <div className="rounded-3xl border border-borderLight bg-white p-5 md:col-span-2">
        <p className="font-display text-xl font-bold text-navy">Next admin milestone</p>
        <p className="mt-3 text-sm leading-7 text-slateText">
          Tambahkan update status lead langsung dari dashboard jika workflow follow-up sudah stabil.
        </p>
      </div>
      <InquiryTable inquiries={storage.inquiries} error={storage.error} />
      <div className="rounded-3xl border border-borderLight bg-background p-5 md:col-span-2">
        <p className="font-display text-xl font-bold text-navy">Webhook payload</p>
        <p className="mt-3 text-sm leading-7 text-slateText">
          Jika `INQUIRY_WEBHOOK_URL` diset, setiap inquiry valid dikirim sebagai JSON berisi `name`, `business`, `project`, `budget`, `deadline`, `message`, `source`, dan `submittedAt`.
        </p>
        <div className="mt-4 grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slateText sm:grid-cols-4">
          {[
            "Lead identity",
            "Project need",
            "Budget & timeline",
            "Submitted time",
          ].map((item) => (
            <span key={item} className="rounded-full border border-borderLight bg-white px-3 py-2 text-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InquiryTable({ inquiries, error }: { inquiries: StoredInquiry[]; error: string }) {
  return (
    <div className="rounded-3xl border border-borderLight bg-white p-5 md:col-span-2">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-navy">Inquiry terbaru</p>
          <p className="mt-2 text-sm text-slateText">Menampilkan maksimal 25 lead terbaru dari storage Google Sheets.</p>
        </div>
        <span className="rounded-full border border-borderLight bg-background px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slateText">
          {inquiries.length} lead
        </span>
      </div>
      {error ? <p className="mt-5 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">{error}</p> : null}
      <div className="mt-5 grid gap-3">
        {inquiries.length > 0 ? inquiries.map((item) => <InquiryCard key={`${item.submittedAt}-${item.name}`} inquiry={item} />) : null}
        {!error && inquiries.length === 0 ? <p className="rounded-2xl bg-background px-4 py-3 text-sm text-slateText">Belum ada inquiry tersimpan.</p> : null}
      </div>
    </div>
  );
}

function InquiryCard({ inquiry }: { inquiry: StoredInquiry }) {
  const statuses = ["New", "Contacted", "Quoted", "Won", "Lost"];

  return (
    <article className="rounded-2xl border border-borderLight bg-background p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-navy">{inquiry.name}</p>
          <p className="mt-1 text-sm text-slateText">{inquiry.business} - {inquiry.project}</p>
        </div>
        <span className="w-fit rounded-full bg-gold/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">{inquiry.status}</span>
      </div>
      <p className="mt-3 text-sm leading-7 text-slateText">{inquiry.message}</p>
      <div className="mt-4 grid gap-2 text-xs font-semibold text-slateText sm:grid-cols-3">
        <span>Budget: {inquiry.budget}</span>
        <span>Deadline: {inquiry.deadline}</span>
        <span>{inquiry.submittedAt}</span>
      </div>
      <form action="/api/admin/inquiries/status" method="post" className="mt-4 grid gap-3 rounded-2xl border border-borderLight bg-white p-3 md:grid-cols-[180px_1fr_auto] md:items-end">
        <input type="hidden" name="rowNumber" value={inquiry.rowNumber} />
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slateText">
          Status
          <select name="status" defaultValue={inquiry.status} className="min-h-11 rounded-xl border border-borderLight bg-background px-3 text-sm font-semibold normal-case tracking-normal text-navy outline-none focus:border-gold">
            {statuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slateText">
          Notes
          <input name="notes" defaultValue={inquiry.notes} className="min-h-11 rounded-xl border border-borderLight bg-background px-3 text-sm font-medium normal-case tracking-normal text-navy outline-none focus:border-gold" placeholder="Catatan follow-up" />
        </label>
        <button className="min-h-11 rounded-xl bg-navy px-4 text-sm font-bold text-white transition hover:bg-midnight">
          Update
        </button>
      </form>
    </article>
  );
}
