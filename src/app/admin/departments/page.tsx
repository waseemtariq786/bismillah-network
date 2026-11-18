import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "./actions";

export const metadata = {
  title: "Departments Management",
};

export default async function DepartmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ result?: string }>;
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/mail/login");

  const { data: isAdmin, error: adminError } =
    await supabase.rpc("is_super_admin");

  if (adminError || isAdmin !== true) redirect("/app");

  const { data: departments, error } = await supabase
    .from("departments")
    .select("id, name, description, is_active, created_at")
    .order("created_at", { ascending: false });

  const { result } = await searchParams;

  const messages: Record<string, string> = {
    created: "Department successfully created.",
    updated: "Department successfully updated.",
    deleted: "Department successfully deleted.",
    invalid: "Please check the information and try again.",
    error: "Operation failed. Check duplicate names or existing role assignments.",
  };

  return (
    <main className="admin-shell">
      <div className="admin-container">
        <p className="admin-kicker">CENTRAL ADMINISTRATION</p>
        <h1>Departments <span>Management</span></h1>
        <p className="admin-note">
          Create and manage BISMILLAH NETWORK departments.
        </p>

        <p style={{ margin: "20px 0" }}>
          <Link href="/admin" className="admin-back-link">
            ← Back to Dashboard
          </Link>
        </p>

        {result && messages[result] && (
          <p className="admin-feedback" role="status">
            {messages[result]}
          </p>
        )}

        {error && (
          <p className="admin-feedback" role="alert">
            Departments could not be loaded. Please try again.
          </p>
        )}

        <section className="admin-management-panel">
          <h2>Add New Department</h2>
          <form action={createDepartment} className="admin-form">
            <label htmlFor="new-department-name">Department name</label>
            <input
              id="new-department-name"
              name="name"
              required
              maxLength={100}
              placeholder="e.g. Electrical & Maintenance"
            />

            <label htmlFor="new-department-description">Description</label>
            <textarea
              id="new-department-description"
              name="description"
              maxLength={1000}
              rows={3}
              placeholder="Department responsibilities..."
            />

            <button type="submit" className="admin-action-button">
              Create Department
            </button>
          </form>
        </section>

        <h2 className="admin-section-title">
          Existing Departments ({departments?.length ?? 0})
        </h2>

        {!error && (!departments || departments.length === 0) && (
          <p className="admin-empty">No departments created yet.</p>
        )}

        <div className="admin-department-list">
          {departments?.map((department) => (
            <section className="admin-management-panel" key={department.id}>
              <form action={updateDepartment} className="admin-form">
                <input type="hidden" name="id" value={department.id} />

                <label>Department name</label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  defaultValue={department.name}
                />

                <label>Description</label>
                <textarea
                  name="description"
                  maxLength={1000}
                  rows={3}
                  defaultValue={department.description}
                />

                <label className="admin-checkbox">
                  <input
                    type="checkbox"
                    name="is_active"
                    defaultChecked={department.is_active}
                  />
                  Active department
                </label>

                <button type="submit" className="admin-action-button">
                  Save Changes
                </button>
              </form>

              <form action={deleteDepartment} className="admin-delete-form">
                <input type="hidden" name="id" value={department.id} />
                <button type="submit" className="admin-delete-button">
                  Delete Department
                </button>
                <small>
                  Deletion may be blocked if department roles still exist.
                </small>
              </form>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
