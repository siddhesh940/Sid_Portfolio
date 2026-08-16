"use client";

import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiCpu,
  FiDownload,
  FiMapPin,
  FiTarget,
} from "react-icons/fi";
import ArchitectureFlow from "../components/about/ArchitectureFlow";

const RESUME_PATH = "/Resume/Siddhesh_Patil_Software_Developer.pdf";

const storySteps = [
  {
    title: "The Full-Stack Foundation",
    desc: "Started with the fundamentals — Python, JavaScript, SQL — and learned to build complete web applications with React, Next.js, Node.js and FastAPI.",
  },
  {
    title: "Into the AI Layer",
    desc: "Dived deep into Machine Learning, NLP and Generative AI — working hands-on with LLMs, LangChain and RAG to build AI-powered products.",
  },
  {
    title: "Real-World Engineering",
    desc: "Engineered a production workload-analysis pipeline that parses AWR/ASH database reports into structured insight, cutting manual analysis from hours to under 4 minutes.",
  },
  {
    title: "Building & Sharing",
    desc: "Continuously shipping personal projects, contributing to the developer community, and exploring how AI can be engineered into everyday software.",
  },
];

export default function AboutPageContent() {
  return (
    <main className="pt-16 md:pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-sm font-semibold text-slate-600 dark:text-slate-300"
          >
            <FiCpu className="w-4 h-4 text-primary-400" />
            AI + Full-Stack Software Developer
          </motion.div>
          <motion.h1
            className="mt-6 text-4xl md:text-5xl font-extrabold text-light-text dark:text-white text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From <span className="gradient-text">raw data</span> to deployed{" "}
            <span className="gradient-text">intelligence</span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m Siddhesh Patil — a Computer Engineering graduate who
            engineers full-stack software and AI-powered experiences, focused
            on building products that are reliable, measurable and genuinely
            useful.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="w-4 h-4 text-primary-400" /> Navi Mumbai,
              Maharashtra, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiBookOpen className="w-4 h-4 text-primary-400" /> B.E. Computer
              Engineering · University of Mumbai
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiAward className="w-4 h-4 text-primary-400" /> InnovGenius
              Ideathon 2026 Finalist
            </span>
          </motion.div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {storySteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="group p-6 rounded-2xl glass-panel hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500/15 border border-primary-400/30 text-sm font-mono font-bold text-primary-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-light-text dark:text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-6 text-slate-500 dark:text-slate-400 text-sm font-medium">
          <FiTarget className="w-4 h-4 text-primary-400" />
          <span className="font-mono">how_I_work()</span>
        </div>
        <ArchitectureFlow />
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       bg-gradient-to-r from-primary-500 to-purple-500 text-white
                       font-medium text-sm shadow-lg shadow-primary-500/25
                       hover:shadow-primary-500/40 hover:brightness-110 transition-all duration-200"
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}
