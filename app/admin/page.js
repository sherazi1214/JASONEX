import { redirect } from "next/navigation";
import { getAdmin } from "../../lib/auth";
import { readCollection } from "../../lib/store";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");

  const [team, posts, snaps, founder, portfolio] = await Promise.all([
    readCollection("team"),
    readCollection("posts"),
    readCollection("snaps"),
    readCollection("founder"),
    readCollection("portfolio"),
  ]);

  return <AdminDashboard email={admin.email} initial={{ team, posts, snaps, founder, portfolio: portfolio.slice(0, 1) }} />;
}
