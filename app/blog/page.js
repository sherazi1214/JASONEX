import Link from "next/link";
import { Star, Calendar, Tag } from "lucide-react";
import Reveal from "./components/Reveal";
import { posts } from "./postsData";

export default function BlogPage() {
  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      <Reveal className="mb-14 text-center">
        <p className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          BLOG
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
          Latest Articles &amp; Insights
        </h1>
      </Reveal>

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative rounded-2xl overflow-hidden h-64 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {post.featured && (
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                      <Star size={11} fill="currentColor" /> FEATURED
                    </span>
                  )}
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    <Calendar size={11} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                    <Tag size={11} /> {post.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <h3 className="text-white font-semibold leading-snug group-hover:text-orange-500 transition-colors">
                {post.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}