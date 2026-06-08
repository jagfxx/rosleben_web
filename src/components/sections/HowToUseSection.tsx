"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_TO_USE, INDIVIDUAL_PRODUCTS } from "@/lib/constants";

export function HowToUseSection() {
  return (
    <section id="como-usar" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Tu ritual de cuidado en 6 pasos"
          subtitle="Una rutina simple que transforma cada lavado en un momento de bienestar."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {INDIVIDUAL_PRODUCTS.map((product, productIndex) => (
            <FadeIn key={product.id} delay={productIndex * 0.15}>
              <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
                <div className="flex items-center gap-5">
                  <div className="relative h-24 w-16 shrink-0 md:h-32 md:w-20">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {product.type}
                    </span>
                    <h3 className="mt-1 font-display text-lg text-primary">
                      Pasos {product.steps[0]}–{product.steps[product.steps.length - 1]}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {HOW_TO_USE.filter((step) => product.steps.includes(step.step)).map(
                    (step) => (
                      <div
                        key={step.step}
                        className="flex gap-4 rounded-xl border border-border bg-white p-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                          {step.step}
                        </span>
                        <p className="text-sm leading-relaxed text-subheading pt-1">
                          {step.text}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
