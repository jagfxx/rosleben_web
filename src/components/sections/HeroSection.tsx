"use client";

import { motion } from "framer-motion";
import { Check, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { DuoPriceBlock, DuoPromoBadge } from "@/components/ui/DuoPromo";
import { ProductShowcaseImage } from "@/components/ui/ProductShowcaseImage";
import { handleCheckout } from "@/lib/checkout";
import {
  DUO_CTA_LABEL,
  PRODUCT_IMAGES,
  SATISFIED_CUSTOMERS,
  TRUST_BADGES,
} from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center px-6 pt-24 pb-16 lg:px-8 lg:pt-0">
        <div className="relative z-10 flex flex-1 flex-col justify-center lg:pr-12 lg:max-w-xl xl:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <DuoPromoBadge />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Dúo ROSLEBEN
              </span>
            </div>
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

          <FadeIn delay={0.3} className="mt-8 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm shadow-primary/5">
            <DuoPriceBlock size="md" />
          </FadeIn>

          <FadeIn delay={0.35} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={() => handleCheckout("duo")}>
              {DUO_CTA_LABEL}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-10 flex flex-1 items-center justify-center lg:mt-0"
        >
          <ProductShowcaseImage
            src={PRODUCT_IMAGES.duo}
            alt="Dúo ROSLEBEN — Shampoo y Acondicionador Fusión Natural de Guanábana"
            label="Dúo"
            sublabel="ROSLEBEN"
            variant="duo"
            aspect="aspect-[4/5]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="max-w-lg lg:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
