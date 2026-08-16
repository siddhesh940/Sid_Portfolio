// Portfolio knowledge base for the AI chatbot
// This provides all the context the chatbot needs to answer questions

export const portfolioContext = {
  name: "Siddhesh Patil",
  title: "AI + Full-Stack Software Developer",
  email: "patilsiddhesh2810@gmail.com",
  github: "https://github.com/siddhesh940",
  linkedin: "https://www.linkedin.com/in/siddhesh-patil-268b96311/",
  leetcode: "https://leetcode.com/u/Siddhesh_Patil_/",
  resume: "/Resume/Siddhesh_Patil_Software_Developer.pdf",

  about:
    "Siddhesh Patil is an AI + Full-Stack Software Developer, a Computer Engineering graduate from the University of Mumbai. He builds intelligent software, scalable web applications and AI-powered experiences using Python, JavaScript, TypeScript, React, Next.js, Node.js, FastAPI, SQL, Supabase, LLMs, LangChain and RAG.",

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "FastAPI",
    "REST APIs",
    "OpenAI API",
    "LangChain",
    "RAG",
    "Generative AI",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "NLP",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Supabase",
    "Git/GitHub",
    "Vercel",
    "Linux",
    "DSA",
    "Authentication",
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "Mauli Infotech (OPC) Pvt. Ltd.",
      duration: "Dec 2025 – Feb 2026",
      highlights:
        "Engineered a Python-based workload analysis pipeline using FastAPI, Pandas and BeautifulSoup to parse AWR/ASH reports into structured data, cutting manual SQL workload analysis from hours to under 4 minutes. Built high-load detection and RCA modules, plus backend APIs and a dashboard for DBAs.",
    },
    {
      role: "Web Development Intern",
      company: "Prodigy Infotech",
      duration: "Jan 2025 – Feb 2025",
      highlights:
        "Built responsive web development modules using HTML, CSS, JavaScript and React.",
    },
  ],

  education: [
    {
      degree: "B.E. in Computer Engineering",
      institute: "Pillai HOC College of Engineering and Technology, University of Mumbai",
      duration: "2022 – 2026",
      score: "CGPA 8.30",
    },
    {
      degree: "HSC",
      institute: "Sudhagad Education Society Higher & Secondary College",
      score: "65.73%",
    },
    {
      degree: "SSC",
      institute: "Sudhagad Education Society High School",
      score: "90.00%",
    },
  ],

  certifications: [
    "Advanced AI and Data Science",
    "AI Foundations",
    "Python for Data Science",
  ],

  achievements: [
    "Finalist – InnovGenius Ideathon 2026 (ACM TCET × TCS), selected among 700+ registrations. Built and deployed CampusAI, an AI-driven student onboarding platform.",
  ],

  projects: [
    {
      name: "JeevanRakshak",
      description:
        'JeevanRakshak (जीवनरक्षक — "Life Saver") is a production-grade, offline-first Progressive Web App designed to provide instant, expert-verified emergency guidance when every second counts.',
      tech: ["Next.js", "TypeScript", "PWA", "AI"],
      link: "https://jeevan-rakshak-mu.vercel.app/",
    },
    {
      name: "AeroSentinel AI",
      description:
        "AI-powered aviation safety system that predicts flight risks and detects anomalies using real-time flight data.",
      tech: ["React", "Python", "AI/ML", "TypeScript"],
      link: "https://aero-sentinel-ai-3leq.vercel.app/",
    },
    {
      name: "DBGuardian AI",
      description:
        "AI-powered Oracle Database Performance Analysis Tool that works like a Senior DBA — identifies problematic SQL and provides actionable recommendations.",
      tech: ["React", "TypeScript", "Oracle", "AI"],
      link: "https://db-guardian-ai.vercel.app/",
    },
    {
      name: "CyberRakshak AI",
      description:
        "Personal Protection System against Social Media Scams and Digital Fraud using AI-driven analysis.",
      tech: ["React", "AI/ML", "TypeScript", "Tailwind"],
      link: "https://cyber-rakshak-ai.vercel.app/",
    },
    {
      name: "Interview.AI",
      description:
        "AI-powered interview preparation platform with real-time mock interviews, intelligent question generation, resume builder, and performance analytics.",
      tech: ["Next.js", "TypeScript", "AI", "Tailwind"],
      link: "https://interview-ai-ruddy.vercel.app/",
    },
    {
      name: "CampusAI",
      description:
        "AI-driven digital ecosystem for student onboarding — delivering structured, personalized, and real-time guidance from admission to integration.",
      tech: ["React", "AI", "TypeScript", "Node.js"],
      link: "https://campusai-livid.vercel.app/",
    },
    {
      name: "SkillAutofill",
      description:
        "Intelligent system that analyzes job descriptions and user profiles to provide skill gap analysis and personalized learning roadmaps.",
      tech: ["React", "AI/ML", "TypeScript", "Tailwind"],
      link: "https://skill-autofill-system.vercel.app/",
    },
    {
      name: "ResumeIQ",
      description:
        "Create ATS-friendly resumes with intelligent JD Analysis in minutes.",
      tech: ["React", "TypeScript", "AI", "Tailwind"],
      link: "https://resume-iq-weld.vercel.app/",
    },
    {
      name: "GitVio",
      description:
        "Create beautiful portfolio websites directly from your GitHub profile.",
      tech: ["Next.js", "TypeScript", "GitHub API", "Tailwind"],
      link: "https://git-vio-npib.vercel.app/",
    },
    {
      name: "Star Weather Performance",
      description:
        "Advanced weather website with current conditions, forecasts, air quality, and weather maps.",
      tech: ["React", "TypeScript", "API", "Tailwind"],
      link: "https://star-weather-performance-52tu.vercel.app/",
    },
  ],

  blogs: [
    {
      title:
        "Building an AI-Powered Interview Preparation Platform — Interview.ai",
      platform: "AWS Builder Center",
      link: "https://builder.aws.com/content/39RVN7qrqJdi6rEjGYBynXnqgnA/building-an-ai-powered-interview-preparation-platform-interviewai",
    },
    {
      title:
        "Building an AI-Powered Interview Preparation Platform — Interview.ai",
      platform: "Medium",
      link: "https://medium.com/@patilsiddhesh2810/building-an-ai-powered-interview-preparation-platform-interview-ai-a9dab9cdb082",
    },
  ],
};

