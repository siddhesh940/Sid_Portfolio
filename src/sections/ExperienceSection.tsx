"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiExternalLink, FiGithub, FiMapPin } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";

interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;
  points: string[];
  deployment?: string;
  github?: string;
}

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    company: "Mauli Infotech (OPC) Pvt. Ltd.",
    role: "Software Developer Intern",
    duration: "Dec 2025 – Feb 2026",
    location: "Navi Mumbai, Maharashtra",
    logo: "/Experience/mauli_infotech_opc_private_limited_logo.jpg",
    points: [
      "Engineered a Python-based workload analysis pipeline using FastAPI, Pandas and BeautifulSoup to parse AWR/ASH reports into structured data, reducing manual SQL workload analysis from hours to under 4 minutes.",
      "Developed automated high-load detection and Root Cause Analysis (RCA) modules to analyze top SQL, wait events, CPU/IO workload and identify performance bottlenecks across database workloads.",
      "Built backend APIs and an interactive dashboard for processing workload results, visualizing database performance and helping DBAs identify problematic SQL and prioritize tuning actions.",
    ],
    deployment: "https://db-guardian-ai.vercel.app/",
    github: "https://github.com/siddhesh940/DBGuardian-AI.git",
  },
  {
    id: 2,
    company: "Prodigy Infotech",
    role: "Web Development Intern",
    duration: "Jan 2025 – Feb 2025",
    location: "Remote",
    logo: "/Experience/Prodigy_logo.png",
    points: [
      "Worked on multiple real-world web development tasks using HTML, CSS, JavaScript and React, focusing on responsive design and UI/UX improvements.",
      "Developed user-interactive modules such as landing pages, dynamic web apps, and UI components as per task requirements.",
    ],
    github: "https://github.com/siddhesh940/PRODIGY_WD_Tasks.git",
  },
];

function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  return (
    <motion.div
      className="relative pl-8 md:pl-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-2 w-4 h-4 rounded-full
                    bg-primary-500 border-4 border-slate-900
                    shadow-[0_0_12px_rgba(99,102,241,0.5)]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          delay: index * 0.15 + 0.2,
        }}
      />

      {/* Card */}
      <div
        className="group rounded-xl p-5 md:p-6
                    border border-slate-200 dark:border-slate-700
                    bg-white dark:bg-slate-900/60
                    backdrop-blur
                    shadow-sm dark:shadow-none
                    hover:shadow-lg dark:hover:shadow-primary-500/5
                    hover:border-primary-500/30
                    hover:-translate-y-1
                    transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div
            className="flex-shrink-0 w-32 h-32 rounded-xl bg-white dark:bg-white
                        flex items-center justify-center overflow-hidden
                        border border-gray-100 dark:border-slate-600
                        shadow-sm p-2"
          >
            <Image
              src={entry.logo}
              alt={entry.company}
              width={112}
              height={112}
              className="object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {entry.company}
              </h3>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full
                            bg-primary-50 dark:bg-primary-900/30
                            text-primary-700 dark:text-primary-300
                            border border-primary-200/50 dark:border-primary-700/30
                            whitespace-nowrap"
              >
                <FiCalendar className="w-3 h-3" />
                {entry.duration}
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                {entry.role}
              </p>
              {index === 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-green-500/15 text-green-500 border border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Recent
                </span>
              )}
            </div>
            <p className="mt-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <FiMapPin className="w-3 h-3" />
              {entry.location}
            </p>
          </div>
        </div>

        {/* Points */}
        <ul className="mt-4 space-y-2">
          {entry.points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Links */}
        {(entry.deployment || entry.github) && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
            {entry.github && (
              <a
                href={entry.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg
                           border border-slate-200 dark:border-slate-700
                           text-gray-700 dark:text-gray-300
                           hover:bg-slate-50 dark:hover:bg-slate-800
                           transition-colors duration-200"
              >
                <FiGithub className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {entry.deployment && (
              <a
                href={entry.deployment}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg
                           border border-primary-500/30
                           text-primary-600 dark:text-primary-400
                           hover:bg-primary-50 dark:hover:bg-primary-900/20
                           transition-colors duration-200"
              >
                <FiExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="max-w-7xl mx-auto px-2">
        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent" />
          <div className="space-y-8">
            {experiences.map((entry, i) => (
              <ExperienceCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
