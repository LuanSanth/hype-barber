"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Crown, Eye, Droplets } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const servicos = [
  {
    icon: Scissors,
    nome: "Corte Masculino",
    descricao:
      "Do clássico ao moderno. Corte personalizado para o seu estilo e formato de rosto.",
    tempo: "~40 min",
  },
  {
    icon: Sparkles,
    nome: "Barba",
    descricao:
      "Navalha, modelagem ou degradê — a barba que você imaginou.",
    tempo: "~30 min",
  },
  {
    icon: Crown,
    nome: "Combo Corte + Barba",
    descricao:
      "O pacote completo para quem não abre mão de estar no seu melhor.",
    tempo: "~60 min",
  },
  {
    icon: Eye,
    nome: "Sobrancelha",
    descricao: "Detalhes que fazem a diferença no resultado final.",
    tempo: "~15 min",
  },
  {
    icon: Droplets,
    nome: "Tratamento Capilar",
    descricao: "Hidratação e cuidado especializado para seu cabelo.",
    tempo: "~30 min",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Qualidade premium em cada detalhe. Escolha o serviço ideal para
            você.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => (
            <motion.div
              key={servico.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <servico.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-card-border px-3 py-1 text-xs text-muted">
                  {servico.tempo}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {servico.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {servico.descricao}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-background transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Agendar serviço
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
