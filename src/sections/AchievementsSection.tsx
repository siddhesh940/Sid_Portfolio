"use client";

import { motion } from "framer-motion";
import { FaAward, FaBrain, FaCertificate, FaTrophy } from "react-icons/fa";
import { HiLightningBolt, HiSparkles } from "react-icons/hi";
import { SiPython } from "react-icons/si";
import SectionWrapper from "../components/SectionWrapper";
import AchievementCard, {
  AchievementData,
} from "../components/achievements/AchievementCard";

/* ═══════════════════════════════════════════
   ACHIEVEMENT DATA
   ═══════════════════════════════════════════ */

const achievements: AchievementData[] = [
  {
    title: "Finalist – InnovGenius Ideathon 2026 (ACM TCET x TCS)",
    description: [
      "Selected among 700+ registrations and competed in the Final Round; built and deployed CampusAI, an industry-style onboarding automation system with secure role-based access and scalable SaaS architecture.",
      "CampusAI transforms the traditionally fragmented student onboarding process into a seamless, AI-driven digital ecosystem delivering structured, personalized, and real-time guidance from admission to campus integration.",
    ],
    icon: FaTrophy,
    iconColor: "bg-amber-500/20 text-amber-500",
    deployment: "https://campusai-livid.vercel.app/",
    github: "https://github.com/siddhesh940/CampusAI.git",
    certificate:
      "https://drive.google.com/file/d/19_aXe846bxuTD6QBeuL6ude6sPX7PO02/view?usp=sharing",
  },
];

/* ═══════════════════════════════════════════
   CERTIFICATIONS DATA (title-only, resume-backed)
   ═══════════════════════════════════════════ */

const certifications = [
  {
    title: "Advanced AI and Data Science",
    Icon: FaBrain,
    color: "#a78bfa",
  },
  {
    title: "AI Foundations",
    Icon: HiSparkles,
    color: "#f472b6",
  },
  {
    title: "Python for Data Science",
    Icon: SiPython,
    color: "#38bdf8",
  },
];

/* ═══════════════════════════════════════════
   SECTION COMPONENT
   ═══════════════════════════════════════════ */

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Achievements">
      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl -mt-6 mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Milestones, recognitions and certifications from my journey in
        technology and innovation.
      </motion.p>

      {/* Trophy showcase */}
      <motion.div
        className="relative flex justify-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-amber-500/15 blur-3xl animate-pulse" />
          <motion.div
            className="relative w-24 h-24 rounded-3xl flex items-center justify-center
                       bg-gradient-to-br from-amber-400/20 to-orange-500/10
                       border border-amber-400/40 shadow-xl shadow-amber-500/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaTrophy className="w-12 h-12 text-amber-400" />
            <motion.span
              className="absolute -top-2 -right-2 text-2xl"
              animate={{ rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.div>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full glass-panel text-[10px] font-mono font-bold tracking-widest text-amber-500 dark:text-amber-400">
            HALL OF FAME
          </span>
        </div>
      </motion.div>

      {/* Achievements */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, i) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
          <FaCertificate className="w-4 h-4 text-primary-400" />
          <span className="font-mono">certifications.register</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {certifications.map(({ title, Icon, color }, i) => (
            <motion.div
              key={title}
              className="group relative p-6 rounded-xl overflow-hidden
                         border border-slate-200 dark:border-slate-700/70
                         bg-white dark:bg-slate-900/60 backdrop-blur
                         hover:shadow-xl hover:shadow-primary-500/10
                         hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100
                            transition-opacity duration-500 bg-gradient-to-br from-primary-500/20 to-purple-500/10"
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${color}1a`,
                  color,
                  border: `1px solid ${color}33`,
                }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-light-text dark:text-white leading-snug">
                {title}
              </h4>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <HiLightningBolt className="w-3.5 h-3.5" />
                AI & Data Science track
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
          <FaAward className="w-3.5 h-3.5" />
          Certifications listed as earned — details available on request.
        </div>
      </div>
    </SectionWrapper>
  );
}
