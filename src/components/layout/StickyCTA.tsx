"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DuoPriceBlock, DuoPromoBadge } from "@/components/ui/DuoPromo";
import { handleCheckout } from "@/lib/checkout";
import { DUO_CTA_LABEL, PRODUCT_NAME } from "@/lib/constants";

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
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="border-t border-primary/20 bg-primary px-4 py-3 shadow-[0_-8px_30px_rgba(239,67,106,0.25)]">
            <div className="mb-2 flex items-center justify-between gap-2">
              <DuoPromoBadge light />
              <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-white/70">
                <Sparkles size={10} />
                Promoción dúo
              </span>
            </div>
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{PRODUCT_NAME}</p>
                <DuoPriceBlock light size="sm" showSavings={false} className="mt-0.5" />
              </div>
              <Button
                variant="white"
                size="md"
                className="shrink-0"
                onClick={() => handleCheckout("duo")}
              >
                {DUO_CTA_LABEL}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
