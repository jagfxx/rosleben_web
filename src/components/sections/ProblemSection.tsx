"use client";

import { Droplets, Flame, ShieldOff, Sparkles, Wind } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEMS } from "@/lib/constants";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  wind: Wind,
  droplets: Droplets,
  sparkles: Sparkles,
  flame: Flame,
  "shield-off": ShieldOff,
};

export function ProblemSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Tu cabello enfrenta agresiones todos los días"
          subtitle="Factores externos y productos convencionales debilitan tu melena sin que lo notes."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PROBLEMS.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <FadeIn key={problem.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-primary">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subheading">
                    {problem.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
