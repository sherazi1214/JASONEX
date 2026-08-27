"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactFooter() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const menu = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/reviews", label: "Review" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/services/digital-marketing", label: "SEO" },
    { href: "/services/digital-marketing", label: "Content Marketing" },
    { href: "/services/website-development", label: "Website Design" },
    { href: "/services/digital-marketing", label: "Social Media Marketing" },
  ];

  const socialLinks = [
    { name: "facebook", href: "https://www.facebook.com/share/19HbBNGcGv/" },
    {
      name: "twitter",
      href: "https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website!",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/shareArticle?mini=true&url=https://www.jasonextechnologies.com&title=Jasonex%20Technologies&summary=Building%20smarter%20digital%20experiences%20for%20growing%20businesses.",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/jasonextechnologies?igsh=bTRqZXlmODR1YXZr",
    },
  ];

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      {!isContactPage && (
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <h2 className="text-6xl font-display font-bold leading-tight">
            <span className="text-white">Let's</span>
            <br />
            <span className="text-orange-500">Talk!</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-panel rounded-xl p-6 flex flex-col gap-4"
          >
            <div>
              <label className="text-gray-400 text-xs mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black/30 text-white text-sm rounded-lg px-4 py-3 outline-none placeholder-gray-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-black/30 text-white text-sm rounded-lg px-4 py-3 outline-none placeholder-gray-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1 block">Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-black/30 text-white text-sm rounded-lg px-4 py-3 outline-none placeholder-gray-500 focus:ring-1 focus:ring-orange-500 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold rounded-lg py-3 mt-2 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-sm text-center">
                Your message has been sent!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong, please try again.
              </p>
            )}
          </form>
        </div>
      )}

      <div className="bg-panel rounded-xl p-8 grid md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Jasonex Technologies logo"
              className="h-70 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-500 text-xs leading-relaxed">
            Building smarter digital experiences for growing businesses.
          </p>
        </div>

        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-3">Menu</h4>
          <ul className="flex flex-col gap-2">
            {menu.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-orange-500 font-semibold text-sm mb-3">Services</h4>
          <ul className="flex flex-col gap-2">
            {services.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <Mail size={16} className="text-orange-500" />
            <span className="text-gray-300 text-sm">zeeseo12@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <Phone size={16} className="text-orange-500" />
            <span className="text-gray-300 text-sm">+923360881094</span>
          </div>
          <div className="flex items-center gap-3 bg-black/30 rounded-lg px-4 py-3">
            <MapPin size={16} className="text-orange-500" />
            <span className="text-gray-300 text-sm">
              I-8 Markaz, Islamabad, Pakistan
            </span>
          </div>
        </div>
      </div>

       <div className="flex gap-3 mt-6">
        {socialLinks.map((item) => {
          const Icon = socialIcons[item.name];
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-black/30 hover:bg-orange-500 rounded-full text-gray-300 hover:text-white transition-colors"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </section>
  );
}