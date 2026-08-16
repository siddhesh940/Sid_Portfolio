import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sid-portfolio-umber.vercel.app"),
  title: {
    default: "Siddhesh Patil | AI + Full-Stack Software Developer",
    template: "%s | Siddhesh Patil",
  },
  description:
    "AI + Full-Stack Software Developer. Building intelligent software, scalable web applications and AI-powered experiences using Python, TypeScript, React, Next.js, Node.js, FastAPI, LangChain and Supabase.",
  keywords: [
    "Siddhesh Patil",
    "AI Full-Stack Software Developer",
    "Software Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Generative AI",
    "Machine Learning",
    "NLP",
    "Computer Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "LangChain",
    "Supabase",
  ],
  authors: [{ name: "Siddhesh Patil" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sid-portfolio-umber.vercel.app",
    siteName: "Siddhesh Patil",
    title: "Siddhesh Patil | AI + Full-Stack Software Developer",
    description:
      "Building intelligent software, scalable web applications and AI-powered experiences. Explore my projects, skills, and engineering journey.",
    images: [
      {
        url: "https://sid-portfolio-umber.vercel.app/Projects/CampusAI.png",
        width: 1200,
        height: 630,
        alt: "Siddhesh Patil — AI + Full-Stack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhesh Patil | AI + Full-Stack Software Developer",
    description:
      "Building intelligent software, scalable web applications and AI-powered experiences.",
    images: [
      "https://sid-portfolio-umber.vercel.app/Projects/CampusAI.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sid-portfolio-umber.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siddhesh Patil",
  url: "https://sid-portfolio-umber.vercel.app",
  jobTitle: "AI + Full-Stack Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Full-Stack Development",
    "AI Engineering",
    "Generative AI",
    "Machine Learning",
    "NLP",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "LangChain",
    "SQL",
    "PostgreSQL",
    "Supabase",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
