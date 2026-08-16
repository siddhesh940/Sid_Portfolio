import GithubActivity from "../components/github/GithubActivity";
import GitHubStats from "../components/github/GitHubStats";
import ScrollStory from "../components/scroll/ScrollStory";
import AboutSection from "../sections/AboutSection";
import AchievementsSection from "../sections/AchievementsSection";
import AIFullStackSection from "../sections/AIFullStackSection";
import BlogsSection from "../sections/BlogsSection";
import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import FinalCTASection from "../sections/FinalCTASection";
import HeroSection from "../sections/HeroSection";
import HowIEngineerSection from "../sections/HowIEngineerSection";
import ProjectsSection from "../sections/ProjectsSection";
import ResumeSection from "../sections/ResumeSection";
import SkillsSection from "../sections/SkillsSection";
import SystemArchitectureSection from "../sections/SystemArchitectureSection";
import TerminalSection from "../sections/TerminalSection";

export default function Home() {
  return (
    <>
      <ScrollStory />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HowIEngineerSection />
      <AIFullStackSection />
      <SystemArchitectureSection />
      <TerminalSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <GithubActivity />
      <GitHubStats />
      <BlogsSection />
      <ResumeSection />
      <ContactSection />
      <FinalCTASection />
    </>
  );
}
