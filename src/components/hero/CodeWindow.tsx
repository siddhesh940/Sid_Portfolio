"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  {
    indent: 0,
    segments: [
      { text: "const ", color: "#c084fc" },
      { text: "developer", color: "#e2e8f0" },
      { text: " = {", color: "#e2e8f0" },
    ],
  },
  {
    indent: 1,
    segments: [
      { text: "name", color: "#93c5fd" },
      { text: ": ", color: "#e2e8f0" },
      { text: '"Siddhesh Patil"', color: "#86efac" },
      { text: ",", color: "#e2e8f0" },
    ],
  },
  {
    indent: 1,
    segments: [
      { text: "role", color: "#93c5fd" },
      { text: ": ", color: "#e2e8f0" },
      { text: '"AI + Full Stack Developer"', color: "#86efac" },
      { text: ",", color: "#e2e8f0" },
    ],
  },
  {
    indent: 1,
    segments: [
      { text: "skills", color: "#93c5fd" },
      { text: ": [", color: "#e2e8f0" },
    ],
  },
  {
    indent: 2,
    segments: [
      { text: '"React"', color: "#86efac" },
      { text: ", ", color: "#e2e8f0" },
      { text: '"Next.js"', color: "#86efac" },
      { text: ",", color: "#e2e8f0" },
    ],
  },
  {
    indent: 2,
    segments: [
      { text: '"Python"', color: "#86efac" },
      { text: ", ", color: "#e2e8f0" },
      { text: '"TypeScript"', color: "#86efac" },
    ],
  },
  { indent: 1, segments: [{ text: "],", color: "#e2e8f0" }] },
  {
    indent: 1,
    segments: [
      { text: "passion", color: "#93c5fd" },
      { text: ": ", color: "#e2e8f0" },
      { text: '"Building cool things"', color: "#fbbf24" },
    ],
  },
  { indent: 0, segments: [{ text: "};", color: "#e2e8f0" }] },
];

export default function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev >= codeLines.length ? prev : prev + 1));
    }, 350);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="w-full rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        background:
          "linear-gradient(145deg, rgba(15,23,42,0.97), rgba(30,27,75,0.97))",
        boxShadow:
          "0 0 30px rgba(99,102,241,0.12), 0 0 60px rgba(99,102,241,0.06), 0 15px 50px rgba(0,0,0,0.4)",
        border: "1px solid rgba(99,102,241,0.18)",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border-b border-slate-700/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[9px] text-slate-500 ml-2 font-mono">
          portfolio.tsx
        </span>
      </div>

      {/* Code area */}
      <div className="px-3 py-2.5 font-mono text-[10px] md:text-[11px] leading-[1.7] min-h-[140px]">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="flex gap-2"
            initial={{ opacity: 0, x: -8 }}
            animate={
              i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
            }
            transition={{ duration: 0.25 }}
          >
            <span className="text-slate-600 select-none w-3 text-right shrink-0">
              {i + 1}
            </span>
            <span style={{ paddingLeft: `${line.indent * 12}px` }}>
              {line.segments.map((seg, j) => (
                <span key={j} style={{ color: seg.color }}>
                  {seg.text}
                </span>
              ))}
            </span>
          </motion.div>
        ))}

        {/* Blinking cursor */}
        <motion.div
          className="flex gap-2 mt-0.5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="text-slate-600 select-none w-3 text-right shrink-0">
            {codeLines.length + 1}
          </span>
          <span className="w-1.5 h-3.5 bg-indigo-400 rounded-sm" />
        </motion.div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-indigo-600/15 border-t border-slate-700/40">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-slate-400">TypeScript React</span>
        </div>
        <span className="text-[8px] text-slate-500">UTF-8</span>
      </div>
    </motion.div>
  );
}
