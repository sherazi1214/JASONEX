import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Reveal from "../components/Reveal";
import { posts } from "../postsData";

// Sirf inhi slugs ke liye pages banao (build time pe)
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="bg-ink py-16 px-6 max-w-3xl mx-auto">
      {/* Back button */}
      <Reveal>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </Reveal>

      {/* Badges */}
      <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-4">
        <span className="flex items-center gap-1 bg-panel text-white text-xs font-semibold px-3 py-1 rounded-full">
          <Calendar size={12} /> {post.date}
        </span>
        <span className="flex items-center gap-1 bg-panel text-white text-xs font-semibold px-3 py-1 rounded-full">
          <Tag size={12} /> {post.category.toUpperCase()}
        </span>
      </Reveal>

      {/* Title */}
      <Reveal delay={0.15}>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug mb-8">
          {post.title}
        </h1>
      </Reveal>

      {/* Hero image */}
      <Reveal delay={0.2} className="rounded-2xl overflow-hidden mb-10 h-72 md:h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </Reveal>

      {/* Article content */}
      <div className="flex flex-col gap-6">
        {post.content.map((paragraph, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}>
            <p className="text-gray-300 text-base leading-relaxed">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Bottom back button */}
      <Reveal delay={0.3} className="mt-14">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-5 py-3 rounded-full"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </Reveal>
    </section>
  );
}