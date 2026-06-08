"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFF7F8",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#EF436A",
            }}
          >
            ROSLEBEN
          </p>
          <h1
            style={{
              marginTop: "16px",
              fontSize: "2rem",
              color: "#2A2A2A",
            }}
          >
            Error crítico
          </h1>
          <p style={{ marginTop: "12px", color: "#757575", maxWidth: "400px" }}>
            No pudimos cargar la página. Por favor, intenta de nuevo.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "32px",
              padding: "12px 32px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: "#EF436A",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}
