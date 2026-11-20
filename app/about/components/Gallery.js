"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Ek waqt me sirf 1 picture, har 4 second baad khud badalti hai (hover par ruk jati hai).
export default function Gallery({ snaps = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = snaps.length;

  const next = useCallback(() => setIndex((i) => (count ? (i + 1) % count : 0)), [count]);
  const prev = useCallback(() => setIndex((i) => (count ? (i - 1 + count) % count : 0)), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, count, next]);

  return (
    <section className="bg-ink py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
        <div>
          <span className="inline-block bg-panel text-orange-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
            GALLERY
          </span>
          <h2 className="text-4xl font-display text-white">Our Agency Snaps</h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm">
          From team outings and office shenanigans to special events and
          celebrations, these photos capture the essence of our vibrant
          culture and the bonds that unite us.
        </p>
      </div>

      {count === 0 ? (
        <p className="text-gray-500 text-sm">Photos jald aa rahi hain.</p>
      ) : (
        <>
          <div
            className="relative w-full overflow-hidden rounded-2xl bg-panel aspect-[4/3] sm:aspect-[16/9]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {snaps.map((snap, i) => (
              <img
                key={snap.id || i}
                src={snap.image}
                alt={snap.caption || `Agency snap ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-orange-500 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-orange-500 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {snaps[index]?.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white">
                {snaps[index].caption}
              </div>
            )}
          </div>

          {count > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {snaps.map((s, i) => (
                <button
                  key={s.id || i}
                  type="button"
                  aria-label={`Go to photo ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-orange-500" : "w-2 bg-gray-700 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
