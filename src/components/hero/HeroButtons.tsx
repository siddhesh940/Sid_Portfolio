"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

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
                   bg-indigo-600 hover:bg-indigo-700
                   text-white font-medium text-sm
                   shadow-lg shadow-indigo-500/25
                   hover:shadow-indigo-500/40
                   transition-all duration-200"
      >
        View My Projects
        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      <a
        href="/Resume/Siddhesh_Patil_Resume.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 rounded-lg
                   border border-slate-600
                   text-gray-300 font-medium text-sm
                   hover:bg-slate-800 hover:text-white hover:border-slate-500
                   transition-all duration-200"
      >
        <FiDownload className="w-4 h-4" />
        Download Resume
      </a>
    </motion.div>
  );
}
