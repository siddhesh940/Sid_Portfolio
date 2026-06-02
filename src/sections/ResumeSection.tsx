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
          fileName="Siddhesh_Patil_Resume"
          filePath="/Resume/Siddhesh_Patil_Resume.pdf"
          description="B.E. Computer Engineering student with hands-on experience in full-stack web development, AI/ML projects, and data science. Explore my complete professional profile."
        />
      </div>
    </SectionWrapper>
  );
}
