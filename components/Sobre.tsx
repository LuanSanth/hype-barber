"use client";

import { motion } from "framer-motion";
import { Accessibility, Scissors, Star } from "lucide-react";

const highlights = [
  {
    icon: Scissors,
    title: "Cortes Premium",
    description: "Cada corte é personalizado para o seu estilo e formato de rosto.",
  },
  {
    icon: Star,
    title: "Experiência Única",
    description: "Ambiente exclusivo que você vai querer frequentar toda semana.",
  },
  {
    icon: Accessibility,
    title: "Acessível para Todos",
    description: "Espaço acessível para cadeirantes — inclusão é prioridade.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Sobre a <span className="text-primary">Hype</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A Barbearia Hype nasceu para ser mais do que uma barbearia — é um
            espaço onde estilo encontra qualidade. Localizada no Vista Alegre,
            em Curitiba, nossa equipe transforma cada visita em uma experiência
            premium, com cortes personalizados, barba impecável e um ambiente
            que você vai querer frequentar toda semana.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-card-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
