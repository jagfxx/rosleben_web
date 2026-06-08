"use client";

import Image from "next/image";
import { Lock, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { handleCheckout } from "@/lib/checkout";
import { PRODUCT_IMAGES, PRODUCT_PRICE } from "@/lib/constants";
import { formatPriceValue } from "@/lib/utils";

const trustItems = [
  { icon: ShieldCheck, label: "Compra segura" },
  { icon: Lock, label: "Pago protegido" },
  { icon: Truck, label: "Envío nacional" },
];

export function OfferSection() {
  return (
    <section id="oferta" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left">
            <div className="relative mx-auto aspect-square max-w-sm lg:max-w-md">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
              <Image
                src={PRODUCT_IMAGES.duo}
                alt="Dúo ROSLEBEN — Shampoo 400ml + Acondicionador 400ml"
                fill
                className="relative object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          </FadeIn>

          <div className="text-center lg:text-left">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Oferta exclusiva
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                Todo lo que tu cabello necesita en un solo ritual.
              </h2>
              <p className="mt-4 text-base text-white/80 md:text-lg">
                Shampoo + Acondicionador — 400ml + 400ml
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 inline-flex items-baseline gap-2">
                <span className="font-display text-5xl md:text-6xl text-white">
                  {formatPriceValue(PRODUCT_PRICE)}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/60">Precio en pesos colombianos (COP)</p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10">
              <Button
                variant="white"
                size="xl"
                fullWidth
                className="lg:w-auto"
                onClick={() => handleCheckout()}
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
