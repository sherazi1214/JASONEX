"use client";

import { motion } from "framer-motion";

const points = [
  { month: "M1", value: 20 },
  { month: "M2", value: 30 },
  { month: "M3", value: 38 },
  { month: "M4", value: 55 },
  { month: "M5", value: 72 },
  { month: "M6", value: 92 },
];

const width = 560;
const height = 220;
const maxVal = 100;

function getPath() {
  const stepX = width / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * stepX;
      const y = height - (p.value / maxVal) * height;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

export default function RankingChart() {
  const path = getPath();
  const stepX = width / (points.length - 1);

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height + 30}`} className="w-full max-w-2xl mx-auto">
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            x2={width}
            y1={(height / 3) * i}
            y2={(height / 3) * i}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* Animated line */}
        <motion.path
          d={path}
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {/* Fill under line */}
        <motion.path
          d={`${path} L${width},${height} L0,${height} Z`}
          fill="url(#orangeGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <defs>
          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Points + labels */}
        {points.map((p, i) => {
          const x = i * stepX;
          const y = height - (p.value / maxVal) * height;
          return (
            <g key={p.month}>
              <motion.circle
                cx={x}
                cy={y}
                r="5"
                fill="#f97316"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.2 }}
              />
              <text
                x={x}
                y={height + 22}
                textAnchor="middle"
                fontSize="12"
                fill="rgba(255,255,255,0.4)"
              >
                {p.month}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}