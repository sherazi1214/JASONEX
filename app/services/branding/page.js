"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Zap,
  Target,
  ShieldCheck,
  Users,
  MessageCircle,
  Layers,
  ChevronDown,
} from "lucide-react";

/* ---------------- Reveal (scroll animation) ---------------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Data ---------------- */
const benefits = [
  {
    title: "Stronger Brand Recognition",
    text: "A cohesive brand identity makes your business instantly recognizable, helping customers remember and trust you at every touchpoint.",
  },
  {
    title: "Builds Customer Trust",
    text: "Professional, consistent branding signals credibility and reliability, making customers more confident choosing your business.",
  },
  {
    title: "Clear Market Positioning",
    text: "Strong branding defines who you are and what sets you apart, helping you stand out clearly in a crowded market.",
  },
  {
    title: "Consistent Customer Experience",
    text: "A unified brand voice and visual identity create a seamless experience across every channel your customers interact with.",
  },
  {
    title: "Higher Perceived Value",
    text: "Great branding elevates how customers perceive your products and services, often allowing for premium pricing.",
  },
  {
    title: "Emotional Connection",
    text: "A well-crafted brand story and identity create genuine emotional connections that turn customers into loyal advocates.",
  },
  {
    title: "Easier Marketing & Growth",
    text: "A clear brand foundation makes every future marketing effort more effective, cohesive, and easier to execute.",
  },
  {
    title: "Competitive Advantage",
    text: "Businesses with strong, distinctive branding stand out and win customer loyalty over competitors with generic identities.",
  },
];

const whatWeDo = [
  {
    title: "Brand Discovery & Research",
    text: "We dive into your business, audience, and competitors to understand what makes your brand unique and how it should be positioned.",
  },
  {
    title: "Brand Strategy Design",
    text: "We define your brand's voice, values, positioning, and messaging framework so everything you create speaks with one clear identity.",
  },
  {
    title: "Visual Identity Development",
    text: "Our team designs your logo, color palette, typography, and visual system that brings your brand to life across every medium.",
  },
  {
    title: "Brand Guidelines & Testing",
    text: "Every element is refined and documented into clear brand guidelines to ensure consistency across all future applications.",
  },
  {
    title: "Rollout & Training",
    text: "We deliver your complete brand assets and guide your team on how to apply them consistently across every platform.",
  },
  {
    title: "Ongoing Brand Support",
    text: "We continue to support and evolve your brand identity as your business grows and new needs arise.",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Proven Track Record",
    text: "We've helped dozens of businesses build memorable brand identities that resonate with their audience.",
  },
  {
    icon: Layers,
    title: "Tailored Identities",
    text: "We craft distinctive brand systems designed around your unique story, not generic templates.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    text: "Your vision is our priority — we take time to understand your brand before designing anything.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    text: "We believe in open, honest communication and collaborative feedback at every step of the branding process.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Support",
    text: "Our team stays with you after delivery to ensure your brand identity is applied consistently everywhere.",
  },
  {
    icon: Target,
    title: "Expertise Across Industries",
    text: "We've built brand identities across retail, healthcare, finance, and professional services.",
  },
];

