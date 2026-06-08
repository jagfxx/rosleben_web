"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { handleCheckout } from "@/lib/checkout";
import { PRODUCT_IMAGES, SATISFIED_CUSTOMERS, TRUST_BADGES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center px-6 pt-24 pb-16 lg:px-8 lg:pt-0">
        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center lg:pr-12 lg:max-w-xl xl:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Dúo ROSLEBEN
            </span>
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Cabello más fuerte, brillante y saludable desde el primer lavado.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-subheading md:text-lg">
              Fórmula profesional con Guanábana, Té Verde, Guaraná y Phytoqueratina.
            </p>
          </motion.div>

          <FadeIn delay={0.2} className="mt-8">
            <div className="flex flex-wrap gap-2.5">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3.5 py-1.5 text-xs text-primary"
                >
                  <Check size={12} className="text-primary" strokeWidth={2.5} />
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.35} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={() => handleCheckout()}>
              Comprar ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById("ingredientes")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Conocer ingredientes
            </Button>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-8">
            <div className="flex items-center gap-2 text-sm text-subheading">
              <Users size={16} className="text-primary" />
              <span>
                Más de <strong className="text-primary">{SATISFIED_CUSTOMERS}</strong> clientes
                satisfechos
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-10 flex flex-1 items-center justify-center lg:mt-0"
        >
          <div className="relative aspect-[4/5] w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />
            <Image
              src={PRODUCT_IMAGES.duo}
              alt="Dúo ROSLEBEN — Shampoo y Acondicionador Fusión Natural de Guanábana"
              fill
              className="relative object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
