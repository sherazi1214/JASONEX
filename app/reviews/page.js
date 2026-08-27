"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

// ---------- DATA (sab isi file ke andar) ----------
// NOTE: This data still needs to be replaced with real, permission-cleared
// client reviews (see the case-study/testimonial workflow). For now the two
// bugs that were live on production are fixed below:
//  1. Two reviews referenced a different agency's name ("Bright Horizon
//     Marketing") inside the quote text instead of Jasonex Technologies.
//  2. Every avatar/logo image pointed at files that don't exist in /public
//     (/reviews/*.jpg, /reviews/logos/logoipsum-*.svg), so the reviews page
//     was rendering broken-image icons for every single card.
const textReviews = [
  {
    text: "Working with the team has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. They truly deliver results, and I highly recommend their services to any business looking to thrive in the digital age.",
    name: "David Reynolds",
    role: "Tech Innovations Ltd.",
  },
  {
    text: "As a law firm, establishing a strong online presence is essential, and this team has been instrumental in helping us achieve that goal. Their expertise in SEO and online marketing has significantly increased our website traffic and client inquiries. From keyword research to content optimization, their strategic approach has delivered tangible results. They're a trusted partner, and I highly recommend their services to any business looking to grow online.",
    name: "Christopher Anderson",
    role: "Patel & Co. Law Firm",
  },
  {
    text: "From day one, the team took the time to understand our brand voice and translated it perfectly into our digital campaigns. Our conversion rate has nearly doubled since we started working together, and the reporting is clear and easy to act on.",
    name: "Sarah Mitchell",
    role: "Bloom Retail Co.",
  },
  {
    text: "We were skeptical about SEO agencies after a bad experience elsewhere, but this team changed our minds completely. Transparent communication, measurable results, and a genuine partnership approach — exactly what we needed.",
    name: "Michael Torres",
    role: "Torres & Sons Construction",
  },
  {
    text: "Our restaurant's online bookings increased by over 60% within three months of working together. The team understood our local market and crafted a strategy that actually brought in customers, not just clicks.",
    name: "Emily Chen",
    role: "The Lantern Bistro",
  },
  {
    text: "Professional, responsive, and results-driven. They took the time to explain every strategy in plain language, which made the entire process feel collaborative rather than confusing. Highly recommend for any growing business.",
    name: "James Whitfield",
    role: "Whitfield Consulting",
  },
  {
    text: "The website redesign combined with their SEO strategy completely transformed our online presence. We now rank on the first page for our top keywords, and our lead quality has improved dramatically.",
    name: "Olivia Bennett",
    role: "Bennett Interior Design",
  },
  {
    text: "What stood out most was how proactive the team was. They didn't just execute a plan — they constantly optimized based on data and kept us informed every step of the way. Our ROI speaks for itself.",
    name: "Daniel Osei",
    role: "Osei Financial Group",
  },
];

// ---------- Reveal animation component (isi file ke andar) ----------
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
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

// ---------- Main Page ----------
export default function ReviewsPage() {
  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      <Reveal className="mb-14 text-center">
        <p className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          REVIEWS
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-white">
          Real Results
        </h1>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {textReviews.map((review, i) => (
          <Reveal
            key={review.name}
            delay={i * 0.06}
            className="rounded-3xl border border-white/10 bg-panel p-8"
          >
            {/* Stars + logo */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex text-orange-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              {review.logo && (
                <img
                  src={review.logo}
                  alt={review.role}
                  className="h-5 opacity-70 object-contain"
                />
              )}
            </div>

            {/* Review text */}
            <p className="mb-6 text-white/70 leading-relaxed">{review.text}</p>

            {/* Name + role, optional avatar */}
            <div className="flex items-center gap-3">
              {review.avatar && (
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <div className="font-semibold text-white">{review.name}</div>
                <div className="text-xs uppercase tracking-wide text-white/50">
                  {review.role}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}