"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        ref={ref}
        className={`grid md:grid-cols-[1.5fr_4fr] gap-6 items-stretch mb-6 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* Left: image (smaller column) */}
        <div className="relative rounded-2xl overflow-hidden bg-panel h-72 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark overlay + View circle on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-orange-500 text-white text-sm font-semibold flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out">
              View
            </span>
          </div>
        </div>

        {/* Right: text + stats (bigger column) */}
        <div className="bg-panel rounded-2xl p-8 flex flex-col justify-between h-72 md:h-80">
          <div>
            <span className="inline-block bg-black/30 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              CASE STUDY
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              {project.subtitle}
            </p>
          </div>

          <div className="flex gap-12 mt-6">
            {project.stats.map((s, i) => (
              <div key={i}>
                <p className="text-orange-500 text-4xl md:text-5xl font-bold leading-none mb-2">
                  {s.value}
                </p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}