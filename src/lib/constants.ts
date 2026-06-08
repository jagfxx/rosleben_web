export const SHAMPOO_PRICE = 43000;
export const CONDITIONER_PRICE = 45000;
export const INDIVIDUAL_TOTAL_PRICE = SHAMPOO_PRICE + CONDITIONER_PRICE;
export const PRODUCT_PRICE = 80000;
export const DUO_SAVINGS = INDIVIDUAL_TOTAL_PRICE - PRODUCT_PRICE;

export const PRODUCT_NAME = "Dúo ROSLEBEN";
export const PRODUCT_DESCRIPTION =
  "Shampoo y Acondicionador Fusión Natural de Guanábana — tratamiento capilar profesional sin sulfatos.";

export const PRODUCT_IMAGES = {
  duo: "/images/duo.png",
  shampoo: "/images/shampoo.png",
  conditioner: "/images/conditioner.png",
} as const;

export const INDIVIDUAL_PRODUCTS = [
  {
    id: "shampoo",
    name: "Shampoo Fusión Natural de Guanábana",
    type: "Shampoo",
    price: SHAMPOO_PRICE,
    volume: "400 ml",
    image: PRODUCT_IMAGES.shampoo,
    headline: "Limpieza profunda que respeta tu cabello.",
    description:
      "Limpia suavemente sin sulfatos ni sal. Su fórmula con extracto de guanábana, té verde y phytoqueratina prepara tu cabello para un tratamiento profundo desde la raíz.",
    features: [
      "Sin sulfatos ni sal",
      "Extracto de guanábana",
      "Té verde antioxidante",
      "Phytoqueratina reparadora",
    ],
    steps: [1, 2, 3] as number[],
  },
  {
    id: "conditioner",
    name: "Acondicionador Tratamiento Capilar",
    type: "Acondicionador",
    price: CONDITIONER_PRICE,
    volume: "400 ml",
    image: PRODUCT_IMAGES.conditioner,
    headline: "Tratamiento intensivo de medios a puntas.",
    description:
      "Sella la humedad, suaviza y fortalece cada hebra. Déjalo actuar 5 minutos para un acabado profesional con brillo, suavidad y protección duradera.",
    features: [
      "Tratamiento capilar profesional",
      "Fusión natural de guanábana",
      "Sellado de humedad",
      "Ideal para cabello teñido",
    ],
    steps: [4, 5, 6] as number[],
  },
] as const;

export const TRUST_BADGES = [
  "Sin Sulfatos",
  "Sin Sal",
  "Sin Parabenos",
  "Sin Colorantes",
  "No testeado en animales",
] as const;

export const SATISFIED_CUSTOMERS = "2.500+";

export const WHATSAPP_NUMBER = "573244312649";

export const CONTACT = {
  instagram: "https://instagram.com/rosleben",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: "mailto:hola@rosleben.com",
} as const;

export const PROBLEMS = [
  {
    title: "Frizz",
    description: "El exceso de humedad y productos agresivos descontrolan tu melena.",
    icon: "wind",
  },
  {
    title: "Resequedad",
    description: "El cabello pierde su humedad natural y se siente áspero al tacto.",
    icon: "droplets",
  },
  {
    title: "Falta de brillo",
    description: "La fibra capilar opaca refleja un cabello apagado y sin vida.",
    icon: "sparkles",
  },
  {
    title: "Daño por calor",
    description: "Planchas y secadores debilitan la estructura del cabello día a día.",
    icon: "flame",
  },
  {
    title: "Debilidad capilar",
    description: "La rotura y las puntas abiertas son señales de un cabello frágil.",
    icon: "shield-off",
  },
] as const;

