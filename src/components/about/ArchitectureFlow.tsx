"use client";

import { motion } from "framer-motion";
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiServer,
  FiZap,
} from "react-icons/fi";

const pipeline = [
  {
    Icon: FiCode,
    label: "Frontend",
    desc: "React & Next.js UIs",
    color: "#22d3ee",
  },
  {
    Icon: FiServer,
    label: "Backend",
    desc: "Node.js & FastAPI",
    color: "#a78bfa",
  },
  {
    Icon: FiZap,
    label: "APIs",
    desc: "REST endpoints",
    color: "#f472b6",
  },
  {
    Icon: FiCpu,
    label: "AI / ML",
    desc: "LLMs, RAG, NLP",
    color: "#34d399",
  },
  {
    Icon: FiDatabase,
    label: "Database",
    desc: "SQL & PostgreSQL",
    color: "#38bdf8",
  },
  {
    Icon: FiCloud,
    label: "Deployment",
    desc: "Vercel & Linux",
    color: "#fbbf24",
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="relative">
      {/* Connection line (desktop) */}
      <div className="hidden md:block absolute top-1/2 left-[8%] right-[8%] -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-2">
        {pipeline.map(({ Icon, label, desc, color }, i) => (
          <motion.div
            key={label}
            className="group relative flex flex-col items-center gap-3 px-3 py-6 rounded-2xl glass-panel text-center
                       transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ scale: 1.04 }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg"
              style={{
                background: `rgba(15,23,42,0.6)`,
                border: `1px solid ${color}44`,
                boxShadow: `0 0 18px ${color}1a`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div>
              <div
                className="text-sm font-semibold"
                style={{ color }}
              >
                {label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {desc}
              </div>
            </div>

            {/* Step number badge */}
            <span className="absolute top-2 left-2 text-[9px] font-mono text-slate-400/70">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Animated signal traveling the pipeline (desktop) */}
      <div className="hidden md:block absolute top-1/2 left-[8%] -translate-y-1/2 w-full pointer-events-none overflow-hidden">
        <motion.div
          className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
          animate={{ x: ["0vw", "84vw"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
