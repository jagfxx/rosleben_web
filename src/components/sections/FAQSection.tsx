"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitas saber antes de comenzar tu ritual ROSLEBEN."
        />

        <FadeIn>
          <Accordion items={FAQ_ITEMS} />
        </FadeIn>
      </div>
    </section>
  );
}
