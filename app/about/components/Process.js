"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    step: "STEP 01",
    title: "Discovery Phase",
    desc: "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
  },
  {
    number: "02",
    step: "STEP 02",
    title: "Strategy Development",
    desc: "With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This comprehensive plan outlines the key tactics, channels, and timelines needed to achieve your business goals effectively.",
  },
  {
    number: "03",
    step: "STEP 03",
    title: "Implementation and Execution",
    desc: "Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component of the strategy with precision and efficiency, whether it's optimizing your website for search engines, crafting engaging social media content, or designing captivating visuals.",
  },
  {
    number: "04",
    step: "STEP 04",
    title: "Monitoring and Optimization",
    desc: "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results. This iterative process allows us to adapt to changes in the market and maximize the return on your investment.",
  },
];

function ProcessStep({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-8 min-h-[260px]"
    >
      {/* Number + line column */}
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
        {index !== steps.length - 1 && (
          <div className="relative w-px flex-1 mt-4 bg-gray-800 overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full bg-orange-500 transition-all duration-[1200ms] ease-out ${
                visible ? "h-full" : "h-0"
              }`}
            />
          </div>
        )}
      </div>

      {/* Card */}
      <div
        className={`bg-panel rounded-xl p-6 max-w-xl mt-2 transition-all duration-700 ease-out ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
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

export default function Process() {
  return (
    <section className="bg-ink py-20 px-6 max-w-4xl mx-auto text-center">
      <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
        HOW WE WORK
      </span>
      <h2 className="text-4xl font-display text-white mb-16">
        Our 4 Stage Process
      </h2>

      <div className="flex flex-col gap-4 text-left">
        {steps.map((step, i) => (
          <ProcessStep key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}