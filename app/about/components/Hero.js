"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // page load hote hi thora sa delay dekar animation start karo
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src="About/sample-2.jpg"
        alt="About us hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay taky text saaf nazar aye */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text jo upar se slide ho kar aayega */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-20">
        <h1
          className={`text-4xl md:text-6xl font-display text-white transition-all duration-700 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Hey There! Welcome to{" "}
          <span className="text-orange-500">JASONEX !</span>
        </h1>
      </div>
    </section>
  );
}