"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Smartphone,
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
    title: "Cross-Platform Reach",
    text: "A single codebase built for iOS, Android, and the web means your app reaches every user without the cost of separate builds.",
  },
  {
    title: "Reduced Bugs & Downtime",
    text: "Rigorous testing and clean architecture catch issues before launch, so your app stays stable as it scales.",
  },
  {
    title: "Always-On Availability",
    text: "Cloud-hosted backends keep your app running and accessible to users around the clock.",
  },
  {
    title: "Scalable Growth",
    text: "As your user base grows, your app's architecture scales with you, handling increased traffic without a rebuild.",
  },
  {
    title: "Lower Maintenance Costs",
    text: "Clean, well-documented code means updates and new features ship faster and cheaper over time.",
  },
  {
    title: "Data-Driven Decisions",
    text: "Built-in analytics track how people actually use your app, giving you actionable insights to make smarter decisions.",
  },
  {
    title: "Faster Response Times",
    text: "Optimized performance means your app feels instant — quick loads, responsive UI, and smooth interactions.",
  },
  {
    title: "Competitive Advantage",
    text: "Businesses with a polished, reliable app gain a significant edge over competitors still relying on outdated tools.",
  },
];

const whatWeDo = [
  {
    title: "Product Discovery",
    text: "We assess your users, business goals, and the core problem your app needs to solve before writing a single line of code.",
  },
  {
    title: "UI/UX Design",
    text: "We design tailored, on-brand interfaces built around real user flows, tested for usability before development begins.",
  },
  {
    title: "App Development",
    text: "Our team builds and integrates your app using modern frameworks, whether native, cross-platform, or web-based.",
  },
  {
    title: "Backend & API Integration",
    text: "We build and connect the servers, databases, and APIs that power your app's features.",
  },
  {
    title: "Testing & Optimization",
    text: "Every build is rigorously tested and fine-tuned to ensure accuracy, reliability, and performance before going live.",
  },
  {
    title: "Launch & Ongoing Support",
    text: "We handle app store submission and deployment, then continue to monitor and improve the app as your business evolves.",
  },
];

const whyChooseUs = [
  {
    icon: Smartphone,
    title: "Proven Track Record",
    text: "We've helped dozens of businesses successfully launch apps and achieve measurable results.",
  },
  {
    icon: Layers,
    title: "Tailored Solutions",
    text: "We build custom apps designed around your unique workflows, not one-size-fits-all templates.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    text: "Your success is our priority — we take time to understand your goals before recommending any solution.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    text: "We believe in open, honest communication at every step of the development process.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Support",
    text: "Our team stays with you after launch to ensure your app continues running smoothly.",
  },
  {
    icon: Target,
    title: "Expertise Across Industries",
    text: "We've built apps across retail, healthcare, finance, and professional services.",
  },
];

const testimonials = [
  {
    text: "Choosing this team to build our app was one of the best decisions we made. Their approach saved us countless hours every week.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
  {
    text: "The app they built has been instrumental in transforming our customer support. Response times dropped dramatically.",
    name: "Michael Johnson",
    role: "CEO, Brightstar",
  },
  {
    text: "Working with this team has been a game-changer for our business. Their tailored strategies exceeded our expectations.",
    name: "S. Power",
    role: "Bluesky Ventures",
  },
  {
    text: "Their communication and transparency made the entire development process seamless. We're thrilled with the results.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
];

const logos = ["Logoipsum", "LOGOIPSUM", "logo ipsum", "Logoipsum", "LOGOIPSUM", "logo ipsum"];

const samples = ["/services/app-development/sample-1.png", "/services/app-development/sample-2.jpg", "/services/app-development/sample-3.png", "/services/app-development/sample-4.png"];

const processSteps = [
  {
    number: "01",
    step: "STEP 01",
    title: "Discovery & Assessment",
    desc: "We dive deep into your goals, users, and requirements to identify exactly what the app needs to do and how success will be measured.",
  },
  {
    number: "02",
    step: "STEP 02",
    title: "Strategy & Design",
    desc: "We design a custom blueprint for your app, outlining the tools, integrations, and platforms best suited to your needs.",
  },
  {
    number: "03",
    step: "STEP 03",
    title: "Implementation and Execution",
    desc: "Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component with precision and efficiency.",
  },
  {
    number: "04",
    step: "STEP 04",
    title: "Testing, Launch & Support",
    desc: "We test thoroughly across devices, launch to the app stores or web, and closely track performance to maximize the return on your investment.",
  },
];

const faqs = [
  {
    q: "What is app development and how can it help my business?",
    a: "App development is building custom mobile or web software for your business — giving customers a direct way to interact with you while reducing manual work and operational costs.",
  },
  {
    q: "How long does it take to build an app?",
    a: "Most projects take between 8 to 16 weeks depending on complexity, from initial discovery through launch and team training.",
  },
  {
    q: "Do I need technical knowledge to manage the app afterward?",
    a: "No. We design our solutions to be user-friendly and provide full training so your team can manage and monitor the app with ease.",
  },
  {
    q: "Can the app integrate with my existing software?",
    a: "Yes, we specialize in integrating apps directly with your existing CRM, communication tools, and business software.",
  },
  {
    q: "What industries do you work with?",
    a: "We've delivered app development solutions across retail, healthcare, finance, real estate, and professional services industries.",
  },
  {
    q: "Is my business data secure in the app?",
    a: "Absolutely. We follow strict data security best practices and ensure all integrations comply with relevant data protection standards.",
  },
  {
    q: "What happens after the app is launched?",
    a: "We provide ongoing monitoring, support, and optimization to ensure your app continues to perform and evolve with your business.",
  },
  {
    q: "How much does app development cost?",
    a: "Pricing depends on the scope and complexity of your app. Contact us for a custom quote.",
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
export default function AppDevelopmentPage() {
  const [openBenefit, setOpenBenefit] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="bg-paper">
      {/* ---------- Hero ---------- */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            App Development
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-2xl md:text-2xl">
            We build mobile and web apps that are fast, reliable, and help
            your business run smarter around the clock.
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
            src="/services/app-development/sample-1.png"
            alt="App Development"
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
          <p className="text-gray-400 max-w-3xl text-2xl md:text-2xl " >
            <span className="text-white font-semibold">App Development</span> is
            one of the most direct ways to reach your customers and grow
            your business. A well-built app helps you{" "}
            <span className="text-white font-semibold">
              reach more customers, save time, and reduce costs
            </span>{" "}
            across every department. Here are several reasons why your
            business might need a custom app:
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
            App Development is a comprehensive digital service aimed at
            turning your idea into a working product.{" "}
            <span className="text-white font-semibold">
              Through a strategic approach
            </span>{" "}
            combining design and engineering, we help you{" "}
            <span className="text-white font-semibold">
              launch something users actually want to use
            </span>
            . Here's an overview of what an App Development service includes:
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
            Brands that Took Our <br /> App Development Service
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
            App Development FAQs
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