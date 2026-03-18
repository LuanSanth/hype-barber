import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export const WHATSAPP_LINK =
  "https://wa.me/5541991168684?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

export const WHATSAPP_PLANO_LINK =
  "https://wa.me/5541991168684?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20Plano%20Hype.";

export const INSTAGRAM_URL = "https://www.instagram.com/barbearia.hype/";
