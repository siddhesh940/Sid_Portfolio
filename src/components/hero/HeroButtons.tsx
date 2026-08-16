"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const RESUME_PATH = "/Resume/Siddhesh_Patil_Software_Developer.pdf";

export default function HeroButtons() {
  return (
    <motion.div
      className="mt-10 flex flex-wrap items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <Link
        href="#projects"
        className="group flex items-center gap-2 px-6 py-3 rounded-lg
                   bg-gradient-to-r from-indigo-600 to-purple-600
                   text-white font-medium text-sm
                   shadow-lg shadow-indigo-500/25
                   hover:shadow-indigo-500/40 hover:brightness-110
                   transition-all duration-200"
      >
        View Projects
        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      <a
        href={RESUME_PATH}
        download
        className="group flex items-center gap-2 px-6 py-3 rounded-lg
                   border border-slate-500/60
                   text-slate-300 font-medium text-sm
                   hover:bg-slate-800/80 hover:text-white hover:border-primary-400/60
                   hover:shadow-lg hover:shadow-primary-500/10
                   transition-all duration-200"
      >
        <FiDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        View Resume
      </a>
    </motion.div>
  );
}
