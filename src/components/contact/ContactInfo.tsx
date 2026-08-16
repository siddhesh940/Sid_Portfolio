"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const RESUME_PATH = "/Resume/Siddhesh_Patil_Software_Developer.pdf";

const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/siddhesh940",
    color: "hover:text-white",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddhesh-patil-268b96311/",
    color: "hover:text-blue-400",
  },
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:patilsiddhesh2810@gmail.com",
    color: "hover:text-red-400",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Info Card */}
      <div
        className="rounded-xl bg-white/5 backdrop-blur-lg
                    border border-white/10 p-8
                    shadow-lg
                    hover:scale-[1.02] hover:shadow-xl
                    transition-all duration-300
                    relative overflow-hidden"
      >
        {/* Corner accent */}
        <div className="pointer-events-none absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-full" />

        {/* Name & Role */}
        <h3 className="text-2xl font-bold text-white">Siddhesh Patil</h3>
        <p className="mt-1 text-indigo-400 font-medium">
          AI + Full-Stack Software Developer
        </p>

        {/* Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <FiMapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            <span className="text-sm">Navi Mumbai, India</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FiCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm">Open for opportunities</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 rounded-lg flex items-center justify-center
                            bg-white/5 border border-white/10
                            text-gray-400 ${social.color}
                            hover:bg-white/10 hover:border-white/20
                            transition-all duration-200`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Resume Button */}
      <a
        href={RESUME_PATH}
        download
        className="flex items-center justify-center gap-2
                   bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg px-6 py-3
                   text-white font-medium text-sm
                   shadow-lg shadow-indigo-500/25
                   hover:shadow-indigo-500/40 hover:brightness-110
                   transition-all duration-200"
      >
        <FiDownload className="w-4 h-4" />
        Download Resume
      </a>

      {/* Hire Me Button */}
      <a
        href="mailto:patilsiddhesh2810@gmail.com"
        className="flex items-center justify-center gap-2
                   border border-slate-600 rounded-lg px-6 py-3
                   text-gray-300 font-medium text-sm
                   hover:bg-slate-800 hover:border-slate-500 hover:text-white
                   transition-all duration-200"
      >
        <FiMail className="w-4 h-4" />
        Hire Me
      </a>
    </motion.div>
  );
}
