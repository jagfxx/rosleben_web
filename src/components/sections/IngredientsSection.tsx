"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INGREDIENTS } from "@/lib/constants";

export function IngredientsSection() {
  return (
    <section id="ingredientes" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Ingredientes que tu cabello reconoce"
          subtitle="Seleccionados por su poder natural y respaldados por formulación profesional."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {INGREDIENTS.map((ingredient, i) => (
            <FadeIn key={ingredient.name} delay={i * 0.1}>
              <article className="group relative overflow-hidden rounded-2xl border border-border p-8 md:p-10 transition-all duration-500 hover:border-primary/20">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-150" />
                <span className="relative text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                  Ingrediente activo
                </span>
                <h3 className="relative mt-3 font-display text-2xl md:text-3xl text-primary">
                  {ingredient.name}
                </h3>
                <p className="relative mt-4 text-base leading-relaxed text-subheading">
                  {ingredient.benefit}
                </p>
                <div className="relative mt-6 h-px w-12 bg-primary/40 transition-all duration-500 group-hover:w-20" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
