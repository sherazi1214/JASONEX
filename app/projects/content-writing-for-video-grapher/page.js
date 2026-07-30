"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "" }) {
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
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function ContentWritingForVideoGrapherPage() {
  return (
    <main className="bg-ink py-20 px-6 max-w-7xl mx-auto">
      {/* Top: Updated Big Design */}
      <Reveal className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Title Box */}
        <div className="bg-panel rounded-3xl p-12 flex flex-col justify-center h-[500px]">
          <span className="inline-block bg-black/30 text-orange-500 text-sm font-semibold px-4 py-2 rounded-lg mb-6 w-fit border border-orange-500/20">
            OUR THREE STEP PROCESS
          </span>
          <h1 className="text-6xl font-display font-bold text-white leading-tight">
            Content Writing For Video Grapher
          </h1>
        </div>

        {/* Image/Showreel Box */}
        <div className="bg-panel rounded-3xl overflow-hidden h-[500px] flex items-center justify-center">
          <img
            src="/projects/cover.jpeg"
            alt="Content Writing For Video Grapher"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>

      {/* Summary box - Updated for prominence */}
      <Reveal className="bg-panel rounded-3xl p-16 mb-16 text-center">
        <p className="text-gray-200 text-2xl leading-relaxed max-w-4xl mx-auto font-light">
          Stellar Shots Videography is a boutique videography studio
          specializing in capturing memorable moments through cinematic
          storytelling. With a team of skilled videographers and editors,
          Stellar Shots has earned a reputation for delivering high-quality
          videos for weddings, events, and corporate projects. However,
          despite its exceptional work, the studio faced challenges in
          effectively showcasing its portfolio and attracting new clients
          through its website.
        </p>
      </Reveal>

      {/* Detailed sections - Code unchanged */}
      <div className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed space-y-8">
        <Reveal>
          <h3 className="text-white font-bold mb-2 text-base">Client Background</h3>
          <p>
            Stellar Shots Videography is a boutique videography studio
            specializing in capturing memorable moments through cinematic
            storytelling. With a team of skilled videographers and editors,
            Stellar Shots has earned a reputation for delivering high-quality
            videos for weddings, events, and corporate projects.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="text-white font-bold mb-2 text-base">Challenge</h3>
          <p>
            As visual storytellers, Stellar Shots understood the importance
            of capturing content in conveying their brand identity and
            expertise. However, the studio struggled to translate its
            creativity and passion into compelling written content for the
            website.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="text-white font-bold mb-2 text-base">Solution</h3>
          <p>
            The content writing team collaborated closely with Stellar
            Shots to craft engaging and persuasive content for the
            portfolio website. The following strategies were implemented:
          </p>
        </Reveal>

        <Reveal>
          <h4 className="text-white font-semibold mb-2">
            Discovery and Brand Voice Development
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Conducted a discovery session to understand Stellar Shots' brand values, target audience, and unique selling points.</li>
            <li>Developed a brand voice and tone that aligned with Stellar Shots' creative and professional approach to videography.</li>
          </ul>
        </Reveal>

        <Reveal>
          <h4 className="text-white font-semibold mb-2">Portfolio Showcase</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Highlighted Stellar Shots' portfolio of work through captivating descriptions and storytelling, emphasizing the emotions and narratives captured in each video.</li>
            <li>Organized the portfolio into distinct categories, such as weddings, events, and corporate projects, to make it easy for visitors to navigate and explore.</li>
          </ul>
        </Reveal>

        <Reveal>
          <h4 className="text-white font-semibold mb-2">Service Descriptions</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Crafted concise and compelling descriptions of Stellar Shots' videography services, emphasizing the studio's expertise, equipment, and commitment to quality.</li>
            <li>Clearly outlined the benefits of hiring Stellar Shots for different types of projects, addressing common client concerns and goals.</li>
          </ul>
        </Reveal>

        <Reveal>
          <h4 className="text-white font-semibold mb-2">Client Testimonials and Success Stories</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Incorporated testimonials and success stories from satisfied clients to provide social proof and build credibility.</li>
            <li>Highlighted specific projects and outcomes to demonstrate Stellar Shots' ability to meet and exceed client expectations.</li>
          </ul>
        </Reveal>
      </div>
    </main>
  );
}