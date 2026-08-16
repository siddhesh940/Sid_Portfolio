"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HiAcademicCap } from "react-icons/hi";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

interface EducationEntry {
  id: number;
  institute: string;
  degree: string;
  duration: string;
  score: string;
  location: string;
  logo: string;
}

const educationData: EducationEntry[] = [
  {
    id: 1,
    institute: "Pillai HOC College Of Engineering and Technology",
    degree: "B.E in Computer Engineering",
    duration: "Oct 2022 – May 2026",
    score: "CGPA: 8.30",
    location: "Rasayani, Maharashtra",
    logo: "/Education/Pillai_logo.png",
  },
  {
    id: 2,
    institute: "Sudhagad Education Society Higher & Secondary College",
    degree: "",
    duration: "June 2021 – March 2022",
    score: "HSC – 65.73%",
    location: "Kalamboli, New Panvel",
    logo: "/Education/SES.png",
  },
  {
    id: 3,
    institute: "Sudhagad Education Society High School",
    degree: "",
    duration: "June 2019 – March 2020",
    score: "SSC – 90.00%",
    location: "Kalamboli, New Panvel",
    logo: "/Education/SES.png",
  },
];

/* ═══════════════════════════════════════════
   TIMELINE CARD
   ═══════════════════════════════════════════ */

function TimelineCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-primary-400 via-primary-500/50 to-primary-600/30
                    blur-[2px] transition-opacity duration-500 pointer-events-none"
      />

      <div
        className="relative rounded-xl
                    border border-gray-200/70 dark:border-slate-700
                    bg-white/90 dark:bg-slate-900/60 backdrop-blur
                    p-6
                    shadow-sm
                    group-hover:shadow-xl group-hover:shadow-primary-500/10
                    dark:shadow-none dark:group-hover:shadow-primary-500/5
                    group-hover:scale-[1.02]
                    transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div
            className="flex-shrink-0 w-28 h-28 rounded-xl bg-white dark:bg-white
                        flex items-center justify-center overflow-hidden
                        border border-gray-100 dark:border-slate-600
                        shadow-sm p-1"
          >
            <Image
              src={entry.logo}
              alt={entry.institute}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 leading-snug">
              {entry.institute}
            </h3>
            {entry.degree && (
              <p className="mt-1 text-sm text-primary-600 dark:text-primary-400 font-medium">
                {entry.degree}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
              🗓️ {entry.duration}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
                            bg-primary-50 dark:bg-primary-900/30
                            text-primary-700 dark:text-primary-300
                            border border-primary-200/50 dark:border-primary-700/30"
              >
                {entry.score}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                📍 {entry.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   SECTION COMPONENT
   ═══════════════════════════════════════════ */

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="education"
      className="section-padding max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section header */}
        <div className="mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-light-text dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Education
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mt-3"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>

        {/* Timeline */}
        <div className="px-2">
          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-[7px] md:left-[7px] top-0 bottom-0 w-[2px]
                          bg-gradient-to-b from-primary-500/60 via-primary-400/40 to-primary-300/20"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />

            {/* Timeline entries */}
            <div className="space-y-10">
              {educationData.map((entry, index) => (
                <div key={entry.id} className="relative flex items-start gap-4">
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary-500 shadow-lg shadow-primary-500/40">
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20" />
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div className="flex-1 -mt-1">
                    <TimelineCard entry={entry} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent — graduation cap */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-primary-500/20 to-primary-600/10
                        text-primary-500 dark:text-primary-400"
          >
            <HiAcademicCap className="text-2xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
