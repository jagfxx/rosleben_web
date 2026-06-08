"use client";

import { Lock, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProductShowcaseImage } from "@/components/ui/ProductShowcaseImage";
import { handleCheckout } from "@/lib/checkout";
import {
  DUO_SAVINGS,
  INDIVIDUAL_TOTAL_PRICE,
  PRODUCT_IMAGES,
  PRODUCT_PRICE,
} from "@/lib/constants";
import { formatPriceValue } from "@/lib/utils";

const trustItems = [
  { icon: ShieldCheck, label: "Compra segura" },
  { icon: Lock, label: "Pago protegido" },
  { icon: Truck, label: "Envío gratis" },
];

export function OfferSection() {
  return (
    <section id="oferta" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Promoción dúo
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                Todo lo que tu cabello necesita en un solo ritual.
              </h2>
              <p className="mt-4 text-base text-white/80 md:text-lg">
                Shampoo + Acondicionador — 400ml + 400ml
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col items-center gap-2 lg:items-start">
                <span className="text-lg text-white/50 line-through">
                  {formatPriceValue(INDIVIDUAL_TOTAL_PRICE)}
                </span>
                <span className="font-display text-5xl md:text-6xl text-white">
                  {formatPriceValue(PRODUCT_PRICE)}
                </span>
                <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
                  Ahorras {formatPriceValue(DUO_SAVINGS)} · Envío gratis
                </span>
              </div>
              <p className="mt-3 text-sm text-white/60">
                Compra los dos por separado: {formatPriceValue(INDIVIDUAL_TOTAL_PRICE)}. En dúo: {formatPriceValue(PRODUCT_PRICE)} con envío incluido.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10">
              <Button
                variant="white"
                size="xl"
                fullWidth
                className="lg:w-auto"
                onClick={() => handleCheckout("duo")}
              >
                Comprar ahora
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
