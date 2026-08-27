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
    title: "Professional Online Presence",
    text: "A well-designed website establishes credibility and trust, giving potential customers a strong first impression of your business.",
  },
  {
    title: "Improved User Experience",
    text: "Modern websites are built with intuitive navigation and fast load times, keeping visitors engaged and reducing bounce rates.",
  },
  {
    title: "Mobile Responsiveness",
    text: "A responsive website ensures your business looks great and functions perfectly on every device, from desktops to smartphones.",
  },
  {
    title: "Higher Search Rankings",
    text: "Websites built with clean code and SEO best practices rank better on search engines, driving more organic traffic to your business.",
  },
  {
    title: "Increased Conversions",
    text: "Strategic design and clear calls-to-action guide visitors toward taking action, turning traffic into leads and sales.",
  },
  {
    title: "Scalable Foundation",
    text: "A well-built website can grow with your business, easily accommodating new pages, features, and functionality over time.",
  },
  {
    title: "Brand Consistency",
    text: "Your website reinforces your brand identity through consistent design, messaging, and visual elements across every page.",
  },
  {
    title: "Competitive Edge",
    text: "Businesses with a modern, fast, and functional website stand out from competitors still relying on outdated or clunky sites.",
  },
];

const whatWeDo = [
  {
    title: "Discovery & Planning",
    text: "We learn about your business goals, target audience, and requirements to plan a website structure that fits your needs perfectly.",
  },
  {
    title: "Custom Design",
    text: "We design a unique visual identity for your website, tailored to your brand and optimized for user engagement.",
  },
  {
    title: "Development & Coding",
    text: "Our developers build your website using modern, clean code that ensures fast performance, security, and scalability.",
  },
  {
    title: "Responsive Testing",
    text: "Every website is thoroughly tested across devices and browsers to ensure a flawless experience for every visitor.",
  },
  {
    title: "Launch & Deployment",
    text: "We handle the technical details of deploying your website live, including hosting setup, domain configuration, and go-live checks.",
  },
  {
    title: "Ongoing Maintenance",
    text: "We provide continued support, updates, and improvements to keep your website secure, fast, and up to date.",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Proven Track Record",
    text: "We've designed and built dozens of high-performing websites across a wide range of industries.",
  },
  {
    icon: Layers,
    title: "Tailored Solutions",
    text: "We build custom websites designed around your specific goals, not generic templates.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    text: "Your success is our priority — we take time to understand your vision before writing a single line of code.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    text: "We believe in open, honest communication at every step of the design and development process.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Support",
    text: "Our team stays with you after launch to ensure your website continues to perform flawlessly.",
  },
  {
    icon: Target,
    title: "Expertise Across Industries",
    text: "We've built websites for retail, healthcare, finance, real estate, and professional services businesses.",
  },
];

const testimonials = [
  {
    text: "Choosing this team for our website redesign was one of the best decisions we made. Our new site looks incredible and loads instantly.",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
  {
    text: "The website they built has been instrumental in transforming our online presence. Our conversion rate has doubled.",
    name: "Michael Johnson",
    role: "CEO, Brightstar",
  },
  {
    text: "Working with this team has been a game-changer for our business. The design exceeded our expectations completely.",
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

const samples = ["/services/website-development/sample-1.png", "/services/website-development/sample-2.jpg", "/services/website-development/sample-3.jpg"];

const processSteps = [
  {
    number: "01",
    step: "STEP 01",
    title: "Discovery & Planning",
    desc: "We dive deep into your business goals, target audience, and requirements to plan a website structure and strategy that fits your needs perfectly.",
  },
  {
    number: "02",
    step: "STEP 02",
    title: "Design & Prototyping",
    desc: "We design a custom visual concept for your website, tailored to your brand identity, and refine it based on your feedback before development begins.",
  },
  {
    number: "03",
    step: "STEP 03",
    title: "Development and Execution",
    desc: "Once the design is approved, we build your website using modern, clean code. Our expert team ensures fast performance, security, and pixel-perfect implementation.",
  },
  {
    number: "04",
    step: "STEP 04",
    title: "Testing and Launch",
    desc: "We thoroughly test your website across devices and browsers, then handle the full launch process, ensuring everything runs smoothly on go-live day.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites take between 3 to 6 weeks depending on complexity, from initial discovery through design, development, and launch.",
  },
  {
    q: "Will my website work well on mobile devices?",
    a: "Yes, every website we build is fully responsive and tested across phones, tablets, and desktops to ensure a seamless experience.",
  },
  {
    q: "Do you provide website hosting?",
    a: "We can help set up and manage hosting for your website, or work with your existing hosting provider based on your preference.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in redesigning outdated websites to improve performance, design, and conversion rates.",
  },
  {
    q: "Will my website be optimized for SEO?",
    a: "Yes, all our websites are built following SEO best practices, including clean code, fast load times, and proper site structure.",
  },
  {
    q: "Can I update the website content myself after launch?",
    a: "Yes, we can build your website on a content management system that allows you to easily update text, images, and pages yourself.",
  },
  {
    q: "What happens after my website is launched?",
    a: "We provide ongoing support, maintenance, and updates to ensure your website stays secure, fast, and up to date.",
  },
  {
    q: "How much does a website cost?",
    a: "Pricing depends on the scope and features required for your project. Contact us for a custom quote based on your needs.",
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
export default function WebsiteDevelopmentPage() {
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
            Website Development
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We design and build fast, modern, and conversion-focused websites
            that help your business make a powerful first impression online.
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
            src="/services/website-development/sample-1.png"
            alt="Website Development"
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
          <p className="text-gray-400 max-w-3xl">
            <span className="text-white font-semibold">Website Development</span> is
            a crucial investment for any modern business looking to grow
            online. By building a professional, fast, and functional website,
            businesses{" "}
            <span className="text-white font-semibold">
              improve credibility, attract more customers, and boost conversions
            </span>{" "}
            across every channel. Here are several reasons why your business
            might need a new website:
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
          <p className="text-gray-400 leading-relaxed">
            Website Development is a comprehensive digital service aimed at
            building your business's online home.{" "}
            <span className="text-white font-semibold">
              Through a strategic approach
            </span>{" "}
            combining custom design and modern development, we help you{" "}
            <span className="text-white font-semibold">
              build a fast, professional, and conversion-ready website
            </span>
            . Here's an overview of what a website development service includes:
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
            Brands that Took Our <br /> Website Development Service
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
            Website Development FAQs
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