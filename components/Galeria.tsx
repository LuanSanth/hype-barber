"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/utils";

const galleryItems = [
  { id: 1, gradient: "from-primary/20 to-primary/5" },
  { id: 2, gradient: "from-accent/20 to-accent/5" },
  { id: 3, gradient: "from-primary/15 to-accent/10" },
  { id: 4, gradient: "from-accent/15 to-primary/10" },
  { id: 5, gradient: "from-primary/20 to-primary/5" },
  { id: 6, gradient: "from-accent/20 to-accent/5" },
];

export function Galeria() {
  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Alguns dos nossos trabalhos. Siga no Instagram para ver mais.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-card-border bg-card"
            >
              {/* Placeholder gradient — replace with actual images */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Scissors className="h-12 w-12 text-foreground" />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            <Instagram className="h-4 w-4" />
            Ver mais no Instagram @barbearia.hype
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Scissors(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}
