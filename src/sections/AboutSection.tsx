"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiCode, FiCpu, FiDatabase, FiServer, FiTarget } from "react-icons/fi";
import ArchitectureFlow from "../components/about/ArchitectureFlow";
import Link from "next/link";

const focusAreas = [
  {
    Icon: FiCode,
    title: "Full-Stack Engineering",
    desc: "Scalable web applications end-to-end with React, Next.js, Node.js and FastAPI.",
    color: "#22d3ee",
  },
  {
    Icon: FiCpu,
    title: "AI & Generative AI",
    desc: "LLM-powered features, RAG pipelines and NLP systems using OpenAI, LangChain and Python.",
    color: "#a78bfa",
  },
  {
    Icon: FiDatabase,
    title: "Data & Performance",
    desc: "Designing SQL schemas, and engineering workload analytics that turn raw data into insight.",
    color: "#34d399",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-light-text dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mt-3"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <FiServer className="w-4 h-4 text-primary-400" />
              <span className="font-mono">whoami</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
              I&apos;m <strong>Siddhesh Patil</strong>, a Computer Engineering
              graduate from the University of Mumbai who builds software across
              the entire stack — and increasingly at the AI layer.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
              My hands-on experience includes engineering production-grade
              full-stack applications with Python, JavaScript, TypeScript,
              React, Next.js, Node.js, FastAPI, SQL and Supabase — plus
              Generative AI systems with LLMs, LangChain and RAG.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              I care about clean architecture, measurable performance, and
              products that genuinely solve real-world problems. I&apos;m always
              exploring new ways to combine AI with solid software engineering.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {focusAreas.map(({ Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700/70 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm
                             hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                >
                  <Icon className="w-5 h-5 mb-2" style={{ color }} />
                  <div className="text-sm font-semibold text-light-text dark:text-white">
                    {title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engineering pipeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <FiTarget className="w-4 h-4 text-primary-400" />
              <span className="font-mono">engineering_pipeline()</span>
            </div>
            <ArchitectureFlow />
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-primary-400/20">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                From raw ideas to deployed products — I design and ship every
                layer of the stack, turning raw data into code, code into AI,
                and AI into insight.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 dark:text-primary-400 hover:gap-3 transition-all"
            >
              More about my journey <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
