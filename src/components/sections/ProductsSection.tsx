"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { INDIVIDUAL_PRODUCTS, PRODUCT_IMAGES } from "@/lib/constants";
import { IndividualProductSection } from "./IndividualProductSection";

export function ProductsSection() {
  const shampoo = INDIVIDUAL_PRODUCTS[0];
  const conditioner = INDIVIDUAL_PRODUCTS[1];

  return (
    <>
      {/* Dúo — transición editorial */}
      <section className="bg-background py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Conoce el dúo
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-primary">
              Dos productos, un ritual completo
            </h2>
            <p className="mt-4 text-base md:text-lg text-subheading">
              Descubre cada fórmula por separado y cómo trabajan juntas.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-3xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />
              <div className="relative aspect-[16/10]">
                <Image
                  src={PRODUCT_IMAGES.duo}
                  alt="Dúo ROSLEBEN"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Shampoo — sección dominante */}
      <IndividualProductSection
        product={shampoo}
        sectionId="productos"
        variant="light"
      />

      {/* Acondicionador — sección dominante alternada */}
      <IndividualProductSection
        product={conditioner}
        sectionId="acondicionador"
        reversed
        variant="accent"
      />
    </>
  );
}
