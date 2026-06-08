"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ShowcaseVariant = "light" | "accent" | "duo";

interface ProductShowcaseImageProps {
  src: string;
  alt: string;
  label: string;
  sublabel?: string;
  variant?: ShowcaseVariant;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function ProductShowcaseImage({
  src,
  alt,
  label,
  sublabel,
  variant = "light",
  aspect = "aspect-[3/4]",
  priority = false,
  sizes = "(max-width: 768px) 90vw, 45vw",
  className = "",
}: ProductShowcaseImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const textY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const textColor =
    variant === "accent"
      ? "text-white/[0.12]"
      : variant === "duo"
        ? "text-primary/[0.07]"
        : "text-primary/[0.08]";

  const subtextColor =
    variant === "accent" ? "text-white/[0.08]" : "text-primary/[0.05]";

  const glowColor =
    variant === "accent" ? "bg-white/15" : "bg-primary/10";

  return (
    <div ref={ref} className={`relative w-full ${aspect} ${className}`}>
      {/* Glow */}
      <div
        className={`absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${glowColor}`}
      />

      {/* Background typography */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className={`font-display text-[clamp(4rem,18vw,11rem)] font-bold uppercase leading-[0.85] tracking-tighter ${textColor} select-none`}
        >
          {label}
        </span>
        {sublabel && (
          <span
            className={`mt-2 font-display text-[clamp(1.5rem,5vw,3rem)] uppercase tracking-[0.35em] ${subtextColor} select-none`}
          >
            {sublabel}
          </span>
        )}
      </motion.div>

      {/* Accent line behind product */}
      <div
        className={`absolute left-1/2 top-1/2 z-[1] h-px w-[80%] -translate-x-1/2 -translate-y-1/2 ${
          variant === "accent" ? "bg-white/10" : "bg-primary/10"
        }`}
      />

      {/* Product */}
      <motion.div style={{ y: imageY }} className="relative z-10 h-full w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-contain drop-shadow-[0_25px_50px_rgba(239,67,106,0.15)]"
            sizes={sizes}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
