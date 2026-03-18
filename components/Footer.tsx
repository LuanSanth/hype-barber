"use client";

import { Instagram, Phone } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "@/lib/utils";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Plano", href: "#plano" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="text-primary">HYPE</span>
            <span className="text-foreground"> BARBER</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-card-border pt-8 text-center text-xs text-muted">
          Barbearia Hype &copy; {new Date().getFullYear()} — Vista Alegre,
          Curitiba-PR
        </div>
      </div>
    </footer>
  );
}
