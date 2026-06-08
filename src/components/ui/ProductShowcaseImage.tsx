"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { PRODUCT_IMAGE_DIMENSIONS } from "@/lib/constants";

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
  imageWidth?: number;
  imageHeight?: number;
}

function resolveImageDimensions(src: string, width?: number, height?: number) {
  if (width && height) return { width, height };
  if (src.includes("shampoo")) return PRODUCT_IMAGE_DIMENSIONS.shampoo;
  if (src.includes("conditioner")) return PRODUCT_IMAGE_DIMENSIONS.conditioner;
  return PRODUCT_IMAGE_DIMENSIONS.duo;
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
  imageWidth,
  imageHeight,
}: ProductShowcaseImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = resolveImageDimensions(src, imageWidth, imageHeight);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 22, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 22, mass: 0.6 });

  const labelX = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const labelY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const labelRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const labelScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.04]);

  const sublabelX = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const sublabelY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const sublabelRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  const imageY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.98]);

  const productMouseX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const productMouseY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const labelMouseX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const labelMouseY = useTransform(springY, [-0.5, 0.5], [-4, 4]);
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const textColor =
    variant === "accent"
      ? "text-white/[0.11]"
      : variant === "duo"
        ? "text-primary/[0.065]"
        : "text-primary/[0.07]";

  const subtextColor =
    variant === "accent" ? "text-white/[0.07]" : "text-primary/[0.045]";

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${aspect} ${className}`}
    >
      {/* Tipografía de fondo — más pequeña y legible */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center px-4"
        aria-hidden
      >
        <motion.div
          style={{
            x: labelX,
            y: labelY,
            rotate: labelRotate,
            scale: labelScale,
          }}
          className="flex max-w-full flex-col items-center text-center"
        >
          <motion.span
            style={{ x: labelMouseX, y: labelMouseY }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className={`font-display text-[clamp(1.75rem,9vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight ${textColor} select-none`}
          >
            {label}
          </motion.span>
          {sublabel && (
            <motion.span
              style={{
                x: sublabelX,
                y: sublabelY,
                rotate: sublabelRotate,
              }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className={`mt-1.5 font-display text-[clamp(0.75rem,2.5vw,1.35rem)] uppercase tracking-[0.28em] ${subtextColor} select-none`}
            >
              {sublabel}
            </motion.span>
          )}
        </motion.div>
      </div>

      <motion.div
        style={{ scaleX: lineScaleX }}
        className={`pointer-events-none absolute left-1/2 top-1/2 z-[1] h-px w-[70%] -translate-x-1/2 -translate-y-1/2 origin-center ${
          variant === "accent" ? "bg-white/10" : "bg-primary/10"
        }`}
      />

      {/* Producto */}
      <motion.div
        style={{ y: imageY }}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -4, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: productMouseY,
            x: productMouseX,
            rotate: imageRotate,
            scale: imageScale,
          }}
          className="flex max-h-[88%] max-w-[88%] items-center justify-center"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            unoptimized
            className="h-auto max-h-full w-auto max-w-full object-contain"
            sizes={sizes}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
