"use client";

import { useEffect, useState } from "react";

// Har set 4 photos ka hai (jaisa grid mein dikhta hai)
const photoSets = [
  [
    "About/gallery-1a.jpeg",
    "About/gallery-1b.jpeg",
    "About/gallery-2c.jpeg",
    "About/gallery-2b.jpeg",
  ],
  [
    "About/gallery-2a.jpeg",
    "About/gallery-1b.jpeg",
    "About/gallery-1c.jpeg",
    "About/gallery-2d.jpeg",
  ],
  
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // pehle fade out
      setFade(false);

      // 400ms baad next set pe switch karo aur fade in karo
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % photoSets.length);
        setFade(true);
      }, 400);
    }, 5000); // har 5 second baad

    return () => clearInterval(interval);
  }, []);

  const current = photoSets[index];

  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
        <div>
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            GALLERY
          </span>
          <h2 className="text-4xl font-display text-white">
            Our Agency Snaps
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm">
          From team outings and office shenanigans to special events and
          celebrations, these photos capture the essence of our vibrant
          culture and the bonds that unite us.
        </p>
      </div>

      {/* Grid: top row 1 small + 1 big, bottom row 1 big + 1 small */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[600px] transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:col-span-1 rounded-xl overflow-hidden">
          <img
            src={current[0]}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img
            src={current[1]}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img
            src={current[2]}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 rounded-xl overflow-hidden">
          <img
            src={current[3]}
            alt="gallery"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {photoSets.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-orange-500" : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}