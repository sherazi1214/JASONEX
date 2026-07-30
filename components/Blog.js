"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section" id="blog">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Blog</p>
          <h2 className="max-w-xl font-display text-3xl font-bold sm:text-4xl">
            Dive into our collection of engaging blog posts.
          </h2>
        </div>
        <Link href="/blog" className="btn-orange">
          Read Blogs <ArrowUpRight size={18} />
        </Link>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => {
          const isOpen = openIndex === i;

          return (
            <Reveal
              key={post.slug ?? i}
              delay={i * 0.08}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-panel"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1">{post.date}</span>
                  <span className="rounded-full bg-sun/10 px-3 py-1 text-sun">{post.tag}</span>
                </div>

                <h3 className="mb-4 font-display text-base font-semibold leading-snug">
                  {post.title}
                </h3>

                {/* Expandable content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mb-4 whitespace-pre-line text-sm text-white/60">
                      {post.content || "Full blog content coming soon."}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggle(i)}
                  className="flex items-center gap-1 text-sm font-medium text-sun hover:underline"
                >
                  {isOpen ? "Show Less" : "Read More"}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}