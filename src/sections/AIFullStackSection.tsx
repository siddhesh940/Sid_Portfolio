"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCpu,
  FiDatabase,
  FiMonitor,
  FiServer,
  FiUser,
  FiZap,
} from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";

interface FlowNode {
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
  desc: string;
  chips: string[];
  color: string;
}

const requestFlow: FlowNode[] = [
  {
    Icon: FiUser,
    label: "USER",
    desc: "asks a question from the app",
    chips: [],
    color: "#fbbf24",
  },
  {
    Icon: FiMonitor,
    label: "APPLICATION",
    desc: "Next.js interface renders and sends the request",
    chips: ["Next.js", "React", "TypeScript"],
    color: "#22d3ee",
  },
  {
    Icon: FiServer,
    label: "API",
    desc: "typed REST endpoints guard the layer",
    chips: ["FastAPI", "REST APIs"],
    color: "#a78bfa",
  },
  {
    Icon: FiCpu,
    label: "AI MODEL",
    desc: "LLM reasoning grounded in safe context",
    chips: ["OpenAI", "GPT-4"],
    color: "#34d399",
  },
  {
    Icon: FiBookOpen,
    label: "RAG / CONTEXT",
    desc: "retrieval grounds the answer in real data",
    chips: ["LangChain", "Embeddings"],
    color: "#f472b6",
  },
  {
    Icon: FiDatabase,
    label: "DATABASE",
    desc: "source of truth powers the context",
    chips: ["Supabase", "PostgreSQL"],
    color: "#38bdf8",
  },
];

const stackTags = [
  "OpenAI",
  "GPT-4",
  "LangChain",
  "RAG",
  "FastAPI",
  "Next.js",
  "Supabase",
  "PostgreSQL",
];

export default function AIFullStackSection() {
  return (
    <section id="ai-stack" className="section-padding max-w-7xl mx-auto relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10">
        <SectionHeading
          number="04"
          label="AI + Full Stack"
          title={
            <>
              Where <span className="gradient-text">software</span> meets{" "}
              <span className="gradient-text">intelligence</span>
            </>
          }
          subtitle="Full-stack engineering and AI are one system — every request travels an end-to-end intelligence pipeline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: narrative + stack ── */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl glass-panel p-7 md:p-9">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-4">
                <span className="w-6 h-px bg-emerald-400/60" />
                ai_stack.runtime
              </span>
              <h3 className="text-2xl font-bold text-light-text dark:text-white leading-snug">
                I don&apos;t bolt AI onto the frontend. I engineer it into the{" "}
                <span className="gradient-text">entire stack</span>.
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                From the UI the user touches to the API contract, the model
                call, the retrieval layer and the database behind it — every
                layer is designed together so AI features behave like native
                product features.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {stackTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium
                               border border-slate-300 dark:border-slate-700
                               bg-white dark:bg-slate-800/60
                               text-slate-700 dark:text-slate-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: request → response pipeline ── */}
          <div className="relative">
            {/* Request pulse traveling down */}
            <div className="pointer-events-none absolute left-[13px] top-4 bottom-4 w-px bg-gradient-to-b from-primary-400/50 via-cyan-400/40 to-emerald-400/40" />
            <motion.div
              className="pointer-events-none absolute left-[9px] w-[9px] h-[9px] rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
              animate={{ top: ["6%", "86%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="space-y-4">
              {requestFlow.map((node, i) => {
                const last = i === requestFlow.length - 1;
                return (
                  <motion.div
                    key={node.label}
                    className={`group relative flex items-start gap-4 pl-9 ${
                      last ? "pb-2" : "pb-1"
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    {/* Node dot */}
                    <div
                      className="absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: `${node.color}1a`,
                        border: `1px solid ${node.color}55`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full ec-data"
                        style={{ background: node.color }}
                      />
                    </div>

                    <div className="flex-1 rounded-xl glass-panel p-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-primary-500/10">
                      <div className="flex items-center gap-2.5">
                        <node.Icon
                          className="w-4 h-4"
                          style={{ color: node.color }}
                        />
                        <span
                          className="text-xs font-mono font-bold tracking-widest"
                          style={{ color: node.color }}
                        >
                          {node.label}
                        </span>
                        {i < requestFlow.length - 1 && (
                          <span className="ml-auto text-slate-500/70 text-xs">
                            ↓
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                        {node.desc}
                      </p>
                      {node.chips.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {node.chips.map((chip) => (
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
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Response return line */}
              <motion.div
                className="flex items-start gap-4 pl-9 mt-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.6 }}
              >
                <div className="absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center bg-primary-500/15 border border-primary-400/50">
                  <FiZap className="w-3 h-3 text-primary-400" />
                </div>
                <div className="flex-1 rounded-xl border border-dashed border-primary-400/40 bg-primary-500/5 p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-primary-400">
                      RESPONSE
                    </span>
                    <span className="ml-auto text-primary-400/80 text-xs">
                      ↑ streamed to user
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                    Context-grounded answer flows back up the stack and renders
                    instantly in the UI.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
