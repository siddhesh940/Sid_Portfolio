"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import HeroAnimation from "../components/hero/HeroAnimation";
import HeroButtons from "../components/hero/HeroButtons";
import HeroSocialIcons from "../components/hero/HeroSocialIcons";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: subtle engineering grid + blurred shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Role badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-primary-400/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300">
                AI + Full-Stack Software Developer
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block text-light-text dark:text-white">
                I DON&apos;T JUST WRITE CODE.
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                I BUILD INTELLIGENT SYSTEMS.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg md:text-xl font-medium text-slate-500 dark:text-slate-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building intelligent software, scalable web applications and
              AI-powered experiences.
            </motion.p>

            <motion.div
              className="mt-6 space-y-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Computer Engineering graduate with hands-on experience building
                full-stack web applications and AI-powered software using
                Python, JavaScript, TypeScript, React, Next.js, Node.js,
                FastAPI, SQL and Supabase.
              </p>
              <p>
                I engineer end-to-end products — from database design and REST
                APIs to modern frontends and Generative AI features — turning
                ideas into reliable, production-grade software.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <HeroButtons />

            {/* Social Icons */}
            <HeroSocialIcons />
          </div>

          {/* Right Side - Engineering Core */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <HeroAnimation />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-primary-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <FiChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
