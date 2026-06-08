"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { INGREDIENTS } from "@/lib/constants";

export function SolutionSection() {
  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              La solución
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-primary">
              La fusión natural que transforma tu rutina
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-subheading">
              ROSLEBEN combina lo mejor de la naturaleza con ciencia capilar profesional.
              Cada lavado es un ritual de cuidado que fortalece, hidrata y devuelve el brillo
              a tu cabello.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {INGREDIENTS.map((ingredient, i) => (
              <FadeIn key={ingredient.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 transition-colors hover:border-primary/20">
                  <h3 className="font-display text-lg text-primary">
                    {ingredient.name}
                  </h3>
                  <p className="mt-2 text-sm text-subheading leading-relaxed">
                    {ingredient.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
