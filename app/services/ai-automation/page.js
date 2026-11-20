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
    title: "Increased Efficiency",
    text: "AI Automation eliminates repetitive manual tasks, freeing up your team's time to focus on higher-value, strategic work.",
  },
  {
    title: "Reduced Human Error",
    text: "Automated workflows follow precise rules every time, drastically cutting down on costly mistakes caused by manual processes.",
  },
  {
    title: "24/7 Operations",
    text: "AI-powered systems work around the clock without breaks, ensuring your business processes never stop running.",
  },
  {
    title: "Scalable Growth",
    text: "As your business grows, automated systems scale with you, handling increased volume without proportional cost increases.",
  },
  {
    title: "Cost Savings",
    text: "By automating routine tasks, businesses significantly reduce labor costs and operational overhead over time.",
  },
  {
    title: "Data-Driven Decisions",
    text: "AI systems collect and analyze data continuously, giving you actionable insights to make smarter business decisions.",
  },
  {
    title: "Faster Response Times",
    text: "Automated customer service and internal workflows respond instantly, improving both customer and employee satisfaction.",
  },
  {
    title: "Competitive Advantage",
    text: "Businesses that adopt AI automation early gain a significant edge over competitors still relying on manual processes.",
  },
];

const whatWeDo = [
  {
    title: "Workflow Analysis",
    text: "We assess your existing business processes to identify repetitive tasks and bottlenecks ideal for automation.",
  },
  {
    title: "Custom AI Solution Design",
    text: "We design tailored automation solutions using AI models, chatbots, and integrations built specifically for your business needs.",
  },
  {
    title: "Integration & Development",
    text: "Our team builds and integrates automation tools directly into your existing software stack, CRM, and communication channels.",
  },
  {
    title: "Testing & Optimization",
    text: "Every automation is rigorously tested and fine-tuned to ensure accuracy, reliability, and performance before going live.",
  },
  {
    title: "Deployment & Training",
    text: "We deploy the finished solution and train your team on how to manage, monitor, and get the most out of your new systems.",
  },
  {
    title: "Ongoing Support",
    text: "We continuously monitor performance and make improvements, ensuring your AI automation evolves alongside your business.",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Proven Track Record",
    text: "We've helped dozens of businesses successfully automate their operations and achieve measurable results.",
  },
  {
    icon: Layers,
    title: "Tailored Solutions",
    text: "We build custom automation systems designed around your unique workflows, not one-size-fits-all templates.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    text: "Your success is our priority — we take time to understand your goals before recommending any solution.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    text: "We believe in open, honest communication at every step of the automation process.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Support",
    text: "Our team stays with you after launch to ensure your automation continues running smoothly.",
  },
  {
    icon: Target,
    title: "Expertise Across Industries",
    text: "We've built AI automation solutions across retail, healthcare, finance, and professional services.",
  },
];

const testimonials = [
  {
    text: "Choosing this team for our AI automation was one of the best decisions we made. Their approach saved us countless hours every week.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
  {
    text: "The automation they built has been instrumental in transforming our customer support. Response times dropped dramatically.",
    name: "Michael Johnson",
    role: "CEO, Brightstar",
  },
  {
    text: "Working with this team has been a game-changer for our business. Their tailored strategies exceeded our expectations.",
    name: "S. Power",
    role: "Bluesky Ventures",
  },
  {
    text: "Their communication and transparency made the entire automation process seamless. We're thrilled with the results.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
];

const logos = ["Logoipsum", "LOGOIPSUM", "logo ipsum", "Logoipsum", "LOGOIPSUM", "logo ipsum"];

const samples = ["/services/ai-automation/sample-1.jpg", "/services/ai-automation/sample-2.jpg", "/services/ai-automation/sample-3.jpg", "/services/ai-automation/sample-4.jpg"];

const processSteps = [
  {
    number: "01",
    step: "STEP 01",
    title: "Discovery & Assessment",
    desc: "We dive deep into your current workflows to identify the biggest opportunities for AI automation, understanding your goals, pain points, and technical environment.",
  },
  {
    number: "02",
    step: "STEP 02",
    title: "Strategy & Design",
    desc: "We design a custom automation blueprint tailored to your business, outlining the tools, integrations, and AI models best suited to your needs.",
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
    title: "Monitoring and Optimization",
    desc: "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of your automation. We closely track key performance indicators and make necessary adjustments to maximize the return on your investment.",
  },
];

const faqs = [
  {
    q: "What is AI Automation and how can it help my business?",
    a: "AI Automation uses artificial intelligence to handle repetitive tasks and workflows automatically, freeing your team to focus on strategic work while reducing errors and operational costs.",
  },
  {
    q: "How long does it take to implement an AI automation solution?",
    a: "Most projects take between 4 to 8 weeks depending on complexity, from initial discovery through deployment and team training.",
  },
  {
    q: "Do I need technical knowledge to use the automation tools?",
    a: "No. We design our solutions to be user-friendly and provide full training so your team can manage and monitor the systems with ease.",
  },
  {
    q: "Can AI automation integrate with my existing software?",
    a: "Yes, we specialize in integrating automation directly into your existing CRM, communication tools, and business software.",
  },
  {
    q: "What industries do you work with?",
    a: "We've delivered AI automation solutions across retail, healthcare, finance, real estate, and professional services industries.",
  },
  {
    q: "Is my business data secure with AI automation?",
    a: "Absolutely. We follow strict data security best practices and ensure all integrations comply with relevant data protection standards.",
  },
  {
    q: "What happens after the automation is launched?",
    a: "We provide ongoing monitoring, support, and optimization to ensure your automation continues to perform and evolve with your business.",
  },
  {
    q: "How much does AI automation cost?",
    a: "Pricing depends on the scope and complexity of your automation needs. See our pricing plans above, or contact us for a custom quote.",
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
export default function AIAutomationPage() {
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
            AI Automation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-2xl md:text-2xl">
            We build intelligent automation systems that eliminate repetitive
            work, reduce costs, and help your business run smarter around the
            clock.
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
            src="/services/ai-automation/sample-3.jpg"
            alt="AI Automation"
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
            <span className="text-white font-semibold">AI Automation</span> is
            a powerful digital transformation strategy aimed at streamlining
            your operations. By automating repetitive tasks and workflows,
            businesses{" "}
            <span className="text-white font-semibold">
              save time, reduce costs, and improve accuracy
            </span>{" "}
            across every department. Here are several reasons why your
            business might need AI automation:
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
            AI Automation is a comprehensive digital service aimed at
            transforming how your business operates.{" "}
            <span className="text-white font-semibold">
              Through a strategic approach
            </span>{" "}
            combining custom development and intelligent integrations, we
            help you{" "}
            <span className="text-white font-semibold">
              eliminate manual work and unlock efficiency
            </span>
            . Here's an overview of what an AI Automation service includes:
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
            Brands that Took Our <br /> AI Automation Service
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
            AI Automation FAQs
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