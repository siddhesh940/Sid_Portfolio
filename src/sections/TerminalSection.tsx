"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";

const command = "$ build()";

const logLines = [
  { text: "initializing application...", className: "text-slate-400" },
  { text: "✓ frontend connected", className: "text-emerald-400" },
  { text: "✓ backend connected", className: "text-emerald-400" },
  { text: "✓ database connected", className: "text-emerald-400" },
  { text: "✓ AI service connected", className: "text-emerald-400" },
  { text: "✓ deployment ready", className: "text-emerald-400" },
];

export default function TerminalSection() {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState("");
  const [lineCount, setLineCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setTyped(command);
      setLineCount(logLines.length);
      setDone(true);
      return;
    }

    let charIndex = 0;
    const typeTimer = window.setInterval(() => {
      charIndex += 1;
      setTyped(command.slice(0, charIndex));
      if (charIndex >= command.length) {
        window.clearInterval(typeTimer);
        setDone(true);
      }
    }, 110);

    return () => window.clearInterval(typeTimer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!done || reduceMotion) return;

    let count = 0;
    const lineTimer = window.setInterval(() => {
      count += 1;
      setLineCount(count);
      if (count >= logLines.length) window.clearInterval(lineTimer);
    }, 260);

    return () => window.clearInterval(lineTimer);
  }, [done, reduceMotion]);

  return (
    <section id="terminal" className="section-padding max-w-7xl mx-auto relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
        <div className="absolute inset-0 bg-grid-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          align="center"
          label="Workspace"
          title={
            <>
              A look inside the <span className="gradient-text">build</span>
            </>
          }
          subtitle="A visual representation of my engineering workflow — every service wired before anything ships."
        />

        <motion.div
          className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-primary-500/5"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-900 border-b border-slate-800">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400">
              SIDDESH.DEV / WORKSPACE
            </span>
            <span className="ml-auto hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              bash
            </span>
          </div>

          {/* Body */}
          <div className="bg-slate-950/90 p-5 md:p-7 font-mono text-sm leading-7 min-h-[300px]">
            {/* Prompt + typed command */}
            <div className="flex items-center gap-2 text-slate-200">
              <span className="text-primary-400">siddhesh@dev</span>
              <span className="text-slate-500">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-slate-400">$</span>
              <span className="text-slate-100">{typed}</span>
              <span className="w-2.5 h-5 bg-primary-400 ec-caret" />
            </div>

            {/* Log lines */}
            {logLines.slice(0, lineCount).map((line) => (
              <motion.p
                key={line.text}
                className={line.className}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {line.text}
              </motion.p>
            ))}

            {done && lineCount >= logLines.length && (
              <motion.p
                className="mt-3 text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-slate-400">$</span>{" "}
                <span className="text-slate-300">system_online</span> — ready to
                ship <span className="text-primary-400">→</span>
                <span className="w-2.5 h-5 bg-primary-400 ec-caret inline-block ml-1 align-middle" />
              </motion.p>
            )}
          </div>
        </motion.div>

        <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 font-mono">
          {`// visual representation of the engineering workflow — not a live terminal`}
        </p>
      </div>
    </section>
  );
}
