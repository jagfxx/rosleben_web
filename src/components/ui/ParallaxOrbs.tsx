"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxOrbsProps {
  variant?: "light" | "accent";
}

export function ParallaxOrbs({ variant = "light" }: ParallaxOrbsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const orbA =
    variant === "accent"
      ? "bg-white/[0.07]"
      : "bg-primary/[0.06]";
  const orbB =
    variant === "accent"
      ? "bg-white/[0.05]"
      : "bg-primary-light/[0.12]";
  const orbC =
    variant === "accent"
      ? "bg-white/[0.04]"
      : "bg-primary/[0.04]";

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -left-16 top-[12%] h-64 w-64 rounded-full blur-3xl ${orbA}`}
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        animate={{ scale: [1, 0.92, 1], x: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute -right-10 top-[35%] h-72 w-72 rounded-full blur-3xl ${orbB}`}
      />
      <motion.div
        style={{ y: y3 }}
        animate={{ scale: [1, 1.12, 1], y: [0, -24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className={`absolute bottom-[8%] left-[30%] h-48 w-48 rounded-full blur-3xl ${orbC}`}
      />
    </div>
  );
}
