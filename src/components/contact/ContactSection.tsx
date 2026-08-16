"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 py-20 md:py-28"
    >
      {/* ── Floating gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full
                     bg-indigo-600/30 blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-80 h-80 rounded-full
                     bg-purple-600/25 blur-3xl opacity-30"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full
                     bg-pink-600/20 blur-3xl opacity-30"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-300 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            open_to_collaboration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Me
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
          <p className="mt-5 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Let&apos;s build something intelligent and amazing together.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Info + Map */}
          <div className="flex flex-col gap-6">
            <ContactInfo />
            <ContactMap />
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
