"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiGithub, FiGlobe, FiMaximize2 } from "react-icons/fi";
import ProjectBadge from "./ProjectBadge";
import ProjectModal from "./ProjectModal";
import type { ProjectData } from "./ProjectCard";

interface FeaturedProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const reversed = index % 2 === 1;
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden
                 border border-slate-200 dark:border-slate-700/70
                 bg-white dark:bg-slate-900/50 backdrop-blur
                 shadow-lg shadow-black/5 dark:shadow-black/30
                 hover:shadow-2xl hover:shadow-primary-500/15
                 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      aria-label={`${project.title} featured project`}
    >
      {/* Image side */}
      <div className={`relative aspect-video lg:aspect-auto lg:min-h-[300px] ${reversed ? "lg:order-2" : ""}`}>
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Subtle gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Scan line */}
        <div className="absolute inset-x-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ec-scanline pointer-events-none" />

        {/* Open preview */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Open ${project.title} project preview`}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-slate-950/70 backdrop-blur border border-cyan-400/30
                         text-xs font-semibold tracking-wide text-cyan-300
                         opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                         transition-all duration-300">
            <FiMaximize2 className="w-3.5 h-3.5" />
            EXPLORE PROJECT
            <FiArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>

      {/* Content side */}
      <div className={`relative p-6 md:p-8 flex flex-col justify-center ${reversed ? "lg:order-1" : ""}`}>
        <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-primary-500 dark:text-primary-400 uppercase mb-3">
          <span className="w-6 h-px bg-primary-400/60" />
          Featured Project
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white leading-tight">
          {project.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <ProjectBadge key={tech} label={tech} />
          ))}
        </div>

        <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg
                         bg-gradient-to-r from-primary-500 to-purple-500 text-white
                         shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40
                         hover:brightness-110 transition-all duration-200"
            >
              Case Study
              <FiArrowRight className="w-4 h-4" />
            </Link>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg
                       border border-slate-300 dark:border-slate-700
                       text-slate-700 dark:text-slate-300
                       hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-primary-400/50
                       transition-all duration-200"
          >
            <FiGithub className="w-4 h-4" />
            Source
          </a>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg
                       border border-slate-300 dark:border-slate-700
                       text-slate-700 dark:text-slate-300
                       hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-primary-400/50
                       transition-all duration-200"
          >
            <FiGlobe className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.article>

    <AnimatePresence>
      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </AnimatePresence>
    </>
  );
}
