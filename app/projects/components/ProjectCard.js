import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500/40 transition"
    >
      <div className="relative h-56 w-full overflow-hidden bg-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
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

        <p className="text-sm text-white/50 leading-relaxed">
          {project.shortDesc}
        </p>

        <div className="flex gap-8 mt-3">
          {project.cardStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
              <p className="text-xs text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}