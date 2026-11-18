"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function verifyAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/mail/login");

  const { data, error } = await supabase.rpc("is_super_admin");

  if (error || data !== true) redirect("/app");

  return supabase;
}

export async function createDepartment(formData: FormData) {
  const supabase = await verifyAdmin();

  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!name || name.length > 100 || description.length > 1000) {
    redirect("/admin/departments?result=invalid");
  }

  const { error } = await supabase.from("departments").insert({
    name,
    description,
  });

  revalidatePath("/admin/departments");
  revalidatePath("/admin");

  redirect(error
    ? "/admin/departments?result=error"
    : "/admin/departments?result=created");
}

export async function updateDepartment(formData: FormData) {
  const supabase = await verifyAdmin();

  const id = String(formData.get("id") || "");
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const is_active = formData.get("is_active") === "on";

  if (
    !/^[0-9a-f-]{36}$/i.test(id) ||
    !name ||
    name.length > 100 ||
    description.length > 1000
  ) {
    redirect("/admin/departments?result=invalid");
  }

  const { error } = await supabase
    .from("departments")
    .update({ name, description, is_active })
    .eq("id", id);

  revalidatePath("/admin/departments");
  revalidatePath("/admin");

  redirect(error
    ? "/admin/departments?result=error"
    : "/admin/departments?result=updated");
}

export async function deleteDepartment(formData: FormData) {
  const supabase = await verifyAdmin();

  const id = String(formData.get("id") || "");

  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    redirect("/admin/departments?result=invalid");
  }

  const { error } = await supabase
    .from("departments")
    .delete()
    .eq("id", id);

  revalidatePath("/admin/departments");
  revalidatePath("/admin");

  redirect(error
    ? "/admin/departments?result=error"
    : "/admin/departments?result=deleted");
}
