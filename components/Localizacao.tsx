"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "@/lib/utils";

const info = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua João Tschannerl, 998\nVista Alegre, Curitiba-PR\n80820-010",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Terça a Sábado\nA partir das 10:00",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(41) 9916-8684",
    link: WHATSAPP_LINK,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@barbearia.hype",
    link: INSTAGRAM_URL,
  },
];

export function Localizacao() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Onde <span className="text-primary">Estamos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Vista Alegre, Curitiba-PR. Venha nos visitar!
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-card-border"
          >
            <iframe
              title="Localização Barbearia Hype"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.3!3d-25.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzAwLjAiUyA0OcKwMTgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {info.map((item) => {
              const content = (
                <div className="flex gap-4 rounded-2xl border border-card-border bg-card p-5 transition-colors hover:border-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (item.link) {
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
