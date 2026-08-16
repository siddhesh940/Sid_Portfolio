"use client";

import SectionWrapper from "../components/SectionWrapper";
import ResumeCard from "../components/resume/ResumeCard";

export default function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="Resume">
      {/* Subtitle */}
      <p className="text-center text-gray-500 dark:text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Download my resume to learn more about my experience, projects, and
        technical skills.
      </p>

      <div className="max-w-7xl mx-auto px-4">
        <ResumeCard
          fileName="Siddhesh_Patil_Software_Developer"
          filePath="/Resume/Siddhesh_Patil_Software_Developer.pdf"
          description="AI + Full-Stack Software Developer with hands-on experience building full-stack web applications and AI-powered software using Python, TypeScript, React, Next.js, Node.js, FastAPI, SQL and Supabase. Explore my complete professional profile."
        />
      </div>
    </SectionWrapper>
  );
}
