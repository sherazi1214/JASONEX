import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// Home page ka blog section: latest 3 posts, "Read More" par asli blog page khulta hai.
export default function Blog({ posts = [] }) {
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
        {posts.map((post, i) => (
          <Reveal
            key={post.slug}
            delay={i * 0.08}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-panel"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full overflow-hidden bg-white/5">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="mb-3 flex gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1">{post.date}</span>
                  <span className="rounded-full bg-sun/10 px-3 py-1 text-sun">{post.category}</span>
                </div>

                <h3 className="mb-4 font-display text-base font-semibold leading-snug">
                  {post.title}
                </h3>

                <span className="flex items-center gap-1 text-sm font-medium text-sun group-hover:underline">
                  Read More <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
