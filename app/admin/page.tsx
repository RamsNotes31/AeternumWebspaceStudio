import type { Metadata } from "next";
import { CheckCircle2, Lock, LogOut, ShieldCheck, Webhook } from "lucide-react";
import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";

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

function AdminStatusPanel() {
  const hasWebhook = Boolean(process.env.INQUIRY_WEBHOOK_URL);
  const items = [
    ["Inquiry API", "Aktif", true],
    ["WhatsApp Redirect", "Aktif", true],
    ["Webhook Storage", hasWebhook ? "Tersambung" : "Belum diset", hasWebhook],
    ["Persistent Database", "Belum disambungkan", false],
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
          Sambungkan storage permanen untuk menyimpan inquiry, lalu dashboard ini bisa menampilkan daftar lead, status follow-up, source, dan export data.
        </p>
      </div>
    </div>
  );
}
