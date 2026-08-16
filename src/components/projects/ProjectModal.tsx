"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiGithub,
  FiGlobe,
  FiMaximize2,
  FiMinimize2,
  FiX,
} from "react-icons/fi";
import ProjectBadge from "./ProjectBadge";
import type { ProjectData } from "./ProjectCard";

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [zoomed, setZoomed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoomed(true);
      if (e.key === "-") setZoomed(false);
    },
    [onClose],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — project preview`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900 shadow-2xl shadow-primary-500/10"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-800">
          <div className="flex items-center gap-3 min-w-0">
            <h3 className="text-sm font-bold text-white truncate">
              {project.title}
            </h3>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              preview
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                         border border-slate-700 text-slate-300
                         hover:bg-slate-800 hover:text-white transition-colors duration-200"
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
            >
              {zoomed ? (
                <FiMinimize2 className="w-3.5 h-3.5" />
              ) : (
                <FiMaximize2 className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">{zoomed ? "Zoom out" : "Zoom in"}</span>
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg
                         border border-slate-700 text-slate-300
                         hover:bg-slate-800 hover:text-white hover:border-red-500/50
                         transition-colors duration-200"
              aria-label="Close preview"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className={`relative bg-slate-950 transition-[padding] duration-300 ${
            zoomed ? "overflow-auto p-2" : "overflow-hidden p-3 sm:p-5"
          }`}
        >
          <div
            className={`relative transition-transform duration-300 ${
              zoomed ? "scale-[1.9] cursor-zoom-out" : "cursor-zoom-in"
            }`}
            style={{ transformOrigin: "center center" }}
            onClick={() => setZoomed((z) => !z)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            {project.techStack.map((tech) => (
              <ProjectBadge key={tech} label={tech} />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {project.slug && (
              <Link
                href={`/projects/${project.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg
                           bg-gradient-to-r from-primary-500 to-purple-500 text-white
                           shadow-lg shadow-primary-500/25 hover:brightness-110
                           transition-all duration-200"
              >
                View Case Study
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg
                         border border-slate-700 text-slate-300
                         hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <FiGithub className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg
                         border border-slate-700 text-slate-300
                         hover:bg-slate-800 hover:text-white transition-colors duration-200"
            >
              <FiGlobe className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>

          <p className="mt-3 text-[10px] text-slate-500 font-mono">
            ESC to close · click image or + / − to zoom · click backdrop to dismiss
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
