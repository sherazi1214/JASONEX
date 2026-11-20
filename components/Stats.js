import Image from "next/image";
import { Rocket, Share2, UserCheck } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { stats } from "@/lib/data";

const perks = [
  {
    icon: Rocket,
    title: "Proven Track Record",
    text: "We have built a reputation as a trusted and reliable partner in achieving business success.",
  },
  {
    icon: Share2,
    title: "Tailored Solutions",
    text: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
  },
  {
    icon: UserCheck,
    title: "Client-Centric Focus",
    text: "Your success is our priority. We prioritize understanding your business inside and out.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#1a0f06] to-black py-24">
      <div className="section relative">
        <div className="relative mx-auto mb-16 flex max-w-4xl flex-wrap items-center justify-center gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="animate-floaty flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 text-center backdrop-blur-sm sm:h-36 sm:w-36"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <span className="font-display text-3xl font-bold sm:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-1 px-2 text-[11px] text-white/60">{s.label}</span>
            </div>
          ))}
        </div>

        <Reveal className="relative mx-auto mb-16 h-64 w-full max-w-xl overflow-hidden rounded-[2rem] sm:h-80">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Strategy session"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-sun/40 text-sun">
                <p.icon size={20} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/55">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
