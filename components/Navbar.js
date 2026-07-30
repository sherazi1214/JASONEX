"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/website-development", label: "Website Development" },
      { href: "/services/app-development", label: "App Development" },
      { href: "/services/digital-marketing", label: "Digital Marketing" },
      { href: "/services/branding", label: "Branding" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md sm:px-4">
        <Link href="/" className="flex items-center gap-1.5 pl-1 font-display text-base font-bold tracking-tight sm:gap-2 sm:pl-2 sm:text-lg">
          <span className="text-sun">JASON</span>EX
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-white/5 px-1 py-1 lg:flex">
          {links.map((link) =>
            link.submenu ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-sun"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-200 ease-out ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="w-56 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-md p-2 shadow-xl">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-sun"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-sun"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/contact" className="btn-orange hidden lg:inline-flex">
          Get In Touch
        </Link>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-black/95 p-3 sm:p-4 lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {links.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-sun"
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-4 flex flex-col gap-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="rounded-xl px-4 py-2.5 text-sm text-white/70 hover:bg-white/10 hover:text-sun"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-sun"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-orange mt-2 justify-center"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}