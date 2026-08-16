"use client";

import { FaBrain, FaServer } from "react-icons/fa";
import {
  HiChip,
  HiCode,
  HiCog,
  HiDatabase,
  HiLightningBolt,
} from "react-icons/hi";
import { useState } from "react";
import {
  SiCss3,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBinaryTree, TbDatabase } from "react-icons/tb";
import { FiLock, FiShield } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

import SectionWrapper from "../components/SectionWrapper";
import SkillCard from "../components/skills/SkillCard";
import SkillCategory, {
  type SkillItem,
} from "../components/skills/SkillCategory";

interface CategoryConfig {
  title: string;
  module: string;
  headerIcon: React.ReactNode;
  accent: string;
  skills: SkillItem[];
  tags?: string[];
}

const categories: CategoryConfig[] = [
  {
    title: "Languages",
    module: "01",
    headerIcon: <HiCode />,
    accent: "#fbbf24",
    skills: [
      { icon: SiPython, name: "Python", color: "#93c5fd" },
      { icon: SiJavascript, name: "JavaScript", color: "#facc15" },
      { icon: SiTypescript, name: "TypeScript", color: "#60a5fa" },
      { icon: TbDatabase, name: "SQL", color: "#fbbf24" },
    ],
  },
  {
    title: "Frontend",
    module: "02",
    headerIcon: <SiReact />,
    accent: "#22d3ee",
    skills: [
      { icon: SiReact, name: "React.js", color: "#22d3ee" },
      { icon: SiNextdotjs, name: "Next.js", color: "#e2e8f0" },
      { icon: SiHtml5, name: "HTML5", color: "#fb923c" },
      { icon: SiCss3, name: "CSS3", color: "#38bdf8" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06b6d4" },
    ],
  },
  {
    title: "Backend",
    module: "03",
    headerIcon: <FaServer />,
    accent: "#a78bfa",
    skills: [
      { icon: SiNodedotjs, name: "Node.js", color: "#22c55e" },
      { icon: SiFastapi, name: "FastAPI", color: "#2dd4bf" },
      { icon: HiCog, name: "REST APIs", color: "#a78bfa" },
    ],
  },
  {
    title: "AI & GenAI",
    module: "04",
    headerIcon: <FaBrain />,
    accent: "#34d399",
    skills: [
      { icon: SiOpenai, name: "OpenAI API", color: "#5eead4" },
      { icon: SiLangchain, name: "LangChain", color: "#34d399" },
    ],
    tags: ["GPT-4", "LLM APIs", "RAG", "Generative AI"],
  },
  {
    title: "ML & NLP",
    module: "05",
    headerIcon: <HiLightningBolt />,
    accent: "#f472b6",
    skills: [
      { icon: SiScikitlearn, name: "Scikit-learn", color: "#fbbf24" },
      { icon: SiPandas, name: "Pandas", color: "#fb7185" },
      { icon: SiNumpy, name: "NumPy", color: "#60a5fa" },
    ],
    tags: ["TF-IDF", "NLP", "Matplotlib", "Seaborn"],
  },
  {
    title: "Databases",
    module: "06",
    headerIcon: <HiDatabase />,
    accent: "#38bdf8",
    skills: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#38bdf8" },
      { icon: SiMysql, name: "MySQL", color: "#93c5fd" },
      { icon: SiMongodb, name: "MongoDB", color: "#22c55e" },
      { icon: SiSupabase, name: "Supabase", color: "#3ecf8e" },
    ],
  },
  {
    title: "Developer Tools",
    module: "07",
    headerIcon: <HiCog />,
    accent: "#94a3b8",
    skills: [
      { icon: SiGit, name: "Git", color: "#f87171" },
      { icon: SiGithub, name: "GitHub", color: "#e2e8f0" },
      { icon: VscVscode, name: "VS Code", color: "#38bdf8" },
      { icon: SiVercel, name: "Vercel", color: "#a3a3a3" },
      { icon: SiLinux, name: "Linux", color: "#facc15" },
    ],
  },
  {
    title: "Core Concepts",
    module: "08",
    headerIcon: <HiChip />,
    accent: "#fb923c",
    skills: [
      { icon: TbBinaryTree, name: "DSA", color: "#fb923c" },
      { icon: HiDatabase, name: "DBMS", color: "#38bdf8" },
      { icon: FiLock, name: "Authentication", color: "#34d399" },
      { icon: FiShield, name: "Authorization", color: "#a78bfa" },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleCategoryEnter = (title: string) => setActiveCategory(title);
  const handleCategoryLeave = () => setActiveCategory(null);
  const handleSkillEnter = (name: string, title: string) => {
    setActiveSkill(name);
    setActiveCategory(title);
  };
  const handleSkillLeave = () => setActiveSkill(null);

  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="mb-4 flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
        <HiChip className="w-4 h-4 text-primary-400" />
        <span className="font-mono">engineering_stack.modules</span>
        <span className="text-slate-400/60">— 08 modules</span>
      </div>

      <p className="mb-10 text-sm text-slate-500 dark:text-slate-400">
        Hover a category or technology to trace its connections across the map.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {categories.map((c, i) => (
          <div
            key={c.title}
            onMouseEnter={() => handleCategoryEnter(c.title)}
            onMouseLeave={handleCategoryLeave}
          >
            <SkillCard
              title={c.title}
              icon={c.headerIcon}
              index={i}
              module={c.module}
              accent={c.accent}
              dimmed={activeCategory !== null && activeCategory !== c.title}
              active={activeCategory === c.title}
            >
              <SkillCategory
                skills={c.skills}
                tags={c.tags}
                accent={c.accent}
                dimmed={activeCategory !== null && activeCategory !== c.title}
                activeSkill={activeSkill}
                onSkillActive={(name) =>
                  name
                    ? handleSkillEnter(name, c.title)
                    : handleSkillLeave()
                }
              />
            </SkillCard>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
