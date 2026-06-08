"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DuoPromoBadge } from "@/components/ui/DuoPromo";
import { handleCheckout } from "@/lib/checkout";
import { DUO_CTA_LABEL, PRODUCT_PRICE } from "@/lib/constants";
import { formatPriceValue } from "@/lib/utils";

const navLinks = [
  { label: "Shampoo", href: "#productos" },
  { label: "Acondicionador", href: "#acondicionador" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Ingredientes", href: "#ingredientes" },
  { label: "Cómo usar", href: "#como-usar" },
  { label: "Opiniones", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 1px 20px rgba(0,0,0,0.04)"]
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor: background, boxShadow: shadow }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute bottom-0 left-0 right-0 h-px bg-border"
        />
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/images/logo.png"
              alt="ROSLEBEN"
              width={140}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" onClick={() => handleCheckout("duo")}>
              {DUO_CTA_LABEL} · {formatPriceValue(PRODUCT_PRICE)}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 lg:hidden text-foreground"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg lg:hidden"
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display text-primary"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <div className="flex flex-col items-center gap-4">
            <DuoPromoBadge />
            <Button size="lg" onClick={() => { setIsOpen(false); handleCheckout("duo"); }}>
              {DUO_CTA_LABEL} · {formatPriceValue(PRODUCT_PRICE)}
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
