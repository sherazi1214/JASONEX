"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel">
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full"
            aria-label={`Play testimonial from ${video.name}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.name}
              className="h-full w-full object-cover grayscale transition group-hover:grayscale-0"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black transition group-hover:scale-110">
                <Play size={22} fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <div className="font-semibold">{video.name}</div>
        <div className="text-xs uppercase tracking-wide text-white/50">{video.role}</div>
      </div>
    </div>
  );
}
