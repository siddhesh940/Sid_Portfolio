"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Magnetic target (element center) — defaults to cursor position
  const magX = useMotionValue(-100);
  const magY = useMotionValue(-100);

  // Blend cursor with magnetic target, clamped for a subtle pull
  const blendX = useTransform([cursorX, magX], (v: number[]) => {
    const dx = Math.max(-30, Math.min(30, v[1] - v[0]));
    return v[0] + dx * 0.3;
  });
  const blendY = useTransform([cursorY, magY], (v: number[]) => {
    const dy = Math.max(-30, Math.min(30, v[1] - v[0]));
    return v[0] + dy * 0.3;
  });

  // Smooth spring for the outer ring (trails the dot, magnetic blend)
  const ringX = useSpring(blendX, { stiffness: 180, damping: 20, mass: 0.5 });
  const ringY = useSpring(blendY, { stiffness: 180, damping: 20, mass: 0.5 });

  // Slower trail for the ambient glow
  const glowX = useSpring(cursorX, { stiffness: 70, damping: 22, mass: 0.8 });
  const glowY = useSpring(cursorY, { stiffness: 70, damping: 22, mass: 0.8 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      // If no magnetic target is active, ring follows the cursor directly
      magX.set(e.clientX);
      magY.set(e.clientY);
    },
    [cursorX, cursorY, magX, magY],
  );

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Hide on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || prefersReducedMotion) return;

    setIsVisible(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const el = t.closest("a, button");
      const interactive = !!el || t.classList.contains("cursor-pointer");

      setIsHovering(interactive);

      if (el) {
        const rect = el.getBoundingClientRect();
        magX.set(rect.left + rect.width / 2);
        magY.set(rect.top + rect.height / 2);
      }
    };

    const onOut = () => {
      setIsHovering(false);
      magX.set(cursorX.get());
      magY.set(cursorY.get());
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [handleMouseMove, cursorX, cursorY, magX, magY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient glow trail */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full bg-cyan-400/25"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 84 : 60,
          height: isHovering ? 84 : 60,
          opacity: isHovering ? 0.32 : 0.16,
          boxShadow: "0 0 30px 6px rgba(34, 211, 238, 0.16)",
        }}
        initial={{ width: 60, height: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      />

      {/* Outer ring — spring trail + subtle magnetic pull */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 48 : 34,
          height: isHovering ? 48 : 34,
          opacity: 1,
          borderColor: isHovering
            ? "rgba(34, 211, 238, 0.9)"
            : "rgba(129, 140, 248, 0.55)",
          boxShadow: isHovering
            ? "0 0 18px 2px rgba(99, 102, 241, 0.35)"
            : "0 0 0px 0px rgba(99, 102, 241, 0)",
        }}
        initial={{ width: 34, height: 34, opacity: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />

      {/* Inner dot — follows cursor instantly */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 14 : 8,
          height: isHovering ? 14 : 8,
          opacity: 1,
        }}
        initial={{ width: 8, height: 8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      />
    </>
  );
}
