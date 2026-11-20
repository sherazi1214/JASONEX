/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        panel: "#121214",
        sun: "#FF7A1A",
        sun2: "#FFB020",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        waPulse: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "wa-pulse-1": "waPulse 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "wa-pulse-2": "waPulse 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.6s",
      },
    },
  },
  plugins: [],
};
