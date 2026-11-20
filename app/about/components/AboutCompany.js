"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "Our History",
    content:
      "Jasonex Technologies was founded with a vision to bridge the gap between businesses and modern technology. What began as a digital services initiative has evolved into a technology company focused on Artificial Intelligence, automation, software development, and digital transformation. Over the years, we have worked with clients across multiple industries and international markets, delivering solutions that improve efficiency, generate growth, and create long-term business value. As technology continues to evolve, Jasonex Technologies remains committed to adopting the latest innovations to help organizations stay competitive in an ever-changing digital landscape.",
  },
  {
    id: 2,
    title: "Our Mission",
    content:
      "Our mission is to empower businesses with innovative, reliable, and scalable technology solutions that solve real-world challenges. We strive to:",
    list: [
      "Deliver exceptional digital products and services.",
      "Simplify business operations through AI and automation.",
      "Help organizations increase productivity and profitability.",
      "Build long-term partnerships based on trust, transparency, and measurable results.",
      "Continuously innovate by adopting emerging technologies.",
    ],
  },
  {
    id: 3,
    title: "Our Vision",
    content:
      "Our vision is to become one of the world's most trusted technology companies, recognized for innovation, quality, and customer success. We aspire to:",
    list: [
      "Lead the future of AI-powered business transformation.",
      "Build intelligent software that changes how businesses operate.",
      "Create technology that improves lives and industries worldwide.",
      "Expand globally while maintaining excellence in service and innovation.",
      "Inspire businesses to embrace digital transformation with confidence.",
    ],
  },
];

export default function AboutCompany() {
  const [openId, setOpenId] = useState(2); // default open item (jaise screenshot mein 02 khula hai)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side text */}
        <div>
          <span className="inline-block bg-panel text-sun2 text-sm px-4 py-1 rounded-full mb-4">
            WHO WE ARE
          </span>
          <h2 className="text-4xl font-display text-white mb-6">
            About Jasonex Technologies (Pvt.) Ltd.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Jasonex Technologies (Pvt.) Ltd. is a leading technology and
            digital transformation company dedicated to helping businesses
            succeed in the digital age. We combine{" "}
            <span className="text-white font-semibold">
              innovation, Artificial Intelligence, software engineering,
              digital marketing, and automation
            </span>{" "}
            to deliver intelligent solutions that drive measurable growth.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            From startups to established enterprises, we partner with
            businesses to design, develop, and optimize digital ecosystems
            that improve efficiency, enhance customer experiences, and
            increase profitability.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our expertise includes{" "}
            <span className="text-white font-semibold">
              AI Automation, Custom Software Development, Web Development,
              Mobile Applications, Cloud Solutions, Digital Marketing, Search
              Engine Optimization (SEO), Google Ads, Meta Ads, Branding,
              E-commerce Solutions, and Business Process Automation.
            </span>
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our goal is simple: to help businesses grow faster, operate
            smarter, and compete globally through technology.
          </p>
        </div>

        {/* Right side accordion */}
        <div className="flex flex-col gap-4">
          {accordionData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl p-5 transition-all duration-300 ${
                  isOpen ? "bg-panel" : "bg-panel/60"
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span
                    className={`font-semibold ${
                      isOpen ? "text-orange-500" : "text-white"
                    }`}
                  >
                    0{item.id}. {item.title}
                  </span>
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
                      isOpen
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {isOpen ? <X size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* Animated collapse */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.content}
                    </p>
                    {item.list && (
                      <ul className="mt-3 space-y-2">
                        {item.list.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
                          >
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}