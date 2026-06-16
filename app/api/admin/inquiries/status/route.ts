import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { updateStoredInquiry } from "@/lib/inquiries";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const rowNumber = String(formData.get("rowNumber") || "");
  const status = String(formData.get("status") || "New");
  const notes = String(formData.get("notes") || "");
  const result = await updateStoredInquiry(rowNumber, status, notes);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }

  return NextResponse.redirect(new URL("/admin", request.url), { status: 303 });
}
