"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        ROSLEBEN
      </span>
      <h1 className="mt-4 font-display text-3xl md:text-4xl text-foreground">
        Algo salió mal
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Ocurrió un error inesperado. Intenta recargar la página.
      </p>
      <div className="mt-8">
        <Button onClick={reset}>Intentar de nuevo</Button>
      </div>
    </div>
  );
}
