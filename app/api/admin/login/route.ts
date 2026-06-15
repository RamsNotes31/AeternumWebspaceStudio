import { NextResponse } from "next/server";
import { isAdminConfigured, isValidAdminPassword, setAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "Admin belum dikonfigurasi." }, { status: 503 });
  }

  const formData = await request.formData();
  const password = String(formData.get("password") || "");

  if (!isValidAdminPassword(password)) {
    return NextResponse.json({ error: "Password admin tidak valid." }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.redirect(new URL("/admin", request.url), { status: 303 });
}
