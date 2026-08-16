"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const RESUME_PATH = "/Resume/Siddhesh_Patil_Software_Developer.pdf";

const identity = ["AI", "FULL STACK", "SOFTWARE ENGINEERING"];

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden section-padding flex items-center justify-center"
    >
      {/* Animated engineering background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[720px] h-[720px]">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-px h-px rounded-full bg-primary-400/50"
                style={{ boxShadow: "0 0 6px rgba(99,102,241,0.8)" }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  translateX: 0,
                  translateY: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 5 + i * 0.8,
                  repeat: Infinity,
                  delay: i * 1.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-mono font-bold tracking-widest text-primary-500 dark:text-primary-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ec-data" />
            open to opportunities
          </span>

          <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-balance text-light-text dark:text-white">
            LET&apos;S BUILD SOMETHING{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              INTELLIGENT.
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Have a product, an idea, or a hard engineering problem? I build
            software where interfaces, backend systems and intelligent models
            work together.
          </p>
        </motion.div>

        {/* Identity chips */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {identity.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-sm font-semibold
                         text-slate-600 dark:text-slate-300"
            >
              {item}
              {i < identity.length - 1 && (
                <span className="text-primary-400">•</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href={RESUME_PATH}
            download
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg
                       bg-gradient-to-r from-indigo-600 to-purple-600 text-white
                       font-semibold text-sm shadow-lg shadow-indigo-500/25
                       hover:shadow-indigo-500/40 hover:brightness-110
                       transition-all duration-200"
          >
            <FiDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            View Resume
          </a>
          <a
            href="https://github.com/siddhesh940"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                       border border-slate-300 dark:border-slate-700
                       text-slate-700 dark:text-slate-300 font-medium text-sm
                       hover:bg-slate-100 dark:hover:bg-slate-800
                       hover:border-primary-400/50 transition-all duration-200"
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/siddhesh-patil-268b96311/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                       border border-slate-300 dark:border-slate-700
                       text-slate-700 dark:text-slate-300 font-medium text-sm
                       hover:bg-slate-100 dark:hover:bg-slate-800
                       hover:border-primary-400/50 transition-all duration-200"
          >
            <FiLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg
                       border border-slate-300 dark:border-slate-700
                       text-slate-700 dark:text-slate-300 font-medium text-sm
                       hover:bg-slate-100 dark:hover:bg-slate-800
                       hover:border-primary-400/50 transition-all duration-200"
          >
            <FiMail className="w-4 h-4" />
            Contact
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
