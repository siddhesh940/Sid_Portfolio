"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Beat {
  id: string;
  num: string;
  label: string;
}

const beats: Beat[] = [
  { id: "hero", num: "00", label: "WELCOME" },
  { id: "about", num: "01", label: "WHO I AM" },
  { id: "skills", num: "02", label: "WHAT I BUILD" },
  { id: "engineer", num: "03", label: "HOW I ENGINEER" },
  { id: "ai-stack", num: "04", label: "AI + FULL STACK" },
  { id: "projects", num: "05", label: "SELECTED WORK" },
  { id: "experience", num: "06", label: "EXPERIENCE" },
  { id: "education", num: "07", label: "EDUCATION" },
  { id: "achievements", num: "08", label: "RECOGNITION" },
  { id: "final-cta", num: "09", label: "LET'S BUILD" },
];

const glows = [
  "rgba(99,102,241,0.13)",
  "rgba(129,140,248,0.12)",
  "rgba(34,211,238,0.11)",
  "rgba(168,85,247,0.11)",
  "rgba(52,211,153,0.10)",
  "rgba(244,114,182,0.09)",
  "rgba(251,191,36,0.09)",
  "rgba(56,189,248,0.11)",
  "rgba(251,146,60,0.09)",
  "rgba(34,211,238,0.12)",
];

export default function ScrollStory() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = beats
      .map((beat) => document.getElementById(beat.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = beats.findIndex(
              (beat) => beat.id === entry.target.id,
            );
            if (index !== -1) setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Subtle background tint that shifts as the story progresses */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-1000"
        style={{
          background: `radial-gradient(60% 45% at 50% 15%, ${
            glows[active]
          } 0%, transparent 70%)`,
        }}
      />

      {/* Story rail (desktop only) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
        {/* Current beat */}
        <div className="text-center">
          <div className="text-2xl font-mono font-extrabold text-primary-500 dark:text-primary-400 leading-none">
            {beats[active].num}
          </div>
          <div className="mt-1 text-[9px] font-mono font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
            {beats[active].label}
          </div>
        </div>

        {/* Progress line */}
        <div className="relative h-28 w-px bg-slate-200 dark:bg-slate-700/60 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary-500 to-cyan-400"
            animate={{
              height: `${((active + 1) / beats.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Beat dots */}
        <div className="flex flex-col gap-2.5">
          {beats.map((beat, i) => (
            <a
              key={beat.id}
              href={`#${beat.id}`}
              aria-label={`Go to ${beat.label}`}
              className="group flex items-center justify-end gap-2.5"
            >
              <span
                className={`text-[9px] font-mono tracking-widest uppercase transition-colors duration-300 ${
                  i === active
                    ? "text-primary-400"
                    : "text-slate-400/80 opacity-0 group-hover:opacity-100"
                }`}
              >
                {beat.num}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-cyan-400 scale-125 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    : "bg-slate-400/70 group-hover:bg-primary-400/70 group-hover:scale-110"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
