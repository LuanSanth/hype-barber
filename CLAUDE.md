# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page + online booking system for **Barbearia Hype**, a premium barbershop in Vista Alegre, Curitiba-PR. The main conversion goal is to turn Instagram/Google visitors into booked appointments or monthly subscribers.

**Key differentiators to highlight in the UI:**
- Monthly subscription plan (`Plano Hype`) — main call-to-action, rare in the local market
- 4.8★ Google rating (social proof)
- Premium dark/neon visual identity matching the physical storefront

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Booking:** Calendly embed or Cal.com
- **Deployment:** Vercel

## Common Commands

Once the project is initialized with `npx create-next-app`:

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # Run ESLint
npm run type-check # TypeScript check (npx tsc --noEmit)
```

## Architecture

One-page site with scroll-based anchor navigation. All sections live in `app/page.tsx` and are composed from individual components:

```
app/
  layout.tsx        # Root layout: fonts (next/font), global metadata, WhatsAppButton
  page.tsx          # Assembles all sections in order
  globals.css       # CSS variables, Tailwind base styles

components/
  Header.tsx        # Fixed navbar with "Agendar agora" CTA
  Hero.tsx          # Full-screen section with primary + secondary CTAs
  Plano.tsx         # Subscription plan card — highest conversion priority
  Servicos.tsx      # Services grid with prices
  Galeria.tsx       # Photo grid from Instagram
  Depoimentos.tsx   # Google reviews cards
  Localizacao.tsx   # Embedded map + contact info + hours
  Footer.tsx
  WhatsAppButton.tsx # Fixed floating button (rendered in layout, always visible)

lib/
  utils.ts          # cn() helper and formatters
```

## Visual Identity

| Token | Value |
|---|---|
| Primary (neon green) | `#00FF87` |
| Background | `#0A0A0A` |
| Accent / Premium | `#D4AF37` |
| Text | `#F5F5F5` |
| Title font | Space Grotesk or Bebas Neue |
| Body font | Inter or DM Sans |

Dark mode only. Aesthetic: urban premium / streetwear.

## Key Content & Links

- **WhatsApp CTA link:** `https://wa.me/5541995235620?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.`
- **Instagram:** `@barbeariahype_`
- **Address:** Rua João Tschannerl, 998 - Vista Alegre, Curitiba-PR, 80820-010
- **Headline:** "Seu estilo. Sua identidade. Nossa obsessão."

## SEO Structure

```
H1: "Barbearia Hype — Vista Alegre, Curitiba" (page-level, one instance)
H2: Per-section headings ("Plano de Assinatura", "Nossos Serviços", etc.)
H3: Individual service names
```

Target Lighthouse score: 90+ on Performance, Accessibility, and SEO. Use `next/font` for fonts, `next/image` with `priority` on hero image, and WebP/AVIF for all photos.
