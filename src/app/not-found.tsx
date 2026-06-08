import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        ROSLEBEN
      </span>
      <h1 className="mt-4 font-display text-3xl md:text-4xl text-foreground">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted">
        La página que buscas no existe. Vuelve al inicio para descubrir el Dúo ROSLEBEN.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
