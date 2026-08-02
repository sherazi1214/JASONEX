"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const floatingWords = ["Design", "Motion", "Brand", "Story", "Identity"];

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 pt-24 pb-20 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Glow background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-500 blur-[140px] pointer-events-none"
      />

      {/* Floating word chips */}
      <div className="relative flex flex-wrap justify-center gap-2 mb-6">
        {floatingWords.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50"
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-4xl sm:text-6xl font-display font-extrabold leading-tight"
      >
        Brands People<br />
        <span className="text-sun">Actually Remember.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative text-white/60 text-lg mt-6 max-w-2xl mx-auto"
      >
        Good design isn't decoration — it's how people decide to trust you in
        the first three seconds. We build identities, visuals, and campaigns
        that make that first impression count.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex flex-wrap justify-center gap-4 mt-8"
      >
        <Link href="/contact" className="btn-orange">
          Start a Project
        </Link>
        <Link
          href="/projects"
          className="rounded-full px-6 py-3 border border-white/20 text-white/80 hover:border-sun hover:text-sun transition"
        >
          See Our Work
        </Link>
      </motion.div>
    </section>
  );
}