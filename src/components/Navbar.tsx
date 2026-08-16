"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "/about", section: "about" },
  { label: "Skills", href: "/skills", section: "skills" },
  { label: "Education", href: "/education", section: "education" },
  { label: "My Projects", href: "/projects", section: "projects" },
  { label: "Experience", href: "/experience", section: "experience" },
  { label: "Achievements", href: "/achievements", section: "achievements" },
  { label: "Blogs", href: "/blogs", section: "blogs" },
  { label: "Contact", href: "/contact", section: "contact" },
];

const RESUME_PATH = "/Resume/Siddhesh_Patil_Software_Developer.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view on the home page
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = navItems.map((item) => item.section);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (item: (typeof navItems)[number]) =>
    isHome ? activeSection === item.section : pathname === item.href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/75 dark:bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-slate-200/60 dark:border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <motion.span
              className="text-xl md:text-2xl font-bold tracking-tight inline-block cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-light-text dark:text-white">&lt;</span>
              <span className="gradient-text font-extrabold italic">
                {" "}
                Siddhesh Patil{" "}
              </span>
              <span className="text-light-text dark:text-white">/&gt;</span>
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <motion.span
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative px-3 xl:px-4 py-2 text-sm font-medium rounded-lg cursor-pointer inline-block
                           transition-colors duration-200
                           ${
                             isActive(item)
                               ? "text-primary-500 dark:text-primary-400"
                               : "text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white hover:bg-light-surface dark:hover:bg-dark-card"
                           }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isActive(item) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </motion.span>
              </Link>
            ))}

            {/* Resume CTA */}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg
                         bg-gradient-to-r from-primary-500 to-purple-500 text-white
                         shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40
                         hover:brightness-110 transition-all duration-200"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-light-muted dark:text-dark-muted
                         hover:bg-light-surface dark:hover:bg-dark-card transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.span
                      className={`block px-4 py-3 text-sm font-medium rounded-lg cursor-pointer
                               transition-all duration-200
                               ${
                                 isActive(item)
                                   ? "text-primary-500 bg-primary-500/10"
                                   : "text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-white hover:bg-light-surface dark:hover:bg-dark-card"
                               }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}

                {/* Resume CTA */}
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg
                             bg-gradient-to-r from-primary-500 to-purple-500 text-white
                             shadow-lg shadow-primary-500/25"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
