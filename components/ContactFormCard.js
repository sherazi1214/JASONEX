"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, MessageSquare, Send } from "lucide-react";

const fields = [
  { name: "name", label: "Full Name", type: "text", icon: User, placeholder: "Jane Smith", required: true },
  { name: "email", label: "Email", type: "email", icon: Mail, placeholder: "jane@email.com", required: true },
  { name: "phone", label: "Phone Number (WhatsApp)", type: "tel", icon: Phone, placeholder: "+92 300 1234567", required: true },
  { name: "company", label: "Company Name (optional)", type: "text", icon: Building2, placeholder: "Your company", required: false },
];

export default function ContactFormCard() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Phone (WhatsApp): ${form.phone}\nCompany: ${form.company || "N/A"}\n\n${form.message}`,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel p-8 shadow-[0_0_60px_-15px_rgba(249,115,22,0.25)]"
    >
      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-sun/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-sun/50 blur-3xl" />

      <form onSubmit={handleSubmit} className="relative space-y-5">
        {fields.map((field, i) => {
          const Icon = field.icon;
          return (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <label className="mb-1.5 flex items-center gap-2 text-xs font-medium text-white/50">
                <Icon size={14} className="text-sun" />
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-sun focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
              />
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: fields.length * 0.08 }}
        >
          <label className="mb-1.5 flex items-center gap-2 text-xs font-medium text-white/50">
            <MessageSquare size={14} className="text-sun" />
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us about your project"
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-sun focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-orange flex w-full items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === "sending" ? (
            "Sending..."
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </motion.button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-green-500"
          >
            Your message has been sent!
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-red-500"
          >
            Something went wrong, please try again.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}