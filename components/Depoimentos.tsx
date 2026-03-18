"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Cliente Google",
    text: "Lugar top, atendimento excelente e plano de assinatura com ótimo preço!!!",
    stars: 5,
  },
  {
    name: "Cliente Google",
    text: "Ótimo atendimento, cortei meu cabelo e ficou do jeito que eu queria!",
    stars: 5,
  },
  {
    name: "Cliente Google",
    text: "Melhor localização e melhor serviço. Ambiente show e equipe profissional.",
    stars: 5,
  },
  {
    name: "Cliente Google",
    text: "Barbearia com ótimo ambiente, atendimento de qualidade. O plano de assinatura vale muito a pena!",
    stars: 5,
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            O que dizem <span className="text-primary">nossos clientes</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-sm text-muted">
              4,8 no Google — 29 avaliações
            </span>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-card-border bg-card p-6"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex gap-1">
                {[...Array(review.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-medium text-muted">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
