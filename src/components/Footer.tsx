"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiHeart, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/siddhesh940", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/siddhesh-patil-268b96311/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Siddhesh_Patil_/",
    label: "LeetCode",
  },
  {
    icon: FiMail,
    href: "mailto:patilsiddhesh2810@gmail.com",
    label: "Email",
  },
];

const pipeline = ["RAW DATA", "CODE", "AI", "INSIGHT", "PRODUCT"];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden">
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-light-text dark:text-white">&lt;</span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold italic">
                  {" "}
                  Siddhesh Patil{" "}
                </span>
                <span className="text-light-text dark:text-white">/&gt;</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              AI + Full-Stack Software Developer engineering intelligent,
              scalable software and AI-powered experiences.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <FiMapPin className="w-3.5 h-3.5" />
              <span>Navi Mumbai, India</span>
            </div>
          </div>

          {/* Pipeline tagline */}
          <div className="hidden md:flex flex-col justify-center items-center gap-3">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary-500 dark:text-primary-400 uppercase">
              engineering pipeline
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {pipeline.map((step, i) => (
                <motion.span
                  key={step}
                  className="px-2.5 py-1 rounded-md glass-panel text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400"
                  whileHover={{ scale: 1.08, color: "#818cf8" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step}
                  {i < pipeline.length - 1 && (
                    <span className="ml-2 text-primary-400">→</span>
                  )}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center
                             bg-slate-100 dark:bg-slate-800
                             text-gray-600 dark:text-gray-400
                             hover:bg-primary-500/10 hover:text-primary-500
                             dark:hover:bg-primary-500/10 dark:hover:text-primary-400
                             border border-slate-200 dark:border-slate-700
                             transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              patilsiddhesh2810@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Siddhesh Patil. Built with{" "}
            <FiHeart className="w-3.5 h-3.5 text-red-500" /> using Next.js &
            Tailwind CSS.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Designed &amp; Developed by Siddhesh Patil
          </p>
        </div>
      </div>
    </footer>
  );
}
