"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving your website so it ranks higher on search engines like Google. It's important because it helps potential customers find your business organically, without paying for ads.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3 to 6 months, depending on competition, industry, and how consistently the strategy is executed.",
  },
  {
    question: "What are the key factors that influence SEO rankings?",
    answer:
      "Key factors include quality content, backlinks, site speed, mobile-friendliness, keyword optimization, user experience, and technical SEO health.",
  },
  {
    question: "Do I need to hire an SEO agency, or can I do SEO myself?",
    answer:
      "You can do basic SEO yourself with the right tools and knowledge, but hiring an agency saves time, brings expertise, and typically delivers faster, more consistent results.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "SEO pricing varies widely based on scope, competition, and goals. Monthly retainers typically range from a few hundred to several thousand dollars depending on the size of the project.",
  },
  {
    question: "Can I rank #1 on Google for any keyword?",
    answer:
      "Not guaranteed for every keyword — especially highly competitive ones. However, with the right strategy, ranking well for relevant, targeted keywords is very achievable.",
  },
  {
    question: "Is SEO a one-time effort, or does it require ongoing maintenance?",
    answer:
      "SEO requires ongoing maintenance. Search engine algorithms change frequently, and competitors are always working to improve their rankings, so continuous effort is needed to maintain and grow your position.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-ink py-20 px-6 max-w-3xl mx-auto text-center">
      <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
        FREQUENTLY ASKED QUESTIONS
      </span>
      <h2 className="text-4xl font-display text-white mb-12">
        Got Questions? <br /> We've Got Answers!
      </h2>

      <div className="flex flex-col gap-3 text-left">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-panel rounded-xl px-5 py-4 transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="text-white text-sm md:text-base">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-orange-500 text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown size={16} />
                </span>
              </button>

              {/* Animated answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}