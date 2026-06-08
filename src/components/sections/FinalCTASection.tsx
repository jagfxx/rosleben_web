"use client";

import { Button } from "@/components/ui/Button";
import { DuoPriceBlock, DuoPromoBadge } from "@/components/ui/DuoPromo";
import { FadeIn } from "@/components/ui/FadeIn";
import { handleCheckout } from "@/lib/checkout";
import { DUO_CTA_LABEL } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <div className="mb-6 flex justify-center">
            <DuoPromoBadge />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-primary">
            Descubre el poder de la naturaleza para tu cabello.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-subheading">
            Llévate el dúo completo con promoción especial y envío gratis.
          </p>
          <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-primary/15 bg-white p-6 shadow-sm shadow-primary/5">
            <DuoPriceBlock className="text-center [&>div]:justify-center" />
          </div>
          <div className="mt-10">
            <Button size="xl" onClick={() => handleCheckout("duo")}>
              {DUO_CTA_LABEL}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
