"use client";

import { motion } from "framer-motion";
import {
  FiBox,
  FiCpu,
  FiDatabase,
  FiMonitor,
  FiServer,
  FiUser,
} from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";

interface Layer {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  desc: string;
  chips: string[];
  color: string;
}

const layers: Layer[] = [
  {
    Icon: FiUser,
    name: "CLIENT",
    desc: "Browser, PWA and mobile entry points",
    chips: ["React", "Next.js"],
    color: "#fbbf24",
  },
  {
    Icon: FiMonitor,
    name: "EDGE / API",
    desc: "Routing, auth, validation, rate limiting",
    chips: ["Next.js API", "REST"],
    color: "#22d3ee",
  },
  {
    Icon: FiServer,
    name: "SERVICES",
    desc: "Business logic and integration layers",
    chips: ["Node.js", "FastAPI"],
    color: "#a78bfa",
  },
  {
    Icon: FiCpu,
    name: "AI / LLM",
    desc: "Prompting, RAG and model orchestration",
    chips: ["OpenAI", "LangChain"],
    color: "#34d399",
  },
  {
    Icon: FiDatabase,
    name: "DATA",
    desc: "Primary store, caching and analytics",
    chips: ["PostgreSQL", "Supabase", "MongoDB"],
    color: "#38bdf8",
  },
  {
    Icon: FiBox,
    name: "DEPLOY",
    desc: "Hosting, CI/CD and infrastructure",
    chips: ["Vercel", "Git", "Linux"],
    color: "#f472b6",
  },
];

export default function SystemArchitectureSection() {
  return (
    <section id="architecture" className="section-padding max-w-7xl mx-auto relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/4 w-[480px] h-[480px] rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative z-10">
        <SectionHeading
          label="System Architecture"
          title={
            <>
              I design <span className="gradient-text">complete systems</span>,
              not just pages
            </>
          }
          subtitle="One mental model — from the user's request down to the database and back. This is how a full-stack + AI product actually runs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* Narrative */}
          <motion.div
            className="hidden lg:block lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl glass-panel p-7">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase mb-4">
                <span className="w-6 h-px bg-cyan-400/60" />
                system.map
              </span>
              <h3 className="text-xl font-bold text-light-text dark:text-white">
                Every request crosses every layer.
              </h3>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I build with the whole path in mind — the user lands on a
                fast UI, the API guards the data, the AI layer adds context,
                and the database stays the source of truth. Each layer has a
                single responsibility and a clear contract.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {[
                  "Clear API contracts between layers",
                  "Auth and validation at the edge",
                  "Retrieval keeps model answers grounded",
                  "Observable from deploy to runtime",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Layer stack */}
          <div className="relative w-full max-w-xl mx-auto">
            {/* Spine */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-gradient-to-b from-amber-400/40 via-primary-400/50 to-pink-400/40" />
            <motion.div
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.65)]"
              animate={{ top: ["4%", "90%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="space-y-5">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  className="group relative flex items-center gap-4 rounded-2xl glass-panel p-4
                             hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/10
                             transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  {/* Status LED */}
                  <span
                    className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ec-data"
                    style={{
                      background: layer.color,
                      boxShadow: `0 0 8px ${layer.color}`,
                    }}
                  />

                  <div
                    className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${layer.color}1a`,
                      color: layer.color,
                      border: `1px solid ${layer.color}33`,
                    }}
                  >
                    <layer.Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono font-bold tracking-widest"
                        style={{ color: layer.color }}
                      >
                        {layer.name}
                      </span>
                      <span className="text-[10px] text-slate-400/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {layer.desc}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {layer.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-md
                                     border border-slate-300/70 dark:border-slate-700/70
                                     text-slate-600 dark:text-slate-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right rail annotation */}
          <motion.div
            className="hidden lg:block lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-dashed border-primary-400/30 bg-primary-500/5 p-6 space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-primary-400 uppercase">
                data_flow
              </span>
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400 space-y-2.5">
                <p>user → edge → services</p>
                <p>services → ai → context</p>
                <p>context → database</p>
                <p>answer → user ▲</p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                Request path down · response path up. One coherent system.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
