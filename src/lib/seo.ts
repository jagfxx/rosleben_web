import {
  PRODUCT_DESCRIPTION,
  PRODUCT_IMAGES,
  PRODUCT_NAME,
  PRODUCT_PRICE,
} from "./constants";

export const siteConfig = {
  name: "ROSLEBEN",
  title: "ROSLEBEN — Shampoo y Acondicionador de Guanábana Sin Sulfatos",
  description:
    "Descubre el Dúo ROSLEBEN: shampoo y acondicionador de guanábana con fórmula profesional sin sulfatos. Tratamiento capilar natural para cabello más fuerte, brillante y saludable. Envío nacional en Colombia.",
  url: "https://rosleben.com",
  keywords: [
    "Shampoo de Guanábana",
    "Acondicionador de Guanábana",
    "Tratamiento Capilar",
    "Shampoo Sin Sulfatos",
    "Shampoo Natural",
    "Cuidado Capilar",
    "Productos Capilares Colombia",
    "ROSLEBEN",
    "Dúo ROSLEBEN",
    "cabello saludable",
    "shampoo profesional",
  ],
  ogImage: PRODUCT_IMAGES.duo,
};

export function getProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    description: PRODUCT_DESCRIPTION,
    brand: {
      "@type": "Brand",
      name: "ROSLEBEN",
    },
    image: `${siteConfig.url}${PRODUCT_IMAGES.duo}`,
    offers: {
      "@type": "Offer",
      price: PRODUCT_PRICE,
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
      url: siteConfig.url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "2500",
    },
  };
}
