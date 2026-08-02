"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "3x", label: "Avg. organic lead growth" },
  { value: "90%", label: "Page 1 keyword coverage" },
  { value: "6mo", label: "Avg. time to first result" },
];

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 pt-24 pb-16 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Glow background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-500 blur-[140px] pointer-events-none"
      />

      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-sun text-sm font-semibold tracking-wide uppercase"
      >
        SEO
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-4xl sm:text-6xl font-display font-extrabold mt-4 leading-tight"
      >
        Rankings That<br />
        <span className="text-sun">Actually Convert.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative text-white/60 text-lg mt-6 max-w-2xl mx-auto"
      >
        Traffic without conversions is a vanity metric. We build SEO strategies
        around keywords that bring in customers — not just visitors.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex flex-wrap justify-center gap-4 mt-8"
      >
        <Link href="/contact" className="btn-orange">
          Get a Free SEO Audit
        </Link>
        <Link
          href="/projects"
          className="rounded-full px-6 py-3 border border-white/20 text-white/80 hover:border-sun hover:text-sun transition"
        >
          See Our Results
        </Link>
      </motion.div>

      {/* Stats row */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <p className="text-3xl font-display font-bold text-sun">{stat.value}</p>
            <p className="text-xs text-white/50 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}