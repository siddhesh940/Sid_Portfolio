"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiGitMerge,
  FiLayers,
  FiSearch,
  FiShield,
  FiUploadCloud,
} from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";

interface EngineerStep {
  num: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  desc: string;
  log: string;
  color: string;
}

const steps: EngineerStep[] = [
  {
    num: "01",
    title: "Understand",
    Icon: FiSearch,
    desc: "Map the problem, constraints and success criteria before writing a single line of code.",
    log: "> scope resolved · spec pinned",
    color: "#22d3ee",
  },
  {
    num: "02",
    title: "Architect",
    Icon: FiLayers,
    desc: "Design data models, API contracts and system boundaries that stay clean as the product grows.",
    log: "> schema + API contracts drafted",
    color: "#a78bfa",
  },
  {
    num: "03",
    title: "Build",
    Icon: FiCode,
    desc: "Ship typed, readable, maintainable code across frontend, backend and AI layers.",
    log: "> modules compiled · 0 errors",
    color: "#34d399",
  },
  {
    num: "04",
    title: "Integrate",
    Icon: FiGitMerge,
    desc: "Wire services together — UI, REST APIs, LLM calls, RAG pipelines and databases.",
    log: "> connected: app ↔ api ↔ ai ↔ db",
    color: "#f472b6",
  },
  {
    num: "05",
    title: "Test",
    Icon: FiShield,
    desc: "Validate edge cases, API responses and model outputs so the system behaves predictably.",
    log: "> test suite: all passing",
    color: "#fbbf24",
  },
  {
    num: "06",
    title: "Deploy",
    Icon: FiUploadCloud,
    desc: "Ship to production with monitoring, then measure real usage and iterate quickly.",
    log: "> deploy: vercel · live ✓",
    color: "#38bdf8",
  },
];

export default function HowIEngineerSection() {
  return (
    <section
      id="engineer"
      className="section-padding max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background engineering grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 dark:opacity-15 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="relative z-10">
        <SectionHeading
          number="03"
          label="How I Engineer"
          title={
            <>
              A disciplined path from{" "}
              <span className="gradient-text">problem</span> to{" "}
              <span className="gradient-text">production</span>
            </>
          }
          subtitle="Every product I build follows a repeatable engineering loop — no matter the stack."
        />

        {/* Connecting line behind the grid (desktop) */}
        <div className="hidden lg:block absolute top-[46%] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary-400/25 to-transparent -z-0" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="group relative p-6 rounded-2xl glass-panel overflow-hidden
                         hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/10
                         transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              {/* Watermark number */}
              <span
                className="absolute top-3 right-5 text-4xl font-mono font-extrabold select-none
                           text-slate-900/5 dark:text-white/5"
              >
                {step.num}
              </span>

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl
                           transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${step.color}1a`,
                  color: step.color,
                  border: `1px solid ${step.color}33`,
                }}
              >
                <step.Icon className="w-5 h-5" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-light-text dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Hover log line */}
              <p
                className="mt-4 font-mono text-xs opacity-0 translate-y-1
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-300"
                style={{ color: step.color }}
              >
                {step.log}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
