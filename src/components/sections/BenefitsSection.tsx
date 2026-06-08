"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/lib/constants";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Beneficios que sentirás desde el primer uso"
          subtitle="Una fórmula diseñada para resultados visibles y una experiencia sensorial premium."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <FadeIn key={benefit} delay={i * 0.06}>
              <div className="flex items-center gap-3.5 rounded-xl border border-border bg-white px-5 py-4 transition-all duration-300 hover:border-primary/20 hover:shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check size={14} className="text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium text-primary">{benefit}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