const testimonials = [
  {
    text: "Choosing this team for our branding was one of the best decisions we made. Our new identity completely elevated how customers see us.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
  {
    text: "The brand identity they built has been instrumental in transforming our market presence. We finally feel recognizable and consistent.",
    name: "Michael Johnson",
    role: "CEO, Brightstar",
  },
  {
    text: "Working with this team has been a game-changer for our business. Their branding strategy exceeded our expectations.",
    name: "S. Power",
    role: "Bluesky Ventures",
  },
  {
    text: "Their communication and transparency made the entire branding process seamless. We're thrilled with the results.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
];

const logos = ["Logoipsum", "LOGOIPSUM", "logo ipsum", "Logoipsum", "LOGOIPSUM", "logo ipsum"];

const samples = ["/services/branding/sample-1.jpeg", "/services/branding/sample-2.jpg", "/services/branding/sample-3.jpg", "/services/branding/sample-4.jpg"];

const processSteps = [
  {
    number: "01",
    step: "STEP 01",
    title: "Discovery & Research",
    desc: "We dive deep into your business, audience, and competitors to understand your story, values, and what should set your brand apart.",
  },
  {
    number: "02",
    step: "STEP 02",
    title: "Strategy & Positioning",
    desc: "We define your brand strategy, voice, and positioning, outlining the direction and messaging that will guide every design decision.",
  },
  {
    number: "03",
    step: "STEP 03",
    title: "Design & Development",
    desc: "Once the strategy is finalized and approved, we design your logo, visual identity, and brand assets with precision and creative care.",
  },
  {
    number: "04",
    step: "STEP 04",
    title: "Delivery and Guidelines",
    desc: "We finalize your complete brand guidelines and deliver every asset your team needs to apply the brand consistently everywhere.",
  },
];

const faqs = [
  {
    q: "What is Branding and how can it help my business?",
    a: "Branding defines how your business looks, sounds, and feels to customers — from your logo to your messaging — helping you build recognition, trust, and loyalty.",
  },
  {
    q: "How long does it take to build a brand identity?",
    a: "Most branding projects take between 4 to 8 weeks depending on complexity, from initial discovery through final delivery and guidelines.",
  },
  {
    q: "Do I need an existing brand to start this process?",
    a: "No. Whether you're starting from scratch or rebranding an existing business, we guide you through the entire process from discovery to delivery.",
  },
  {
    q: "Will my new brand work across all my platforms?",
    a: "Yes, we design every brand system to be flexible and consistent across your website, social media, packaging, and print materials.",
  },
  {
    q: "What industries do you work with?",
    a: "We've delivered branding projects across retail, healthcare, finance, real estate, and professional services industries.",
  },
  {
    q: "What do I actually receive at the end of the project?",
    a: "You receive a complete brand identity package including your logo, color palette, typography, and detailed brand guidelines.",
  },
  {
    q: "What happens after the brand is delivered?",
    a: "We provide ongoing support to help you apply your brand consistently and evolve it as your business grows.",
  },
  {
    q: "How much does branding cost?",
    a: "Pricing depends on the scope of your branding needs. See our pricing plans above, or contact us for a custom quote.",
  },
];

/* ---------------- Reusable Accordion Item ---------------- */
function AccordionItem({ number, title, text, isOpen, onClick }) {
  return (
    <div className="bg-panel rounded-xl p-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-white text-sm font-medium">
          {number}. {title}
        </span>
        <span
          className={`w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-orange-500 text-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Process Step (scroll-fill line) ---------------- */
function ProcessStep({ step, index, total }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex items-start gap-8 min-h-[220px]">
      <div className="relative flex flex-col items-center w-20 shrink-0">
        <span
          className={`text-5xl font-bold transition-all duration-700 ${
            visible
              ? "text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]"
              : "text-gray-700"
          }`}
        >
          {step.number}
        </span>
        {index !== total - 1 && (
          <div className="relative w-px flex-1 mt-4 bg-gray-800 overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full bg-orange-500 transition-all duration-[1200ms] ease-out ${
                visible ? "h-full" : "h-0"
              }`}
            />
          </div>
        )}
      </div>

      <div
        className={`bg-panel rounded-xl p-6 max-w-xl mt-2 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <span className="inline-block text-orange-500 text-xs font-semibold mb-2">
          {step.step}
        </span>
        <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}

/* ---------------- Main Page ---------------- */
export default function BrandingPage() {
  const [openBenefit, setOpenBenefit] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="bg-ink">
      {/* ---------- Hero ---------- */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Branding
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-2xl md:text-2xl">
            We craft distinctive brand identities that build trust, spark
            recognition, and help your business stand out in a crowded
            market.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full"
          >
            GET STARTED
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 rounded-2xl overflow-hidden h-72 md:h-[420px]">
          <img
            src="/services/branding/sample-1.jpeg"
            alt="Branding"
            className="w-full h-full object-cover"
          />
        </Reveal>
      </section>

      {/* ---------- Why You Need This Service ---------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <Reveal className="mb-10">
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            BENEFITS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Why you Need this Service
          </h2>
          <p className="text-gray-1400 max-w-3xl text-2xl md:text-2xl " >
            <span className="text-white font-semibold">Branding</span> is
            a powerful growth strategy aimed at shaping how the world sees
            your business. By building a clear, consistent identity, businesses{" "}
            <span className="text-white font-semibold">
              build trust, stand out, and grow loyalty
            </span>{" "}
            across every touchpoint. Here are several reasons why your
            business might need branding:
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <AccordionItem
                number={`0${i + 1}`}
                title={b.title}
                text={b.text}
                isOpen={openBenefit === i}
                onClick={() => setOpenBenefit(openBenefit === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <Reveal className="mb-10">
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            SERVICE DETAILS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-400 leading-relaxed text-2xl md:text-1xl">
            Branding is a comprehensive service aimed at shaping how
            customers perceive and remember your business.{" "}
            <span className="text-white font-semibold">
              Through a strategic approach
            </span>{" "}
            combining research and creative design, we
            help you{" "}
            <span className="text-white font-semibold">
              build a distinctive identity customers trust
            </span>
            . Here's an overview of what a Branding service includes:
          </p>
        </Reveal>

        <div className="flex flex-col gap-8 text-left max-w-2xl mx-auto">
          {whatWeDo.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Why We Are Your Best Choice ---------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <Reveal className="mb-12">
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Why we are your best choice
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group relative bg-panel/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center h-full flex flex-col items-center transition-all duration-300 hover:bg-panel/70 hover:border-orange-500/40 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl border-2 border-orange-500/40 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:border-orange-500">
                    <Icon size={28} className="text-orange-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- Brands / Testimonials ---------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center overflow-hidden">
        <Reveal className="mb-10">
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            BRANDS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Brands that Took Our <br /> Branding Service
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mb-10 relative overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="bg-panel text-gray-300 text-xs font-semibold px-5 py-2 rounded-full whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="relative overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee-slow">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-panel/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-80 shrink-0 flex flex-col"
              >
                <div className="flex text-orange-500 mb-3">★★★★★</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {t.text}
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Some Samples of Our Works ---------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <Reveal className="mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Some Samples of Our Works
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {samples.map((src, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden h-72">
                <img
                  src={src}
                  alt={`Sample ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 4 Stage Process ---------- */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <Reveal className="mb-16">
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            HOW WE WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Our 4 Stage Process
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4 text-left">
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              total={processSteps.length}
            />
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <Reveal className="mb-12">
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Branding FAQs
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-panel rounded-xl px-5 py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-white text-sm md:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-orange-500 text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </main>
  );
}