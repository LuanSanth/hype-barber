"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* Neon glow effect */}
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary"
        >
          <Sparkles className="h-4 w-4" />
          4,8★ no Google — Vista Alegre, Curitiba
        </motion.div>

        {/* H1 hidden for SEO */}
        <h1 className="sr-only">Barbearia Hype — Vista Alegre, Curitiba</h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
        >
          Seu estilo.{" "}
          <span className="text-primary">Sua identidade.</span>
          <br />
          Nossa obsessão.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          Barbearia premium no Vista Alegre, Curitiba. Corte, barba e plano
          de assinatura exclusivo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-background transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Agendar agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#plano"
            className="flex items-center gap-2 rounded-full border border-card-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Ver nosso plano
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mx-auto h-10 w-6 rounded-full border-2 border-muted/30 p-1"
          >
            <div className="h-2 w-full rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
