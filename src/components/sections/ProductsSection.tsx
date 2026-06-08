"use client";

import { DuoPriceBlock, DuoPromoBadge } from "@/components/ui/DuoPromo";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProductShowcaseImage } from "@/components/ui/ProductShowcaseImage";
import { Button } from "@/components/ui/Button";
import { handleCheckout } from "@/lib/checkout";
import { DUO_CTA_LABEL, INDIVIDUAL_PRODUCTS, PRODUCT_IMAGES } from "@/lib/constants";
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
            <div className="mb-4 flex justify-center">
              <DuoPromoBadge />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-primary">
              Promoción especial — Dúo ROSLEBEN
            </h2>
            <p className="mt-4 text-base md:text-lg text-subheading">
              Shampoo + Acondicionador con precio exclusivo y envío gratis.
            </p>
            <div className="mx-auto mt-6 max-w-xs">
              <DuoPriceBlock size="sm" className="text-center [&>div]:justify-center" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-primary/30">
                  Oferta limitada
                </span>
              </div>
              <ProductShowcaseImage
                src={PRODUCT_IMAGES.duo}
                alt="Dúo ROSLEBEN"
                label="Oferta"
                sublabel="Dúo"
                variant="duo"
                aspect="aspect-[16/10]"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="mt-8 flex justify-center">
                <Button size="lg" onClick={() => handleCheckout("duo")}>
                  {DUO_CTA_LABEL}
                </Button>
              </div>
            </div>
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
