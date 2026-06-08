import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const footerLinks = [
  { label: "Políticas de privacidad", href: "#" },
  { label: "Términos y condiciones", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/logo.png"
              alt="ROSLEBEN"
              width={160}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/60 max-w-xs text-center md:text-left">
              Cuidado capilar premium con ingredientes naturales. Hecho con amor en Colombia.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-5">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-primary-light hover:text-primary-light"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-primary-light hover:text-primary-light"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={CONTACT.email}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-primary-light hover:text-primary-light"
                aria-label="Correo"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ROSLEBEN. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
