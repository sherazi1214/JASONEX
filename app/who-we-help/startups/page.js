import Link from "next/link";
import { Rocket, DollarSign, Target, CheckCircle2 } from "lucide-react";
import AudienceHero from "../components/AudienceHero";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Startup Marketing | JASONEX Technologies",
  description: "JASONEX helps startups find their first repeatable growth channel without burning runway.",
};

export default function StartupsPage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <AudienceHero
        tag="Startups"
        titleLine1="Find Growth"
        titleLine2="Without Burning Runway."
        description="We help early-stage startups find their first repeatable acquisition channel — lean, tested, and built to scale once you've proven what works."
      />

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Fast Testing",
              desc: "Small, structured experiments across channels to find what actually works for your product.",
            },
            {
              icon: DollarSign,
              title: "Lean Budgets",
              desc: "Campaigns built to prove a channel works before you commit serious spend to it.",
            },
            {
              icon: Target,
              title: "Positioning",
              desc: "Messaging that's sharp enough to matter in a crowded market, not generic startup-speak.",
            },
          ].map((item) => (
            <FadeIn key={item.title}>
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

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-display text-white/90 leading-relaxed">
            "They helped us find our first real growth channel in weeks, not
            months — exactly what we needed at our stage."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, Startup Founder</p>
        </FadeIn>
      </section>

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Built For Early-Stage Growth
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Structured channel testing, not scattered spend",
              "Messaging built around real customer pain points",
              "Lean reporting focused on what to do next",
              "Flexible engagement as you find product-market fit",
            ].map((point) => (
              <FadeIn key={point}>
                <li className="flex items-start gap-3 text-white/70 text-sm">
                  <CheckCircle2 size={18} className="text-sun mt-0.5 shrink-0" />
                  {point}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 border-t border-white/10">
        <FadeIn className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready To Find Your Growth Channel?
          </h2>
          <p className="text-white/60 mb-8">
            Let's talk about where to test first.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}