"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

// /admin pages pe website ka navbar/footer nahi dikhta.
export default function SiteShell({ children }) {
  const pathname = usePathname() || "";
  if (pathname.startsWith("/admin")) return <main>{children}</main>;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
