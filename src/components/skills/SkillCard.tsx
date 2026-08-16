"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  index?: number;
  accent?: string;
  module?: string;
  dimmed?: boolean;
  active?: boolean;
}

export default function SkillCard({
  title,
  icon,
  children,
  index = 0,
  accent = "#6366f1",
  module,
  dimmed = false,
  active = false,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className={`group relative h-full transition-all duration-500 ${
        dimmed ? "opacity-40 saturate-50" : ""
      }`}
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-indigo-400 via-purple-500/50 to-indigo-600/30
                    blur-[2px] transition-opacity duration-500 pointer-events-none"
        style={{ opacity: active ? 1 : undefined }}
      />

      <div
        className={`relative rounded-xl h-full
                    border-slate-700/60
                    bg-slate-800/50 backdrop-blur-sm
                    p-5
                    transition-all duration-500
                    ${
                      active
                        ? "border-transparent bg-slate-800/80 shadow-lg shadow-primary-500/10"
                        : "border group-hover:border-indigo-500/30 group-hover:bg-slate-800/70"
                    }`}
        style={active ? { borderColor: `${accent}66` } : undefined}
      >
        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-4">
          <span
            className="text-[10px] font-mono font-bold tracking-widest"
            style={{ color: `${accent}aa` }}
          >
            {module || String(index + 1).padStart(2, "0")}
          </span>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-lg
                        transition-all duration-300"
            style={{
              background: `${accent}1a`,
              color: accent,
              border: `1px solid ${accent}33`,
            }}
          >
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-100">{title}</h3>
        </div>

        {/* Card body */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
