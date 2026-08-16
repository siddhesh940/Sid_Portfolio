"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  number,
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      className={`mb-12 ${centered ? "flex flex-col items-center text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {(number || label) && (
        <div
          className={`inline-flex items-center gap-3 text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-4 ${
            centered ? "justify-center" : ""
          } text-primary-500 dark:text-primary-400`}
        >
          {number && (
            <span className="text-base font-bold leading-none">{number}</span>
          )}
          {label && (
            <>
              <span className="h-px w-8 bg-primary-400/50" />
              <span>{label}</span>
            </>
          )}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-white text-balance">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`w-20 h-1 rounded-full mt-5 ec-title-line ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
