export const metadata = {
  title: "Admin | JASONEX",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }) {
  return <div className="min-h-screen bg-ink text-white">{children}</div>;
}
