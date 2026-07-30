"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import VideoCard from "./VideoCard";
import { videoReviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 text-center"
      >
        <p className="eyebrow mb-3">Testimonials</p>
        <h2 className="mx-auto max-w-xl font-display text-3xl font-bold sm:text-4xl">
          Hear it straight from our clients.
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {videoReviews.slice(0, 2).map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <VideoCard video={video} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <Link href="/reviews" className="btn-dark">
          View All Reviews <ArrowUpRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
