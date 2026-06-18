"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { createStoredBlog, deleteStoredBlog, updateStoredBlog } from "@/lib/blogs";

export async function createBlogAction(formData: FormData) {
  await requireAdmin();
  await createStoredBlog(formData);
  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect("/admin#blog-manager");
}

export async function updateBlogAction(formData: FormData) {
  await requireAdmin();
  await updateStoredBlog(formData);
  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect("/admin#blog-manager");
}

export async function deleteBlogAction(formData: FormData) {
  await requireAdmin();
  await deleteStoredBlog(formData);
  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect("/admin#blog-manager");
}

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized");
  }
}
