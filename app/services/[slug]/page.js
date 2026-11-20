import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { services } from "@/lib/data";

// Slugs that already have their own dedicated page.js file
// (app/services/<slug>/page.js). Keeping these in generateStaticParams
// here too causes a Next.js build conflict, since two routes would
// resolve to the exact same path. Add any new dedicated-page slug here.
const DEDICATED_SLUGS = [
  "ai-automation",
  "website-development",
  "app-development",
  "digital-marketing",
];

const dynamicServices = services.filter(
  (s) => !DEDICATED_SLUGS.includes(s.slug)
);

export async function generateStaticParams() {
  return dynamicServices.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = dynamicServices.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = dynamicServices.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  const Icon = Icons[service.icon] || Icons.Sparkles;

  return (
    <section className="section">
      <Link
        href="/services"
        className="mb-8 inline-flex items-center gap-1 text-sm text-white/60 hover:text-sun"
      >
        <ArrowLeft size={16} /> Back to Services
      </Link>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sun to-sun2 text-black">
        <Icon size={26} />
      </div>

      <h1 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
        {service.title}
      </h1>

      <p className="mb-8 max-w-2xl text-white/60">
        {service.description || service.short}
      </p>

      {service.points && service.points.length > 0 && (
        <ul className="mb-10 grid gap-3 sm:grid-cols-2">
          {service.points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-panel p-4 text-sm text-white/70"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-sun" />
              {point}
            </li>
          ))}
        </ul>
      )}

      <Link href="/contact" className="btn-orange">
        Get Started <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}