"use client";



import { motion, type Variants } from "framer-motion";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { FadeIn } from "@/components/ui/FadeIn";

import { DuoPriceBlock, DuoPromoBadge } from "@/components/ui/DuoPromo";

import { ParallaxOrbs } from "@/components/ui/ParallaxOrbs";

import { ProductShowcaseImage } from "@/components/ui/ProductShowcaseImage";

import { handleCheckout } from "@/lib/checkout";

import {

  DUO_CTA_LABEL,

  PRODUCT_IMAGES,

  TRUST_BADGES,

} from "@/lib/constants";



const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};



export function HeroSection() {

  return (

    <section className="relative min-h-screen overflow-hidden bg-background">

      <ParallaxOrbs />



      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center px-6 pt-nav pb-16 lg:px-8">

        <motion.div

          variants={stagger}

          initial="hidden"

          animate="visible"

          className="relative z-10 flex flex-1 flex-col justify-center lg:pr-12 lg:max-w-xl xl:max-w-2xl"

        >

          <motion.div variants={item} className="mb-4 flex flex-wrap items-center gap-3">

            <DuoPromoBadge />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">

              Dúo ROSLEBEN

            </span>

          </motion.div>



          <motion.h1

            variants={item}

            className="font-display text-4xl leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl"

          >

            Cabello más fuerte, brillante y saludable desde el primer lavado.

          </motion.h1>



          <motion.p

            variants={item}

            className="mt-6 text-base leading-relaxed text-subheading md:text-lg"

          >

            Fórmula profesional con Guanábana, Té Verde, Guaraná y Phytoqueratina.

          </motion.p>



          <FadeIn delay={0.2} className="mt-8">

            <div className="flex flex-wrap gap-2.5">

              {TRUST_BADGES.map((badge, index) => (

                <motion.span

                  key={badge}

                  initial={{ opacity: 0, scale: 0.85 }}

                  animate={{ opacity: 1, scale: 1 }}

                  transition={{

                    delay: 0.45 + index * 0.06,

                    duration: 0.6,

                    ease: [0.16, 1, 0.3, 1],

                  }}

                  whileHover={{ scale: 1.04, y: -2 }}

                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3.5 py-1.5 text-xs text-primary"

                >

                  <Check size={12} className="text-primary" strokeWidth={2.5} />

                  {badge}

                </motion.span>

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

        </motion.div>



        <motion.div

          initial={{ opacity: 0, scale: 0.92, x: 40 }}

          animate={{ opacity: 1, scale: 1, x: 0 }}

          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}

          className="relative mt-10 flex flex-1 items-center justify-center lg:mt-0"

        >

          <ProductShowcaseImage

            src={PRODUCT_IMAGES.duo}

            alt="Dúo ROSLEBEN — Shampoo y Acondicionador Fusión Natural de Guanábana"

            label="Dúo"

            sublabel="ROSLEBEN"

            variant="duo"

            aspect="aspect-square"

            priority

            sizes="(max-width: 768px) 100vw, 50vw"

            className="max-w-lg lg:max-w-none"

          />

        </motion.div>

      </div>

    </section>

  );

}


