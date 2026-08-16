"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiFastapi, SiLangchain, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPython, SiReact, SiSupabase, SiTypescript } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

interface RingNode {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  color: string;
  angle: number;
}

const ringA: RingNode[] = [
  { icon: SiReact, label: "React", color: "#22d3ee", angle: 0 },
  { icon: SiNextdotjs, label: "Next.js", color: "#e2e8f0", angle: 90 },
  { icon: SiTypescript, label: "TypeScript", color: "#60a5fa", angle: 180 },
  { icon: SiNodedotjs, label: "Node.js", color: "#22c55e", angle: 270 },
];

const ringB: RingNode[] = [
  { icon: SiPython, label: "Python", color: "#93c5fd", angle: 45 },
  { icon: SiFastapi, label: "FastAPI", color: "#2dd4bf", angle: 135 },
  { icon: SiOpenai, label: "OpenAI", color: "#5eead4", angle: 225 },
  { icon: SiLangchain, label: "LangChain", color: "#34d399", angle: 315 },
];

const ringC: RingNode[] = [
  { icon: TbDatabase, label: "SQL", color: "#fbbf24", angle: 30 },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#38bdf8", angle: 150 },
  { icon: SiSupabase, label: "Supabase", color: "#3ecf8e", angle: 270 },
];

const coreTags = ["AI", "FULL STACK", "DATA", "CLOUD", "CODE"];

function Node({
  node,
  radiusFactor,
  speed,
}: {
  node: RingNode;
  radiusFactor: number;
  speed: number;
}) {
  const Icon = node.icon;
  return (
    <div
      className="absolute left-1/2 top-1/2 w-0 h-0"
      style={{
        transform: `rotate(${node.angle}deg) translateX(calc(var(--core-size) * ${radiusFactor}))`,
      }}
    >
      <div
        className="ec-node flex flex-col items-center gap-1.5"
        style={{
          transform: `rotate(${-node.angle}deg)`,
        }}
      >
        <div
          className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
          style={{
            background: "rgba(15, 23, 42, 0.72)",
            border: `1px solid ${node.color}33`,
            boxShadow: `0 0 18px ${node.color}1f, 0 0 40px ${node.color}0d`,
            animation: `ec-orbit ${speed}s linear infinite reverse`,
          }}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: node.color }} />
        </div>
        <span
          className="hidden md:block text-[10px] font-medium tracking-wide"
          style={{ color: node.color, textShadow: `0 0 12px ${node.color}66` }}
        >
          {node.label}
        </span>
      </div>
    </div>
  );
}

function Ring({
  nodes,
  radiusFactor,
  tiltX,
  tiltY,
  speed,
}: {
  nodes: RingNode[];
  radiusFactor: number;
  tiltX: number;
  tiltY: number;
  speed: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 w-0 h-0"
      style={{
        transform: `translate(-50%, -50%)`,
      }}
    >
      <div
        className="ec-ring"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          animation: `ec-orbit ${speed}s linear infinite`,
          transformStyle: "preserve-3d",
        }}
      >
        {nodes.map((node) => (
          <Node key={node.label} node={node} radiusFactor={radiusFactor} speed={speed} />
        ))}
      </div>
    </div>
  );
}

export default function EngineeringCore() {
  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 60,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <motion.div
      className="relative w-full aspect-square select-none"
      style={{
        perspective: 1000,
        "--core-size": "min(88vw, 560px)",
      } as React.CSSProperties}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-indigo-500/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Core sphere */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "calc(var(--core-size) * 0.26)", height: "calc(var(--core-size) * 0.26)" }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(129,140,248,0.85), rgba(99,102,241,0.55) 40%, rgba(30,27,75,0.9) 100%)",
              boxShadow:
                "0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(99,102,241,0.25), inset 0 0 30px rgba(129,140,248,0.35)",
              animation: "ec-pulse 5s ease-in-out infinite",
            }}
          />
          {/* Rotating dashed ring around core */}
          <div
            className="absolute -inset-3 rounded-full border border-dashed border-primary-400/40"
            style={{ animation: "ec-spin 24s linear infinite" }}
          />
          <div
            className="absolute -inset-3 rounded-full border border-primary-400/20"
            style={{
              transform: "rotateX(70deg)",
              borderColor: "rgba(34,211,238,0.25)",
              animation: "ec-spin 16s linear infinite reverse",
            }}
          />
          {/* Core label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.25em] text-cyan-300 glow-cyan">
              ENGINEERING
            </span>
            <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-widest text-white glow-indigo">
              CORE
            </span>
          </div>
        </div>

        {/* Orbital rings */}
        <Ring nodes={ringA} radiusFactor={0.26} tiltX={0} tiltY={0} speed={28} />
        <Ring nodes={ringB} radiusFactor={0.38} tiltX={72} tiltY={-14} speed={44} />
        <Ring nodes={ringC} radiusFactor={0.47} tiltX={58} tiltY={22} speed={60} />
      </motion.div>

      {/* Floating core tags */}
      {coreTags.map((tag, i) => (
        <motion.span
          key={tag}
          className="absolute text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md
                     glass-panel text-slate-500 dark:text-slate-400"
          style={{
            left: `${8 + (i * 20) % 70}%`,
            top: `${4 + (i * 13) % 30}%`,
            animation: `ec-float ${5 + i}s ease-in-out ${i * 0.7}s infinite`,
          }}
        >
          {tag}
        </motion.span>
      ))}

      {/* HUD corner accents */}
      <div className="absolute top-2 right-2 sm:right-4 flex items-center gap-1.5 text-[8px] sm:text-[9px] font-mono text-cyan-400/70">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        SYS.ONLINE
      </div>
      <div className="absolute bottom-3 left-2 sm:left-3 text-[8px] sm:text-[9px] font-mono text-purple-400/60">
        node[core].orbit()
      </div>
    </motion.div>
  );
}
