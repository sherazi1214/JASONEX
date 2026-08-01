import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CaseStudyLayout({ project }) {
  return (
    <main className="bg-ink text-white px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium mb-8"
        >
          <ArrowLeft size={16} /> Back to all work
        </Link>

        <span className="text-indigo-400 text-sm font-semibold">
          {project.category}
        </span>
        <h1 className="text-4xl font-display mt-2 mb-3">{project.title}</h1>
        <p className="text-xl text-emerald-400 font-semibold mb-8">
          {project.headlineResult}
        </p>

        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-10 border border-white/10">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        {project.stats?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Challenge</h2>
          <p className="text-white/60 leading-relaxed">{project.challenge}</p>
        </section>

        {project.whatWeDid?.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">What We Did</h2>
            <ul className="space-y-3">
              {project.whatWeDid.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60">
                  <CheckCircle2 size={20} className="text-indigo-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Result</h2>
          <p className="text-white/60 leading-relaxed">{project.result}</p>
        </section>

        {project.quote && (
          <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-white/70 mb-12">
            "{project.quote}"
          </blockquote>
        )}

        <div className="bg-indigo-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Want results like this?</h3>
          <p className="text-indigo-100 mb-5">Let's talk about your project.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}