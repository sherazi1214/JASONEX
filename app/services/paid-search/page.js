import Link from "next/link";
import { CheckCircle2, TrendingUp, Target, Compass, ArrowRight } from "lucide-react";
import Hero from "./components/Hero";

export const metadata = {
  title: "Paid Search / PPC Management | JASONEX Technologies",
  description:
    "Stop wasting ad spend. JASONEX runs PPC campaigns focused on real ROI — not just clicks.",
};

export default function PaidSearchPage() {
  return (
    <main className="bg-ink text-white">
      <Hero />

      {/* What you get */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">
            What You Get With Our Free Audit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Get The Facts",
                desc: "We dig into your account, targeting, and bidding strategy to find exactly where budget is being wasted.",
              },
              {
                title: "Get A Real Strategy",
                desc: "You'll walk away with a plan built around efficiency and profitability — not just more spend.",
              },
              {
                title: "Get A Clear Next Step",
                desc: "Whether you work with us or not, you'll have a roadmap that puts more of your budget to work.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <span className="text-sun font-display text-3xl font-bold">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-display text-white/90 leading-relaxed">
            "We cut our PPC budget and started generating more qualified leads than ever.
            They keep refining the process — they're never satisfied with yesterday's results."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, Business Owner</p>
        </div>
      </section>

      {/* 3 pillars: Execution / Strategy / Vision */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Execution",
              desc: "Most accounts don't have an execution problem — they have a wasted spend problem. High CPC, weak targeting, and leaking campaigns. We fix what's broken.",
            },
            {
              icon: TrendingUp,
              title: "Strategy",
              desc: "We don't chase traffic, we chase results — customer acquisition cost, lifetime value, and real ROAS. So you're scaling, not just spending.",
            },
            {
              icon: Compass,
              title: "Vision",
              desc: "Without clear direction, PPC is just hoping for a miracle. We align every campaign with where your business is actually headed.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                <item.icon className="text-sun" size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we can help */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">
            How We Can Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Do It Yourself",
                desc: "Get a free PPC audit and see exactly where your ad spend is being wasted — no strings attached.",
                cta: "Get Your Audit",
              },
              {
                title: "Do It With Us",
                desc: "We'll train your team with proven playbooks so they can optimize campaigns and scale spend on their own.",
                cta: "Learn More",
              },
              {
                title: "Done For You",
                desc: "Hand us your PPC management. We optimize, scale, and drive the ROI you've been chasing.",
                cta: "Book A Call",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="text-sun text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {item.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters / trust points */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            The PPC Agency That Gets You
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Most shoppers are ready to buy the moment they click an ad. We make sure every
            click actually earns its keep — turning clicks into real revenue, not just traffic.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Full conversion tracking set up from day one",
              "Campaign structure built around your actual goals",
              "Transparent reporting — no vanity metrics",
              "Continuous testing and optimization",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/70 text-sm">
                <CheckCircle2 size={18} className="text-sun mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Get Your Free Ad Waste Audit
          </h2>
          <p className="text-white/60 mb-8">
            No strings attached — just a clear picture of where your budget is leaking
            and how to fix it.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}