"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AudienceHero({ tag, titleLine1, titleLine2, description }) {
  return (
    <section className="relative px-4 sm:px-6 pt-24 pb-16 max-w-5xl mx-auto text-center overflow-hidden">
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
        {tag}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-4xl sm:text-6xl font-display font-extrabold mt-4 leading-tight"
      >
        {titleLine1}
        <br />
        <span className="text-sun">{titleLine2}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative text-white/60 text-lg mt-6 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex flex-wrap justify-center gap-4 mt-8"
      >
        <Link href="/contact" className="btn-orange">
          Get In Touch
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