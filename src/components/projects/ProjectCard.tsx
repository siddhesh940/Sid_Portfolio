"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { FiArrowRight, FiGithub, FiGlobe, FiMaximize2 } from "react-icons/fi";
import ProjectBadge from "./ProjectBadge";
import ProjectModal from "./ProjectModal";

export interface ProjectData {
  title: string;
  slug?: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  website: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Motion values for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        className="group relative flex flex-col h-full
                 rounded-xl overflow-hidden
                 border border-slate-200 dark:border-slate-700
                 bg-white dark:bg-slate-900/60
                 backdrop-blur
                 shadow-sm dark:shadow-none
                 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20
                 hover:scale-[1.03]
                 transition-all duration-300"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated glow border on hover */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 -z-10"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 blur-md" />
      </div>
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-r from-primary-500/30 via-purple-500/30 to-pink-500/30"
      />

      {/* Image with gradient border + zoom on hover */}
      <div className="p-2">
        <div
          className="relative aspect-video rounded-lg overflow-hidden
                      bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-[2px]"
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-700 ease-out
                         group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Dark overlay on hover for contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Scan line */}
            <div
              className="absolute inset-x-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ec-scanline pointer-events-none"
            />

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
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3
          className="text-lg font-bold text-gray-900 dark:text-white leading-snug
                       group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
        >
          {project.title}
        </h3>

        {/* Tech badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <ProjectBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                         border border-primary-500/30
                         text-primary-600 dark:text-primary-400
                         bg-primary-50 dark:bg-primary-900/20
                         hover:bg-primary-100 dark:hover:bg-primary-900/40
                         hover:shadow-lg hover:shadow-primary-500/20
                         transition-all duration-200"
            >
              <FiArrowRight className="w-4 h-4" />
              Case Study
            </Link>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       border border-slate-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       bg-white dark:bg-slate-800/50
                       hover:bg-slate-50 dark:hover:bg-slate-800
                       hover:border-primary-500/50
                       transition-all duration-200"
          >
            <FiGithub className="w-4 h-4" />
            Source
          </a>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       border border-slate-200 dark:border-slate-700
                       text-gray-700 dark:text-gray-300
                       bg-white dark:bg-slate-800/50
                       hover:bg-slate-50 dark:hover:bg-slate-800
                       transition-all duration-200"
          >
            <FiGlobe className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>

    <AnimatePresence>
      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </AnimatePresence>
    </>
  );
}
