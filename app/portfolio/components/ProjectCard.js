import Image from "next/image";
import { FileText } from "lucide-react";

// Card pe click karte hi PDF naye tab me khulti hai (koi extra page nahi).
export default function ProjectCard({ project }) {
  return (
    <a
      href={project.pdf}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} PDF`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500/40 transition"
    >
      <div className="relative h-56 w-full overflow-hidden bg-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <span className="w-fit text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400">
          {project.category}
        </span>

        <h3 className="text-xl font-semibold text-white leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-white/50 leading-relaxed">{project.shortDesc}</p>

        <div className="flex gap-8 mt-3">
          {project.cardStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
              <p className="text-xs text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:text-orange-300">
          <FileText size={16} /> View PDF
        </span>
      </div>
    </a>
  );
}
