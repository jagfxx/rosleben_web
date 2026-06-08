import {
  CONDITIONER_PRICE,
  INDIVIDUAL_PRODUCTS,
  PRODUCT_NAME,
  PRODUCT_PRICE,
  SHAMPOO_PRICE,
  WHATSAPP_NUMBER,
} from "./constants";
import { formatPriceValue } from "./utils";

export type CheckoutProduct = "duo" | "shampoo" | "conditioner";

export interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CheckoutPayload {
  items: CheckoutItem[];
  total: number;
  currency: string;
  product: CheckoutProduct;
}

function getProductDetails(product: CheckoutProduct) {
  switch (product) {
    case "shampoo":
      return {
        id: "shampoo-rosleben",
        name: INDIVIDUAL_PRODUCTS[0].name,
        price: SHAMPOO_PRICE,
      };
    case "conditioner":
      return {
        id: "conditioner-rosleben",
        name: INDIVIDUAL_PRODUCTS[1].name,
        price: CONDITIONER_PRICE,
      };
    default:
      return {
        id: "duo-rosleben",
        name: PRODUCT_NAME,
        price: PRODUCT_PRICE,
      };
  }
}

function getWhatsAppCheckoutUrl(product: CheckoutProduct): string {
  const details = getProductDetails(product);

  const lines = ["Hola, quiero hacer un pedido en ROSLEBEN.", "", `Producto: ${details.name}`, `Precio: ${formatPriceValue(details.price)}`];

  if (product === "duo") {
    lines.push("Promoción dúo — Envío gratis");
  }

  lines.push("", "¿Me ayudas con el pedido?");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Redirige a WhatsApp para completar la compra.
 * Más adelante conectar con MercadoPago, Bold, Wompi o Stripe.
 */
export function handleCheckout(product: CheckoutProduct = "duo"): void {
  const details = getProductDetails(product);

  const payload: CheckoutPayload = {
    product,
    items: [
      {
        id: details.id,
        name: details.name,
        price: details.price,
        quantity: 1,
      },
    ],
    total: details.price,
    currency: "COP",
  };

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("rosleben:checkout", { detail: payload })
    );
    window.open(getWhatsAppCheckoutUrl(product), "_blank", "noopener,noreferrer");
  }
}
