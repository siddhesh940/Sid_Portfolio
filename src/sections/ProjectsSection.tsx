"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { ProjectData } from "../components/projects/ProjectCard";
import ProjectsGrid from "../components/projects/ProjectsGrid";

/* ═══════════════════════════════════════════
   PROJECT DATA (parsed from Projects.md)
   ═══════════════════════════════════════════ */

const projects: ProjectData[] = [
  {
    title: "JeevanRakshak",
    slug: "jeevanrakshak",
    description:
      'JeevanRakshak (जीवनरक्षक — "Life Saver") is a production-grade, offline-first Progressive Web App designed to provide instant, expert-verified emergency guidance when every second counts.',
    image: "/Projects/JeevanRakshak.png",
    techStack: ["Next.js", "TypeScript", "PWA", "AI"],
    github: "https://github.com/siddhesh940/JeevanRakshak.git",
    website: "https://jeevan-rakshak-mu.vercel.app/",
  },
  {
    title: "AeroSentinel AI",
    slug: "aerosentinel-ai",
    description:
      "AI-powered aviation safety system that predicts flight risks and detects anomalies using real-time flight data. Provides risk alerts and emergency recommendations for pilots and operators.",
    image: "/Projects/AerpGuardian.png",
    techStack: ["React", "Python", "AI/ML", "TypeScript"],
    github: "https://github.com/siddhesh940/AeroSentinel-AI.git",
    website: "https://aero-sentinel-ai-3leq.vercel.app/",
  },
  {
    title: "DBGuardian AI",
    slug: "dbguardian-ai",
    description:
      "AI-powered Oracle Database Performance Analysis Tool that works like a Senior DBA — identifies problematic SQL, performs root cause analysis, and provides actionable recommendations.",
    image: "/Projects/DB_Guardian.png",
    techStack: ["React", "TypeScript", "Oracle", "AI"],
    github: "https://github.com/siddhesh940/DBGuardian-AI.git",
    website: "https://db-guardian-ai.vercel.app/",
  },
  {
    title: "CyberRakshak AI",
    slug: "cyberrakshak-ai",
    description:
      "Personal Protection System against Social Media Scams and Digital Fraud. Detects and prevents cyber threats using AI-driven analysis.",
    image: "/Projects/CyberRakshak AI.png",
    techStack: ["React", "AI/ML", "TypeScript", "Tailwind"],
    github: "https://github.com/siddhesh940/CyberRakshak-AI-.git",
    website: "https://cyber-rakshak-ai.vercel.app/",
  },
  {
    title: "Interview.AI",
    slug: "interview-ai",
    description:
      "AI-powered interview preparation platform with real-time mock interviews, intelligent question generation, resume builder, performance analytics, and company-wise preparation tools.",
    image: "/Projects/Interview.AI.png",
    techStack: ["Next.js", "TypeScript", "AI", "Tailwind"],
    github: "https://github.com/siddhesh940/Interview.AI.git",
    website: "https://interview-ai-ruddy.vercel.app/",
  },
  {
    title: "CampusAI",
    slug: "campus-ai",
    description:
      "Transforms the traditional student onboarding process into a seamless, AI-driven digital ecosystem delivering structured, personalized, and real-time guidance from admission to integration.",
    image: "/Projects/Campus AI.png",
    techStack: ["React", "AI", "TypeScript", "Node.js"],
    github: "https://github.com/siddhesh940/CampusAI.git",
    website: "https://campusai-livid.vercel.app/",
  },
  {
    title: "SkillAutofill",
    slug: "skill-autofill",
    description:
      "An intelligent system that analyzes job descriptions and user profiles to provide skill gap analysis, personalized learning roadmaps, resume improvements, and more.",
    image: "/Projects/SkillAutofill.png",
    techStack: ["React", "AI/ML", "TypeScript", "Tailwind"],
    github: "https://github.com/siddhesh940/Skill_Autofill_System.git",
    website: "https://skill-autofill-system.vercel.app/",
  },
  {
    title: "ResumeIQ",
    slug: "resume-iq",
    description:
      "Create ATS-friendly resumes with intelligent JD Analysis. Simplifies the process of building professional, optimized resumes in minutes.",
    image: "/Projects/ResumeIQ.png",
    techStack: ["React", "TypeScript", "AI", "Tailwind"],
    github: "https://github.com/siddhesh940/resumeIQ.git",
    website: "https://resume-iq-weld.vercel.app/",
  },
  {
    title: "GitVio",
    slug: "gitvio",
    description:
      "Create beautiful portfolio websites directly from your GitHub profile. Instantly generate a polished developer portfolio.",
    image: "/Projects/GitVio.png",
    techStack: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
    github: "https://github.com/siddhesh940/GitVio.git",
    website: "https://git-vio-npib.vercel.app/",
  },
  {
    title: "Star Weather Performance",
    slug: "star-weather",
    description:
      "Advanced weather website where users can view current conditions, forecasts, air quality, weather maps, and more — built for a seamless, responsive experience.",
    image: "/Projects/Star Weather Performance.png",
    techStack: ["React", "TypeScript", "API", "Tailwind"],
    github: "https://github.com/siddhesh940/Star_WeatherPerformance.git",
    website: "https://star-weather-performance-52tu.vercel.app/",
  },
];

/* ═══════════════════════════════════════════
   SECTION COMPONENT
   ═══════════════════════════════════════════ */

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      {/* Subtitle */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl -mt-6 mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        A collection of real-world AI and web development projects I&apos;ve
        engineered and shipped.
      </motion.p>

      {/* Projects Grid */}
      <ProjectsGrid projects={projects} featuredCount={3} />
    </SectionWrapper>
  );
}
