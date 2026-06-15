import { cookies } from "next/headers";
import { createHash } from "node:crypto";

const adminCookieName = "aeternum_admin";

function getSessionValue() {
  return createHash("sha256").update(process.env.ADMIN_PASSWORD || "").digest("hex");
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function isValidAdminPassword(password: string) {
  return Boolean(process.env.ADMIN_PASSWORD) && password === process.env.ADMIN_PASSWORD;
}

export async function isAdminAuthenticated() {
  if (!isAdminConfigured()) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(adminCookieName)?.value === getSessionValue();
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(adminCookieName, getSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 8,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(adminCookieName);
}
