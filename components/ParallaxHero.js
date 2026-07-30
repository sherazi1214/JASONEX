"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image rises up as the user scrolls past the hero, like it's floating in
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pb-0 pt-16 text-center"
      style={{
        background:
          "radial-gradient(120% 60% at 50% 100%, #7a3413 0%, #3a1706 32%, #000000 68%), #000000",
      }}
    >
      {/* faint arch texture, like the reference site */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-40"
        style={{
          backgroundImage: "url(/arch-pattern.svg)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "440px 420px",
        }}
      />

      <div className="section relative pb-0">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          The Best <span className="highlight-mark">Software </span> /
          <br />
          <span className="highlight-mark">Marketing</span>  Agency.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-white/60">
          We believe in combining innovative design, sustainable practices, and
          exceptional craftsmanship to bring your vision to life.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="btn-orange">
            Get Started <ArrowUpRight size={18} />
          </Link>
          <Link href="/services" className="btn-dark">
            Our Services
          </Link>
        </div>
      </div>

      {/* hero figure — masked so it fades into the background with no visible edges */}
      <motion.div
        style={{ y, scale }}
        className="relative mx-auto mt-14 h-[300px] w-full max-w-4xl sm:h-[400px] md:h-[520px]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1400&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            WebkitMaskImage:
              "radial-gradient(58% 92% at 50% 22%, black 55%, transparent 100%)",
            maskImage:
              "radial-gradient(58% 92% at 50% 22%, black 55%, transparent 100%)",
          }}
        />

        {/* rating badge overlapping the image, like the reference */}
        <div className="absolute bottom-6 left-2 hidden max-w-[230px] rounded-2xl border border-white/10 bg-black/70 p-4 text-left backdrop-blur-md sm:block sm:left-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
            #1 Digital Marketing Agency
          </p>
          <div className="flex items-center gap-2">
            <span className="flex text-sun">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-xs text-white/60">200+ 5 Star Reviews</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