// Simple keyword-based response engine (no API key required)
interface ChatResponse {
  text: string;
}

export function generateChatResponse(query: string): ChatResponse {
  const q = query.toLowerCase().trim();
  const ctx = portfolioContext;

  // Greetings
  if (/^(hi|hello|hey|hola|namaste|sup|yo)\b/.test(q)) {
    return {
      text: `Hello! 👋 I'm Siddhesh's AI portfolio assistant. I can tell you about his projects, skills, experience, education, and more. What would you like to know?`,
    };
  }

  // Who is / about
  if (/who\s*(is|are)|about|tell me about|introduce/.test(q)) {
    return {
      text: `${ctx.about}\n\nHe has built ${ctx.projects.length}+ production-grade projects using technologies like React, Next.js, TypeScript, Python, and AI/ML.`,
    };
  }

  // Contact
  if (/contact|reach|email|mail|connect|hire|hiring/.test(q)) {
    return {
      text: `You can reach Siddhesh through:\n\n📧 Email: ${ctx.email}\n🔗 LinkedIn: ${ctx.linkedin}\n💻 GitHub: ${ctx.github}\n\nOr use the Contact section on this portfolio!`,
    };
  }

  // Skills / technologies
  if (/skill|tech|technolog|stack|language|framework|tool|know/.test(q)) {
    return {
      text: `Siddhesh is proficient in:\n\n${ctx.skills.map((s) => `• ${s}`).join("\n")}\n\nHe specializes in full-stack development with a focus on AI-powered applications.`,
    };
  }

  // AI projects specifically
  if (
    /ai\s*project|artificial intelligence|machine learning|ml\s*project/.test(q)
  ) {
    const aiProjects = ctx.projects.filter((p) =>
      p.tech.some(
        (t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("ml"),
      ),
    );
    const list = aiProjects
      .map((p) => `🤖 **${p.name}** — ${p.description}`)
      .join("\n\n");
    return {
      text: `Siddhesh has built ${aiProjects.length} AI-powered projects:\n\n${list}`,
    };
  }

  // Specific project queries
  for (const project of ctx.projects) {
    const projectName = project.name.toLowerCase();
    if (
      q.includes(projectName) ||
      q.includes(projectName.replace(/[.\s]/g, ""))
    ) {
      return {
        text: `**${project.name}**\n\n${project.description}\n\n🛠 Tech Stack: ${project.tech.join(", ")}\n🔗 Live: ${project.link}`,
      };
    }
  }

  // All projects
  if (/project|built|build|portfolio|work|app|application/.test(q)) {
    const list = ctx.projects
      .map((p) => `• **${p.name}** — ${p.description.slice(0, 80)}...`)
      .join("\n");
    return {
      text: `Siddhesh has built ${ctx.projects.length} projects:\n\n${list}\n\nAsk me about any specific project for more details!`,
    };
  }

  // Blogs
  if (/blog|article|write|writing|publication|medium|aws/.test(q)) {
    const list = ctx.blogs
      .map((b) => `📝 ${b.title} (${b.platform})`)
      .join("\n");
    return {
      text: `Siddhesh has published technical articles:\n\n${list}\n\nCheck out the Blogs section for full reads!`,
    };
  }

  // GitHub
  if (/github|git|repo|repository|open source|contribution/.test(q)) {
    return {
      text: `Check out Siddhesh's GitHub profile: ${ctx.github}\n\nHe actively contributes to open source and has ${ctx.projects.length}+ public repositories covering AI, web development, and more.`,
    };
  }

  // Resume
  if (/resume|cv|download/.test(q)) {
    return {
      text: `You can view and download Siddhesh's resume here: ${ctx.resume}\n\nIt covers his experience, projects, education (CGPA 8.30), skills and certifications.`,
    };
  }

  // Achievements
  if (/achiev|award|winner|finalist|recogni|ideathon|hackathon/.test(q)) {
    return {
      text: `Siddhesh's key achievement:\n\n🏆 ${ctx.achievements[0]}\n\nHe has also earned certifications in Advanced AI & Data Science, AI Foundations, and Python for Data Science.`,
    };
  }

  // Education
  if (/education|study|university|college|degree|school/.test(q)) {
    return {
      text: `Siddhesh's education:\n\n${ctx.education
        .map(
          (e) =>
            `🎓 **${e.degree}** — ${e.institute}${e.duration ? ` (${e.duration})` : ""}\n   ${e.score}`,
        )
        .join("\n\n")}`,
    };
  }

  // Experience
  if (/experience|work|job|internship|company|career/.test(q)) {
    return {
      text: `Siddhesh's experience:\n\n${ctx.experience
        .map(
          (e) =>
            `💼 **${e.role}** — ${e.company} (${e.duration})\n   ${e.highlights}`,
        )
        .join("\n\n")}`,
    };
  }

  // Thank you
  if (/thank|thanks|thx/.test(q)) {
    return {
      text: `You're welcome! 😊 Feel free to ask anything else about Siddhesh's work and skills.`,
    };
  }

  // Default fallback
  return {
    text: `I can help you learn about Siddhesh's:\n\n• 🚀 Projects (10+ built)\n• 💻 Technical Skills\n• 📝 Blog Articles\n• 📧 Contact Information\n• 🎓 Education\n• 💼 Experience\n• 📄 Resume\n\nWhat would you like to know?`,
  };
}
