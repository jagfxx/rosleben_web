import {
  PRODUCT_NAME,
  PRODUCT_PRICE,
  WHATSAPP_NUMBER,
} from "./constants";
import { formatPriceValue } from "./utils";

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
}

function getWhatsAppCheckoutUrl(): string {
  const message = [
    "Hola, quiero comprar el Dúo ROSLEBEN.",
    "",
    `Producto: ${PRODUCT_NAME}`,
    `Precio: ${formatPriceValue(PRODUCT_PRICE)}`,
    "",
    "¿Me ayudas con el pedido?",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Redirige a WhatsApp para completar la compra.
 * Más adelante conectar con MercadoPago, Bold, Wompi o Stripe.
 */
export function handleCheckout(): void {
  const payload: CheckoutPayload = {
    items: [
      {
        id: "duo-rosleben",
        name: PRODUCT_NAME,
        price: PRODUCT_PRICE,
        quantity: 1,
      },
    ],
    total: PRODUCT_PRICE,
    currency: "COP",
  };

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("rosleben:checkout", { detail: payload })
    );
    window.open(getWhatsAppCheckoutUrl(), "_blank", "noopener,noreferrer");
  }
}
