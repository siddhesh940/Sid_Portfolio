import AboutPageContent from "../../sections/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Siddhesh Patil — AI + Full-Stack Software Developer from Navi Mumbai, building intelligent software with React, Next.js, Python, FastAPI, LangChain and SQL.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
