import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Super Admin Dashboard",
};

export default async function AdminDashboard() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/mail/login");

  const { data: isAdmin, error: adminError } =
    await supabase.rpc("is_super_admin");

  if (adminError || !isAdmin) redirect("/app");

  const results = await Promise.all([
    supabase.from("departments").select("*", { count: "exact", head: true }),
    supabase.from("department_roles").select("*", { count: "exact", head: true }),
    supabase.from("member_records").select("*", { count: "exact", head: true }),
    supabase.from("jobs").select("*", { count: "exact", head: true }),
    supabase.from("job_applications").select("*", { count: "exact", head: true }),
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("tasks").select("*", { count: "exact", head: true }),
    supabase.from("announcements").select("*", { count: "exact", head: true }),
    supabase.from("message_reports").select("*", { count: "exact", head: true }),
  ]);

  const sections = [
    { title: "Departments", count: results[0].count },
    { title: "Department Roles", count: results[1].count },
    { title: "Member Records", count: results[2].count },
    { title: "Jobs & Opportunities", count: results[3].count },
    { title: "Job Applications", count: results[4].count },
    { title: "Projects", count: results[5].count },
    { title: "Tasks", count: results[6].count },
    { title: "Announcements", count: results[7].count },
    { title: "Reported Messages", count: results[8].count },
  ];

  return (
    <main className="admin-shell">
      <div className="admin-container">
        <header className="admin-heading">
          <span className="admin-kicker">BISMILLAH NETWORK</span>
          <h1>Super Admin <span>Dashboard</span></h1>
          <p>Central administration and management system</p>
        </header>

        <section className="admin-welcome">
          <div>
            <h2>Welcome, Super Admin</h2>
            <p>{user.email}</p>
          </div>
          <span className="admin-status">SECURE ACCESS</span>
        </section>

        <h2 className="admin-section-title">System Overview</h2>

        <section className="admin-grid">
          {sections.map((item) => (
            <article className="admin-card" key={item.title}>
              <span>{item.title}</span>
              <strong>{item.count ?? 0}</strong>
              <small>Database records</small>
            </article>
          ))}
        </section>

        <section className="admin-products">
          <h2>Connected Products</h2>
          <div className="admin-product">
            <div>
              <h3>BISMILLAH NETWORK</h3>
              <p>Members, departments, jobs and projects</p>
            </div>
            <span>Central system</span>
          </div>
          <div className="admin-product">
            <div>
              <h3>BISMILLAH MAIL</h3>
              <p>Reported messages and abuse complaints only</p>
            </div>
            <a href="/mail">Open Mail</a>
          </div>
        </section>

        <p className="admin-note">
          Management actions and detailed control screens will be added
          after the central dashboard foundation is verified.
        </p>
      </div>
    </main>
  );
}
