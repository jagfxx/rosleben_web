"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { handleCheckout, type CheckoutProduct } from "@/lib/checkout";
import { INDIVIDUAL_PRODUCTS } from "@/lib/constants";
import { formatPriceValue } from "@/lib/utils";

type Product = (typeof INDIVIDUAL_PRODUCTS)[number];

interface IndividualProductSectionProps {
  product: Product;
  reversed?: boolean;
  sectionId?: string;
  variant?: "light" | "accent";
}

export function IndividualProductSection({
  product,
  reversed = false,
  sectionId,
  variant = "light",
}: IndividualProductSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);

  const isAccent = variant === "accent";

  return (
    <section
      ref={sectionRef}
      id={sectionId ?? (product.id === "conditioner" ? "acondicionador" : product.id)}
      className={`relative min-h-screen overflow-hidden ${
        isAccent ? "bg-primary" : "bg-white"
      }`}
    >
      <div
        className={`mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-24 pb-20 lg:px-8 lg:py-0 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:items-center`}
      >
        {/* Text */}
        <div
          className={`relative z-10 flex flex-1 flex-col justify-center ${
            reversed ? "lg:pl-12" : "lg:pr-12"
          } lg:max-w-xl xl:max-w-2xl`}
        >
          <FadeIn direction={reversed ? "left" : "right"}>
            <span
              className={`mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
                isAccent ? "text-white/70" : "text-primary"
              }`}
            >
              {product.type}
            </span>
            <h2
              className={`font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl ${
                isAccent ? "text-white" : "text-primary"
              }`}
            >
              {product.name}
            </h2>
            <p
              className={`mt-4 text-lg font-medium leading-snug ${
                isAccent ? "text-white/90" : "text-primary-light"
              }`}
            >
              {product.headline}
            </p>
            <p
              className={`mt-5 text-base leading-relaxed md:text-lg ${
                isAccent ? "text-white/75" : "text-subheading"
              }`}
            >
              {product.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8">
            <div className="flex flex-wrap gap-2.5">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs ${
                    isAccent
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-border bg-background text-foreground"
                  }`}
                >
                  <Check
                    size={12}
                    className={isAccent ? "text-white" : "text-primary"}
                    strokeWidth={2.5}
                  />
                  {feature}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8">
            <span
              className={`font-display text-4xl md:text-5xl ${
                isAccent ? "text-white" : "text-primary"
              }`}
            >
              {formatPriceValue(product.price)}
            </span>
            <p
              className={`mt-2 text-sm ${
                isAccent ? "text-white/60" : "text-muted"
              }`}
            >
              Contenido neto {product.volume}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10">
            <Button
              size="lg"
              variant={isAccent ? "white" : "primary"}
              onClick={() => handleCheckout(product.id as CheckoutProduct)}
            >
              Comprar ahora
            </Button>
          </FadeIn>
        </div>

        {/* Image */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative mt-12 flex flex-1 items-center justify-center lg:mt-0"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <motion.div
              style={{ opacity: glowOpacity }}
              className={`absolute inset-0 rounded-full blur-3xl ${
                isAccent ? "bg-white/20" : "bg-primary/10"
              }`}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
