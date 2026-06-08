"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { handleCheckout } from "@/lib/checkout";
import { formatPriceValue } from "@/lib/utils";
import { PRODUCT_PRICE } from "@/lib/constants";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 backdrop-blur-lg p-4 md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-primary/70">Dúo ROSLEBEN</p>
              <p className="text-lg font-semibold text-primary">
                {formatPriceValue(PRODUCT_PRICE)}
              </p>
            </div>
            <Button size="md" onClick={() => handleCheckout()}>
              Comprar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
