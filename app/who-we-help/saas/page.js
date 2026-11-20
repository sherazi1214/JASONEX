import Link from "next/link";
import { Zap, Users, BarChart3, CheckCircle2 } from "lucide-react";
import AudienceHero from "../components/AudienceHero";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "SaaS Marketing | JASONEX Technologies",
  description: "JASONEX helps SaaS companies lower CAC and drive qualified trial signups.",
};

export default function SaasPage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <AudienceHero
        tag="SaaS"
        titleLine1="Lower CAC."
        titleLine2="Higher Quality Signups."
        description="We help SaaS companies build acquisition channels that bring in users who actually convert to paying customers — not just trial signups that churn."
      />

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Demand Gen",
              desc: "Paid and organic campaigns built around your actual ICP, not broad top-of-funnel traffic.",
            },
            {
              icon: Users,
              title: "Trial-to-Paid",
              desc: "Onboarding and lifecycle flows designed to convert trials into paying subscribers.",
            },
            {
              icon: BarChart3,
              title: "CAC & LTV Tracking",
              desc: "Full-funnel attribution so you know exactly which channels are worth scaling.",
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
            "CAC dropped 40% once we stopped chasing volume and started
            targeting the right accounts."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, SaaS Founder</p>
        </FadeIn>
      </section>

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Built For SaaS Growth
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "ICP-focused targeting, not broad demand gen",
              "Conversion tracking across the full trial funnel",
              "Content built for high-intent search queries",
              "Clear CAC and payback period reporting",
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
            Ready To Lower Your CAC?
          </h2>
          <p className="text-white/60 mb-8">
            Let's find the channels that actually move your growth numbers.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}