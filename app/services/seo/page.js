import Link from "next/link";
import {
  CheckCircle2,
  Search,
  FileText,
  Link2,
  ArrowRight,
} from "lucide-react";
import Hero from "./components/Hero";
import RankingChart from "./components/RankingChart";
import FadeIn from "./components/FadeIn";

export const metadata = {
  title: "SEO Services | JASONEX Technologies",
  description:
    "JASONEX builds SEO strategies focused on rankings that convert — not just traffic.",
};

export default function SeoPage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <Hero />

      {/* Ranking chart section */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-display font-bold mb-3">
            What Real SEO Growth Looks Like
          </h2>
          <p className="text-white/60">
            A typical organic traffic curve for a client after 6 months of
            focused SEO work.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <RankingChart />
        </FadeIn>
      </section>

      {/* What you get */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              What You Get With Our Free Audit
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Get The Facts",
                desc: "We audit your technical SEO, content, and backlink profile to find exactly what's holding rankings back.",
              },
              {
                title: "Get A Real Strategy",
                desc: "You'll walk away with a prioritized content and link-building plan built around keywords that convert.",
              },
              {
                title: "Get A Clear Next Step",
                desc: "Whether you work with us or not, you'll have a roadmap to climb rankings the right way.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                  <span className="text-sun font-display text-3xl font-bold">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-display text-white/90 leading-relaxed">
            "We went from page 3 to page 1 for our top keywords in under six
            months. Organic leads now outpace our paid channels."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, Architecture Firm</p>
        </FadeIn>
      </section>

      {/* 3 pillars: Technical / Content / Authority */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "Technical",
              desc: "Site speed, crawlability, and indexing issues quietly kill rankings. We fix the foundation first.",
            },
            {
              icon: FileText,
              title: "Content",
              desc: "We build content around real search intent — pages designed to rank and convert, not just fill a blog.",
            },
            {
              icon: Link2,
              title: "Authority",
              desc: "Rankings compound with trust. We build backlinks the right way — relevant, earned, and lasting.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                  <item.icon className="text-sun" size={22} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How we can help */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              How We Can Help
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Do It Yourself",
                desc: "Get a free SEO audit and see exactly what's blocking your rankings — no strings attached.",
                cta: "Get Your Audit",
              },
              {
                title: "Do It With Us",
                desc: "We'll train your team on technical SEO and content strategy so they can keep improving on their own.",
                cta: "Learn More",
              },
              {
                title: "Done For You",
                desc: "Hand us your SEO. We handle technical, content, and link building end to end.",
                cta: "Book A Call",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-sun text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {item.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              The SEO Agency That Gets You
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Rankings mean nothing without revenue behind them. Every keyword
              we target is chosen because it can actually bring you customers.
            </p>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Full technical SEO audit before any content work",
              "Keyword strategy built around buyer intent",
              "Transparent monthly reporting — real numbers",
              "White-hat link building, no shortcuts",
            ].map((point, i) => (
              <FadeIn key={point} delay={i * 0.05}>
                <li className="flex items-start gap-3 text-white/70 text-sm">
                  <CheckCircle2 size={18} className="text-sun mt-0.5 shrink-0" />
                  {point}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-20 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Get Your Free SEO Audit
          </h2>
          <p className="text-white/60 mb-8">
            No strings attached — just a clear picture of what's holding your
            rankings back and how to fix it.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}