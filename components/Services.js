"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="section" id="services">
      <Reveal className="mb-12 text-center">
        <p className="eyebrow mb-3">What We Offer</p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Everything your brand needs to grow, in one place.
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = Icons[service.icon] || Icons.Sparkles;
          return (
            <Reveal key={service.slug} delay={i * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-panel p-7 transition hover:-translate-y-1 hover:border-sun/60 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sun to-sun2 text-black">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-white/55">{service.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-sun opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowUpRight size={15} />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Link href="/services" className="btn-orange">
          See All Services <ArrowUpRight size={18} />
        </Link>
      </Reveal>
    </section>
  );
}
