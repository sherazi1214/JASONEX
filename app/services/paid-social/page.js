import Link from "next/link";
import { CheckCircle2, Sparkles, Users, LineChart, ArrowRight } from "lucide-react";
import Hero from "./components/Hero";

export const metadata = {
  title: "Paid Social Advertising | JASONEX Technologies",
  description:
    "JASONEX runs Meta, TikTok, and Instagram ad campaigns built on creative that stops the scroll and drives real ROI.",
};

export default function PaidSocialPage() {
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
                desc: "We review your creative, audiences, and placements to find exactly where engagement is dropping off.",
              },
              {
                title: "Get A Real Strategy",
                desc: "You'll walk away with a content and targeting plan built around scroll-stopping creative, not guesswork.",
              },
              {
                title: "Get A Clear Next Step",
                desc: "Whether you work with us or not, you'll have a roadmap to get more from every dollar of social spend.",
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
            "Our Meta ads finally feel like content people want to watch, not skip.
            Engagement and conversions both jumped within the first month."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, Ecommerce Founder</p>
        </div>
      </section>

      {/* 3 pillars: Creative / Audience / Performance */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "Creative",
              desc: "Most social ads fail because they look like ads. We build native, scroll-stopping creative that fits the feed it lives in.",
            },
            {
              icon: Users,
              title: "Audience",
              desc: "We layer first-party data, lookalikes, and interest targeting to reach people who actually convert — not just click.",
            },
            {
              icon: LineChart,
              title: "Performance",
              desc: "Every campaign is measured against ROAS and CPA, not vanity metrics like reach or likes.",
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
                desc: "Get a free social ads audit and see exactly where your creative or targeting is losing people — no strings attached.",
                cta: "Get Your Audit",
              },
              {
                title: "Do It With Us",
                desc: "We'll train your team on creative testing frameworks and audience strategy so they can run campaigns confidently.",
                cta: "Learn More",
              },
              {
                title: "Done For You",
                desc: "Hand us your Meta, TikTok, and Instagram ads. We create, launch, and optimize so you don't have to.",
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

      {/* Trust points */}
      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            The Paid Social Agency That Gets You
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Attention is the hardest thing to earn on social. We build creative that
            earns it — and campaigns that turn that attention into revenue.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Fresh creative tested weekly, not left to fatigue",
              "Full-funnel campaigns from awareness to retargeting",
              "Transparent reporting — no vanity metrics",
              "Platform-native content built for each channel",
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
            Get Your Free Social Ads Audit
          </h2>
          <p className="text-white/60 mb-8">
            No strings attached — just a clear picture of where your creative or
            targeting is losing people, and how to fix it.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}