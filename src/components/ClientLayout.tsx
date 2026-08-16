"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";
import PortfolioChatbot from "./ai/PortfolioChatbot";
import RouteProgress from "./navigation/RouteProgress";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isBlogSlug = pathname.startsWith("/blogs/") && pathname !== "/blogs";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <RouteProgress />
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 min-h-screen flex flex-col">
          {!isBlogSlug && <Navbar />}
          <main className={`flex-1 ${!isBlogSlug ? "pt-20" : ""}`}>
            <PageTransition>{children}</PageTransition>
          </main>
          {!isBlogSlug && <Footer />}
          <PortfolioChatbot />
        </div>
      )}
    </>
  );
}
