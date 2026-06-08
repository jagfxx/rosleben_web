"use client";

import { Check, X } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPARISON } from "@/lib/constants";

function ComparisonCell({ value }: { value: boolean }) {
  return value ? (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
      <Check size={16} className="text-primary" strokeWidth={2.5} />
    </div>
  ) : (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5">
      <X size={16} className="text-muted" strokeWidth={2} />
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="ROSLEBEN vs productos convencionales"
          subtitle="La diferencia está en lo que elegimos no incluir."
        />

        <FadeIn>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-white">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-border bg-background">
              <div className="p-5 md:p-6" />
              <div className="border-x border-border p-5 md:p-6 text-center">
                <span className="font-display text-lg text-primary">ROSLEBEN</span>
              </div>
              <div className="p-5 md:p-6 text-center">
                <span className="text-sm text-muted">Convencionales</span>
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.rosleben.map((item, i) => (
              <div
                key={item.label}
                className={`grid grid-cols-3 items-center ${
                  i < COMPARISON.rosleben.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-5 md:p-6">
                  <span className="text-sm font-medium text-primary">{item.label}</span>
                </div>
                <div className="flex justify-center border-x border-border p-5 md:p-6">
                  <ComparisonCell value={item.value} />
                </div>
                <div className="flex justify-center p-5 md:p-6">
                  <ComparisonCell value={COMPARISON.conventional[i].value} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
