import { PRODUCT_PRICE } from "./constants";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceValue(price: number = PRODUCT_PRICE): string {
  return formatPrice(price);
}
