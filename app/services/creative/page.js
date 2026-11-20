"use client";

import Link from "next/link";
import {
  Palette,
  Layers,
  Clapperboard,
  PenTool,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import FadeIn from "./components/FadeIn";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logos, color systems, and typography built to feel consistent everywhere your brand shows up.",
  },
  {
    icon: Layers,
    title: "Web & App Design",
    desc: "Interfaces that look sharp and actually convert — not just pretty mockups.",
  },
  {
    icon: Clapperboard,
    title: "Motion & Video",
    desc: "Short-form and ad creative built to stop the scroll on social and beyond.",
  },
  {
    icon: PenTool,
    title: "Ad Creative",
    desc: "Static and video ad sets designed around what actually performs, not just what looks nice.",
  },
];

export default function CreativePage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <Hero />

      {/* Services grid with hover-tilt cards */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              What We Create
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                    <item.icon className="text-sun" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-14 text-center">
              How We Work
            </h2>
          </FadeIn>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10 sm:left-1/2" />

            {[
              {
                step: "01",
                title: "Discover",
                desc: "We learn your brand, audience, and goals before touching a single pixel.",
              },
              {
                step: "02",
                title: "Concept",
                desc: "We explore directions and present clear options — no guessing what you'll get.",
              },
              {
                step: "03",
                title: "Design",
                desc: "We build out the full system — visuals, motion, and assets, ready to use.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "You get organized, production-ready files and ongoing support if you need it.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 mb-10 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-10 sm:ml-0" : "sm:pl-10 sm:ml-auto"
                  }`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 border border-sun/30 text-sun text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-display text-white/90 leading-relaxed">
            "Our new brand identity finally feels like us. Customers comment on
            it constantly — it's the first thing people notice now."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, Founder</p>
        </FadeIn>
      </section>

      {/* How we can help */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              How We Can Help
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "One-Off Project",
                desc: "Need a logo, a landing page, or a single campaign? We scope it, price it, and deliver it.",
                cta: "Get a Quote",
              },
              {
                title: "Brand Sprint",
                desc: "A focused 2-3 week engagement to build your full brand identity from scratch.",
                cta: "Learn More",
              },
              {
                title: "Ongoing Creative",
                desc: "Monthly creative support for ads, content, and design — like having an in-house team.",
                cta: "Book A Call",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-sun text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {item.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              The Creative Team That Gets You
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Great design isn't just about looking good — it's about being
              remembered for the right reasons, by the right people.
            </p>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Every project starts with strategy, not just style",
              "Unlimited revisions within scope, no nickel-and-diming",
              "Production-ready files, organized and handed off cleanly",
              "Design built to perform, not just win awards",
            ].map((point, i) => (
              <FadeIn key={point} delay={i * 0.05}>
                <li className="flex items-start gap-3 text-white/70 text-sm">
                  <CheckCircle2 size={18} className="text-sun mt-0.5 shrink-0" />
                  {point}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-20 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Let's Build Something People Remember
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your project — we'll get back to you with next steps
            within a day.
          </p>
          <Link href="/contact" className="btn-orange">
            Start a Project
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}