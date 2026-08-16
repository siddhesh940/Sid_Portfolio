"use client";

import { type IconType } from "react-icons";
import SkillIcon from "./SkillIcon";

export interface SkillItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface SkillCategoryProps {
  skills: SkillItem[];
  tags?: string[];
  accent?: string;
  dimmed?: boolean;
  activeSkill?: string | null;
  onSkillActive?: (name: string | null) => void;
}

export default function SkillCategory({
  skills,
  tags,
  accent,
  dimmed,
  activeSkill,
  onSkillActive,
}: SkillCategoryProps) {
  const hasActiveSkill = activeSkill !== null && activeSkill !== undefined;

  return (
    <div>
      {/* Icon chips */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillIcon
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
            active={hasActiveSkill ? activeSkill === skill.name : undefined}
            onActive={onSkillActive}
          />
        ))}
      </div>

      {/* Optional tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-700/40">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-[10px] font-mono font-medium rounded-full
                           bg-indigo-900/30 text-indigo-300 border border-indigo-700/30
                           transition-all duration-300 ${
                             dimmed
                               ? "opacity-40"
                               : hasActiveSkill
                                 ? "opacity-70"
                                 : "hover:border-indigo-400"
                           }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Connection line accent */}
      <div
        className={`mt-3 h-px w-full transition-all duration-500 ${
          dimmed ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: `linear-gradient(90deg, ${accent || "#6366f1"}66, transparent)`,
        }}
      />
    </div>
  );
}
