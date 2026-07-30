"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { works } from "@/lib/data";

function WorkCard({ item, i }) {
  return (
    <Reveal delay={i * 0.08}>
      <motion.div
        whileHover={{ y: -8, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="group overflow-hidden rounded-3xl border border-white/10 bg-panel"
      >
        <div className="relative h-52 w-full overflow-hidden sm:h-64">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className="p-7">
          <span className="mb-3 inline-block rounded-full bg-sun/10 px-3 py-1 text-xs font-semibold text-sun">
            Case Study
          </span>
          <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
          <p className="mb-5 text-sm text-white/55">{item.summary}</p>
          <div className="flex gap-8">
            {item.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-sun">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Works() {
  return (
    <section className="section" id="works">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Works</p>
          <h2 className="max-w-xl font-display text-3xl font-bold sm:text-4xl">
            Case Studies that speak for themselves.
          </h2>
        </div>
        <a href="#reviews" className="btn-dark">
          See Results <ArrowUpRight size={18} />
        </a>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {works.map((item, i) => (
          <WorkCard key={item.slug} item={item} i={i} />
        ))}
      </div>
    </section>
  );
}
