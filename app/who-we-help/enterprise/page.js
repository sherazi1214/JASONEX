import Link from "next/link";
import { Building2, ShieldCheck, LineChart, CheckCircle2 } from "lucide-react";
import AudienceHero from "../components/AudienceHero";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Enterprise Marketing | JASONEX Technologies",
  description: "JASONEX helps enterprise teams scale marketing operations with structure and measurable ROI.",
};

export default function EnterprisePage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <AudienceHero
        tag="Enterprise"
        titleLine1="Marketing That Scales"
        titleLine2="With Your Organization."
        description="We help enterprise teams bring structure to complex marketing operations — clear reporting, cross-channel coordination, and measurable ROI at scale."
      />

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Cross-Team Alignment",
              desc: "We work within your existing structure — marketing, sales, and leadership all seeing the same numbers.",
            },
            {
              icon: ShieldCheck,
              title: "Governance & Compliance",
              desc: "Campaigns built to meet your brand, legal, and data compliance requirements from day one.",
            },
            {
              icon: LineChart,
              title: "Enterprise Reporting",
              desc: "Dashboards and attribution models built for how large organizations actually make decisions.",
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
            "They fit into our existing process without friction and gave
            leadership the reporting clarity we'd been missing for years."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, VP of Marketing</p>
        </FadeIn>
      </section>

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Built For Enterprise Scale
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Dedicated account team, not a rotating point of contact",
              "Custom reporting built for stakeholder review",
              "Structured onboarding around existing workflows",
              "Data privacy and compliance built into every process",
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
            Ready To Scale With Confidence?
          </h2>
          <p className="text-white/60 mb-8">
            Let's talk about how we fit into your marketing operation.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}