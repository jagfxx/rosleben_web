import Link from "next/link";
import {
  DUO_PROMO_BADGE,
  DUO_SAVINGS,
  INDIVIDUAL_TOTAL_PRICE,
  PRODUCT_PRICE,
} from "@/lib/constants";
import { formatPriceValue } from "@/lib/utils";

interface DuoPromoBadgeProps {
  light?: boolean;
  className?: string;
  href?: string;
}

export function DuoPromoBadge({
  light = false,
  className = "",
  href = "#oferta",
}: DuoPromoBadgeProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-[1.03] ${
        light
          ? "bg-white/15 text-white border border-white/20"
          : "bg-primary/10 text-primary border border-primary/15"
      } ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
            light ? "bg-white" : "bg-primary"
          }`}
        />
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            light ? "bg-white" : "bg-primary"
          }`}
        />
      </span>
      {DUO_PROMO_BADGE}
    </Link>
  );
}

interface DuoPriceBlockProps {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  showSavings?: boolean;
  className?: string;
}

export function DuoPriceBlock({
  light = false,
  size = "md",
  showSavings = true,
  className = "",
}: DuoPriceBlockProps) {
  const priceSize =
    size === "lg"
      ? "text-4xl md:text-5xl"
      : size === "sm"
        ? "text-xl"
        : "text-3xl md:text-4xl";

  const oldPriceSize = size === "sm" ? "text-sm" : "text-base md:text-lg";

  return (
    <div className={className}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className={`${oldPriceSize} line-through ${
            light ? "text-white/45" : "text-muted"
          }`}
        >
          {formatPriceValue(INDIVIDUAL_TOTAL_PRICE)}
        </span>
        <span
          className={`font-display font-bold ${priceSize} ${
            light ? "text-white" : "text-primary"
          }`}
        >
          {formatPriceValue(PRODUCT_PRICE)}
        </span>
      </div>
      {showSavings && (
        <p
          className={`mt-1.5 text-xs font-medium ${
            light ? "text-white/75" : "text-subheading"
          }`}
        >
          Ahorras {formatPriceValue(DUO_SAVINGS)} · Envío gratis en el dúo
        </p>
      )}
    </div>
  );
}