export const INGREDIENTS = [
  {
    name: "Guanábana",
    benefit: "Ayuda a mantener la hidratación natural del cabello.",
    description:
      "Extracto rico en vitaminas que nutre la fibra capilar desde la raíz hasta las puntas.",
  },
  {
    name: "Té Verde",
    benefit: "Rico en antioxidantes que ayudan a proteger la fibra capilar.",
    description:
      "Potente aliado contra el estrés oxidativo causado por factores externos.",
  },
  {
    name: "Phytoqueratina",
    benefit: "Ayuda a fortalecer y mejorar la apariencia del cabello.",
    description:
      "Repara y sella la cutícula capilar para un acabado suave y luminoso.",
  },
  {
    name: "Guaraná",
    benefit: "Aporta vitalidad y energía al cabello.",
    description:
      "Estimula el cuero cabelludo y revitaliza cada hebra con energía natural.",
  },
] as const;

export const BENEFITS = [
  "Hidratación profunda",
  "Cabello más suave",
  "Mayor brillo",
  "Sensación ligera",
  "Fórmula profesional",
  "Ingredientes seleccionados",
  "Libre de sulfatos",
  "Libre de parabenos",
] as const;

export const HOW_TO_USE = [
  { step: 1, text: "Aplica el shampoo sobre cabello húmedo." },
  { step: 2, text: "Masajea suavemente." },
  { step: 3, text: "Enjuaga completamente." },
  { step: 4, text: "Aplica acondicionador de medios a puntas." },
  { step: 5, text: "Deja actuar 5 minutos." },
  { step: 6, text: "Enjuaga." },
] as const;

export const COMPARISON = {
  rosleben: [
    { label: "Sin sulfatos", value: true },
    { label: "Sin parabenos", value: true },
    { label: "Sin colorantes", value: true },
    { label: "Ingredientes naturales", value: true },
    { label: "No testeado en animales", value: true },
  ],
  conventional: [
    { label: "Sin sulfatos", value: false },
    { label: "Sin parabenos", value: false },
    { label: "Sin colorantes", value: false },
    { label: "Ingredientes naturales", value: false },
    { label: "No testeado en animales", value: false },
  ],
} as const;

export const TESTIMONIALS = [
  {
    name: "Valentina M.",
    rating: 5,
    comment:
      "Desde el primer lavado noté mi cabello más suave y con brillo. El aroma es delicado y la textura es increíble.",
    initials: "VM",
  },
  {
    name: "Camila R.",
    rating: 5,
    comment:
      "Llevaba meses buscando un shampoo sin sulfatos que realmente funcionara. ROSLEBEN superó mis expectativas.",
    initials: "CR",
  },
  {
    name: "Andrea L.",
    rating: 5,
    comment:
      "Mi cabello teñido se siente protegido y nutrido. El acondicionador deja las puntas impecables.",
    initials: "AL",
  },
  {
    name: "Mariana S.",
    rating: 5,
    comment:
      "La diferencia es notable: menos frizz, más volumen natural y un brillo que no había tenido en años.",
    initials: "MS",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Tiene sulfatos?",
    answer:
      "No. Nuestra fórmula está libre de sulfatos, lo que la hace ideal para un lavado suave que respeta la fibra capilar sin resecar.",
  },
  {
    question: "¿Es para cabello teñido?",
    answer:
      "Sí. El Dúo ROSLEBEN es seguro para cabello teñido, tratado químicamente o natural. Sus ingredientes naturales ayudan a mantener el color vibrante.",
  },
  {
    question: "¿Cada cuánto debo usarlo?",
    answer:
      "Recomendamos usarlo 2 a 3 veces por semana para resultados óptimos. Puedes ajustar la frecuencia según las necesidades de tu cabello.",
  },
  {
    question: "¿Sirve para hombres y mujeres?",
    answer:
      "Absolutamente. Nuestra fórmula unisex está diseñada para todo tipo de cabello, sin importar género o textura.",
  },
  {
    question: "¿Cuánto dura?",
    answer:
      "Cada frasco contiene 400ml. Con uso regular (2-3 veces por semana), el dúo puede durar entre 2 y 3 meses.",
  },
  {
    question: "¿Tiene parabenos?",
    answer:
      "No. Estamos comprometidos con fórmulas limpias. El Dúo ROSLEBEN no contiene parabenos, colorantes artificiales ni sal añadida.",
  },
] as const;
