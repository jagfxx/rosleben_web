"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProductShowcaseImage } from "@/components/ui/ProductShowcaseImage";
import { handleCheckout, type CheckoutProduct } from "@/lib/checkout";
import { INDIVIDUAL_PRODUCTS } from "@/lib/constants";
import { formatPriceValue } from "@/lib/utils";

type Product = (typeof INDIVIDUAL_PRODUCTS)[number];

interface IndividualProductSectionProps {
  product: Product;
  reversed?: boolean;
  sectionId?: string;
  variant?: "light" | "accent";
}

export function IndividualProductSection({
  product,
  reversed = false,
  sectionId,
  variant = "light",
}: IndividualProductSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isAccent = variant === "accent";

  const showcaseLabel =
    product.id === "shampoo" ? "Shampoo" : "Tratamiento";
  const showcaseSublabel =
    product.id === "shampoo" ? "Fusión" : "Capilar";

  return (
    <section
      ref={sectionRef}
      id={sectionId ?? (product.id === "conditioner" ? "acondicionador" : product.id)}
      className={`relative min-h-screen overflow-hidden ${
        isAccent ? "bg-primary" : "bg-white"
      }`}
    >
      <div
        className={`mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-24 pb-20 lg:px-8 lg:py-0 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:items-center`}
      >
        {/* Text */}
        <div
          className={`relative z-10 flex flex-1 flex-col justify-center ${
            reversed ? "lg:pl-12" : "lg:pr-12"
          } lg:max-w-xl xl:max-w-2xl`}
        >
          <FadeIn direction={reversed ? "left" : "right"}>
            <span
              className={`mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
                isAccent ? "text-white/70" : "text-primary"
              }`}
            >
              {product.type}
            </span>
            <h2
              className={`font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl ${
                isAccent ? "text-white" : "text-primary"
              }`}
            >
              {product.name}
            </h2>
            <p
              className={`mt-4 text-lg font-medium leading-snug ${
                isAccent ? "text-white/90" : "text-primary-light"
              }`}
            >
              {product.headline}
            </p>
            <p
              className={`mt-5 text-base leading-relaxed md:text-lg ${
                isAccent ? "text-white/75" : "text-subheading"
              }`}
            >
              {product.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-8">
            <div className="flex flex-wrap gap-2.5">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs ${
                    isAccent
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-border bg-background text-foreground"
                  }`}
                >
                  <Check
                    size={12}
                    className={isAccent ? "text-white" : "text-primary"}
                    strokeWidth={2.5}
                  />
                  {feature}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8">
            <span
              className={`font-display text-4xl md:text-5xl ${
                isAccent ? "text-white" : "text-primary"
              }`}
            >
              {formatPriceValue(product.price)}
            </span>
            <p
              className={`mt-2 text-sm ${
                isAccent ? "text-white/60" : "text-muted"
              }`}
            >
              Contenido neto {product.volume}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10">
            <Button
              size="lg"
              variant={isAccent ? "white" : "primary"}
              onClick={() => handleCheckout(product.id as CheckoutProduct)}
            >
              Comprar ahora
            </Button>
          </FadeIn>
        </div>

        <div className="relative mt-12 flex flex-1 items-center justify-center lg:mt-0">
          <ProductShowcaseImage
            src={product.image}
            alt={product.name}
            label={showcaseLabel}
            sublabel={showcaseSublabel}
            variant={isAccent ? "accent" : "light"}
            className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
