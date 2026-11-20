import Link from "next/link";
import { ShoppingCart, TrendingUp, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import AudienceHero from "../components/AudienceHero";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "E-commerce Marketing | JASONEX Technologies",
  description: "JASONEX helps e-commerce brands scale ad spend and turn traffic into repeat customers.",
};

export default function EcommercePage() {
  return (
    <main className="bg-ink text-white overflow-hidden">
      <AudienceHero
        tag="E-commerce"
        titleLine1="Turn Browsers Into"
        titleLine2="Repeat Customers."
        description="We help e-commerce brands scale ad spend profitably, reduce cart abandonment, and build the kind of retention that compounds — not just one-time sales."
      />

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShoppingCart,
              title: "Full-Funnel Ads",
              desc: "From cold traffic to retargeting, we build campaigns that follow the actual customer journey.",
            },
            {
              icon: TrendingUp,
              title: "Conversion Rate",
              desc: "Landing pages and checkout flows optimized to turn more visitors into paying customers.",
            },
            {
              icon: RefreshCw,
              title: "Retention & LTV",
              desc: "Email, SMS, and remarketing built to bring customers back — not just chase first-time sales.",
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
            "Our ROAS doubled within 90 days and repeat purchase rate finally
            started climbing instead of flatlining."
          </p>
          <p className="text-sun font-semibold mt-6">— Client, E-commerce Founder</p>
        </FadeIn>
      </section>

      <section className="px-4 sm:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              Built For E-commerce Growth
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Shopify, WooCommerce, and headless integrations",
              "Dynamic product ads across Meta and Google",
              "Abandoned cart and post-purchase flows",
              "Clear ROAS and LTV reporting, no vanity metrics",
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
            Ready To Scale Your Store?
          </h2>
          <p className="text-white/60 mb-8">
            Let's talk about where your funnel is leaking and how to fix it.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}