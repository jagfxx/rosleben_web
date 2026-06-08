"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { handleCheckout } from "@/lib/checkout";

export function FinalCTASection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-primary">
            Descubre el poder de la naturaleza para tu cabello.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-subheading">
            Únete a miles de personas que ya eligieron un cuidado capilar consciente,
            efectivo y premium.
          </p>
          <div className="mt-10">
            <Button size="xl" onClick={() => handleCheckout("duo")}>
              Comprar ahora
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
