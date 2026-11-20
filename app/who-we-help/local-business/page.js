import Link from "next/link";
import { MapPin, Phone, Star, CheckCircle2 } from "lucide-react";
import AudienceHero from "../components/AudienceHero";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Local Business Marketing | JASONEX Technologies",
  description: "JASONEX helps local businesses get found, get calls, and get booked.",
};

export default function LocalBusinessPage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <AudienceHero
        tag="Local Business"
        titleLine1="Get Found."
        titleLine2="Get Booked."
        description="We help local businesses show up when nearby customers are searching — and turn that visibility into calls, bookings, and walk-ins."
      />

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: "Local SEO",
              desc: "Google Business Profile, citations, and location pages built to rank in the map pack.",
            },
            {
              icon: Phone,
              title: "Call Tracking",
              desc: "Know exactly which campaigns are driving phone calls and bookings, not just clicks.",
            },
            {
              icon: Star,
              title: "Reputation",
              desc: "Review generation and management so your ratings work for you, not against you.",
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
            "We finally show up on the map when people search near us. Phone
            calls have nearly doubled since launch."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, Local Business Owner</p>
        </FadeIn>
      </section>

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Built For Local Growth
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Google Business Profile fully optimized",
              "Location-specific landing pages",
              "Call and form tracking on every campaign",
              "Review generation built into the customer journey",
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
            Ready To Get More Local Customers?
          </h2>
          <p className="text-white/60 mb-8">
            Let's get your business showing up where it matters most.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}