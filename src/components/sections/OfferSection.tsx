"use client";

import { Lock, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxOrbs } from "@/components/ui/ParallaxOrbs";
import { ProductShowcaseImage } from "@/components/ui/ProductShowcaseImage";
import { handleCheckout } from "@/lib/checkout";
import { DuoPriceBlock, DuoPromoBadge } from "@/components/ui/DuoPromo";
import { DUO_CTA_LABEL, PRODUCT_IMAGES } from "@/lib/constants";

const trustItems = [
  { icon: ShieldCheck, label: "Compra segura" },
  { icon: Lock, label: "Pago protegido" },
  { icon: Truck, label: "Envío gratis" },
];

export function OfferSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-primary py-24 md:py-32">
      <ParallaxOrbs variant="accent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <ProductShowcaseImage
              src={PRODUCT_IMAGES.duo}
              alt="Dúo ROSLEBEN — Shampoo 400ml + Acondicionador 400ml"
              label="Oferta"
              sublabel="Dúo"
              variant="accent"
              aspect="aspect-square"
              sizes="(max-width: 768px) 80vw, 40vw"
              className="mx-auto max-w-sm lg:max-w-md"
            />
          </FadeIn>

          <div className="text-center lg:text-left">
            <FadeIn>
              <DuoPromoBadge light className="mb-4" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                Oferta especial — Todo en un solo ritual
              </h2>
              <p className="mt-4 text-base text-white/80 md:text-lg">
                Shampoo + Acondicionador 400ml · Envío gratis incluido
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <DuoPriceBlock light size="lg" className="mt-8 lg:text-left" />
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10">
              <Button
                variant="white"
                size="xl"
                fullWidth
                className="lg:w-auto"
                onClick={() => handleCheckout("duo")}
              >
                {DUO_CTA_LABEL}
              </Button>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-8">
              <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
                {trustItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-white/80">
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
