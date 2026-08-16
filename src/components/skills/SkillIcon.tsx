"use client";

import { motion } from "framer-motion";
import { type IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  name: string;
  color?: string;
  active?: boolean | null;
  onActive?: (name: string | null) => void;
}

export default function SkillIcon({
  icon: Icon,
  name,
  color,
  active,
  onActive,
}: SkillIconProps) {
  const isActive = active === true;
  const isDimmed = active === false;

  return (
    <motion.div
      className={`group/icon relative flex items-center gap-2 px-2.5 py-1.5 rounded-lg
                 bg-slate-800/40 dark:bg-slate-800/50 border border-slate-700/50
                 transition-all duration-300
                 ${isActive ? "bg-slate-800/90 border-transparent" : ""}
                 ${isDimmed ? "opacity-40 saturate-50" : ""}
                 ${onActive ? "cursor-pointer" : ""}`}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={{
        boxShadow: isActive
          ? `0 0 16px ${color || "#6366f1"}44, 0 0 0 1px ${color || "#6366f1"}`
          : "0 0 0px 0px rgba(99,102,241,0)",
      }}
      onMouseEnter={(e) => {
        onActive?.(name);
        e.currentTarget.style.boxShadow = `0 0 16px ${color || "#6366f1"}2a`;
      }}
      onMouseLeave={(e) => {
        onActive?.(null);
        e.currentTarget.style.boxShadow = "0 0 0px 0px rgba(99,102,241,0)";
      }}
    >
      {/* Node connection dot */}
      <span
        className={`absolute -left-[3px] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
          isActive ? "ec-data" : "opacity-60"
        }`}
        style={{ background: color || "#6366f1" }}
      />
      <Icon
        className="text-base transition-transform duration-300 group-hover/icon:scale-110"
        style={{ color: color || "currentColor" }}
      />
      <span
        className={`text-[11px] font-medium whitespace-nowrap transition-colors duration-300 ${
          isActive ? "text-white" : "text-slate-300 group-hover/icon:text-white"
        }`}
      >
        {name}
      </span>
    </motion.div>
  );
}
