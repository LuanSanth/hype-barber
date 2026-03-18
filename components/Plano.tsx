"use client";

import { motion } from "framer-motion";
import { Check, Crown, ArrowRight } from "lucide-react";
import { WHATSAPP_PLANO_LINK } from "@/lib/utils";

const benefits = [
  "Corte todo mês incluído",
  "Agendamento prioritário",
  "Sem filas, sem complicação",
  "Preço fixo mensal",
  "Desconto em serviços extras",
  "Acesso ao clube de assinantes",
];

export function Plano() {
  return (
    <section id="plano" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Plano de <span className="text-accent">Assinatura</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Seja assinante e tenha acesso ao seu serviço favorito por uma
            mensalidade fixa. Sem surpresas, sem filas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-12 max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-b from-card to-background p-8 md:p-10">
            {/* Premium badge */}
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-accent px-4 py-2">
              <Crown className="h-5 w-5 text-background" />
            </div>

            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Plano Hype
            </p>
            <p className="mt-1 font-display text-lg text-muted">
              Corte todo mês, sempre no seu melhor.
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_PLANO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Quero ser assinante
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-center text-xs text-muted">
              Fale conosco pelo WhatsApp para saber valores e condições
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
