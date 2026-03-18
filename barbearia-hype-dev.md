# Barbearia Hype — Guia de Desenvolvimento Web

> **Arquivo gerado em:** 17/03/2026
> **Tipo:** Guia completo para desenvolvimento do site
> **Projeto estimado:** R$ 1.500 – R$ 3.500

---

## 1. VISÃO GERAL DO PROJETO

| Campo | Detalhe |
|---|---|
| **Nome da empresa** | Barbearia Hype |
| **Segmento** | Barbearia / Estética Masculina |
| **Objetivo do site** | Agendamento online + apresentação do plano de assinatura + geração de leads |
| **Público-alvo** | Homens jovens e adultos (18–40 anos), bairro Vista Alegre e região, Curitiba-PR |
| **Proposta de valor** | Barbearia premium com identidade jovem, plano de assinatura mensal e ambiente de destaque |

**Resumo estratégico:** A Barbearia Hype já tem marca, Instagram ativo e plano de assinatura — diferenciais raros no segmento. O site deve funcionar como central de conversão: quem chega pelo Instagram ou Google sai com horário agendado ou plano contratado.

---

## 2. ESTRUTURA DO SITE (SITEMAP)

```
/ (Home — Landing Page)
├── #sobre (Sobre a Hype)
├── #servicos (Serviços e Preços)
├── #plano (Plano de Assinatura)
├── #galeria (Portfólio de Trabalhos)
├── #depoimentos (Avaliações Google)
└── #contato (Agendar / WhatsApp)
```

**Estrutura de navegação:** One-page com âncoras (melhor UX para mobile e conversão rápida). Botão fixo de "Agendar agora" no header em todas as seções.

**Hierarquia de conteúdo:**
1. Headline + CTA imediato (agendamento)
2. Plano de assinatura (diferencial principal)
3. Serviços com preços
4. Galeria de trabalhos
5. Depoimentos / reviews Google
6. Contato e localização

---

## 3. WIREFRAME — ESTRUTURA DAS PÁGINAS

### HERO (Seção 1)
- Background: foto da barbearia com iluminação verde (identidade visual)
- Headline: **"Seu estilo começa aqui."**
- Subheadline: "Barbearia premium no Vista Alegre, Curitiba. Corte, barba e plano de assinatura."
- CTA primário: botão verde — **"Agendar agora →"** (link WhatsApp ou sistema de agendamento)
- CTA secundário: **"Ver nosso plano"** (âncora para seção #plano)

### SEÇÃO — SOBRE A HYPE (Seção 2)
- Texto curto sobre a identidade da barbearia (jovem, moderna, inclusiva)
- Destaque: acessibilidade para cadeirantes
- Foto da fachada + interior

### SEÇÃO — PLANO DE ASSINATURA (Seção 3) ⭐ PRIORIDADE
- Card destacado com benefícios do plano
- Preço mensal em destaque
- CTA: **"Quero ser assinante"** → WhatsApp com mensagem pré-preenchida
- Badge: "Mais de X assinantes ativos"

### SEÇÃO — SERVIÇOS E PREÇOS (Seção 4)
- Grid de cards: Corte | Barba | Combo | Tratamento Capilar | Sobrancelha
- Cada card: nome do serviço + preço + tempo estimado
- CTA ao final: **"Agendar serviço"**

### SEÇÃO — GALERIA (Seção 5)
- Grid de fotos dos trabalhos (retiradas do Instagram)
- Link: "Ver mais no Instagram @barbeariahype_"

### SEÇÃO — DEPOIMENTOS (Seção 6)
- Widget Google Reviews ou cards manuais com as melhores avaliações
- Destaque: "4,8 ★ no Google — 29 avaliações"
- Frases reais: "Plano de assinatura com ótimo preço", "Melhor localização e serviço"

### SEÇÃO — LOCALIZAÇÃO E CONTATO (Seção 7)
- Mapa Google incorporado
- Endereço: Rua João Tschannerl, 998 - Vista Alegre, Curitiba-PR
- Horários de funcionamento
- Botão WhatsApp flutuante
- Link Instagram

### FOOTER
- Logo + links rápidos
- "Barbearia Hype © 2026 — Vista Alegre, Curitiba-PR"
- Ícones de redes sociais

---

## 4. IDENTIDADE VISUAL

| Elemento | Definição |
|---|---|
| **Estilo** | Dark mode premium / streetwear moderno |
| **Cor primária** | `#00FF87` — verde neon (já presente na fachada) |
| **Cor secundária** | `#0A0A0A` — preto profundo |
| **Cor de destaque** | `#D4AF37` — dourado (para plano premium) |
| **Cor de texto** | `#F5F5F5` — branco off-white |
| **Tipografia — Títulos** | `Space Grotesk` ou `Bebas Neue` (impacto urbano) |
| **Tipografia — Corpo** | `Inter` ou `DM Sans` (legibilidade) |
| **Referências visuais** | Urban Barbershop NYC, Barber Society London, tema dark premium |

**Mood:** Confiante, jovem, exclusivo. Cada elemento visual comunica "não é qualquer barbearia".

---

## 5. STACK TECNOLÓGICO

| Camada | Tecnologia |
|---|---|
| **Frontend** | Next.js 14+ (App Router) + React + TypeScript |
| **Estilo** | Tailwind CSS + shadcn/ui (componentes) |
| **Animações** | Framer Motion (microinterações suaves) |
| **Formulário de contato** | React Hook Form + Zod (validação) |
| **Agendamento** | Integração Calendly embed ou Cal.com (open source) |
| **CMS (conteúdo)** | Não necessário (site estático com dados fixos) |
| **Deploy** | Vercel (gratuito para projetos Next.js) |
| **Domínio sugerido** | `barbeariahype.com.br` |

---

## 6. ESTRUTURA DE PASTAS DO PROJETO

```
barbearia-hype/
├── app/
│   ├── layout.tsx          # Layout raiz (fonts, metadata global)
│   ├── page.tsx            # Home page (one-page)
│   └── globals.css         # Reset e variáveis CSS globais
├── components/
│   ├── Header.tsx          # Navbar fixa com CTA
│   ├── Hero.tsx            # Seção hero com background e CTA
│   ├── Plano.tsx           # Card do plano de assinatura
│   ├── Servicos.tsx        # Grid de serviços e preços
│   ├── Galeria.tsx         # Grid de fotos do Instagram
│   ├── Depoimentos.tsx     # Cards de avaliações Google
│   ├── Localizacao.tsx     # Mapa e informações de contato
│   ├── Footer.tsx          # Rodapé
│   └── WhatsAppButton.tsx  # Botão flutuante WhatsApp
├── lib/
│   └── utils.ts            # Funções utilitárias (cn, formatadores)
├── public/
│   ├── images/             # Fotos da barbearia e trabalhos
│   └── icons/              # Ícones SVG
├── styles/
│   └── animations.css      # Animações personalizadas
└── next.config.ts          # Configuração Next.js
```

**Função de cada pasta:**
- `app/` — rotas e layout do Next.js App Router
- `components/` — componentes React reutilizáveis e independentes
- `lib/` — utilitários, helpers, constantes
- `public/` — assets estáticos (imagens, ícones, fontes)
- `styles/` — CSS global e animações

---

## 7. FUNCIONALIDADES PRINCIPAIS

### Obrigatórias
- [x] **Botão WhatsApp flutuante** — sempre visível, mensagem pré-preenchida: "Olá! Vim pelo site e quero agendar um horário na Hype."
- [x] **Sistema de agendamento** — embed Calendly ou link direto para WhatsApp com horário
- [x] **Responsividade mobile-first** — 70%+ dos acessos serão via smartphone
- [x] **SEO básico** — meta tags, Open Graph, sitemap.xml, robots.txt
- [x] **Performance otimizada** — imagens WebP/AVIF, lazy loading, Next.js Image

### Específicas do nicho (Barbearia)
- [x] **Página/seção do Plano de Assinatura** — com benefícios, preço e CTA exclusivo
- [x] **Galeria de trabalhos** — cortes e barbas (importado do Instagram ou manual)
- [x] **Horário de funcionamento** — visível e atualizado (ter–sáb / dom–seg)
- [x] **Integração Instagram Feed** — exibir últimas fotos automaticamente (opcional)
- [x] **Widget Google Reviews** — exibir avaliações reais automaticamente

---

## 8. SEO E PERFORMANCE

### Estrutura de Headings
```
H1: "Barbearia Hype — Vista Alegre, Curitiba" (apenas na home)
H2: "Plano de Assinatura", "Nossos Serviços", "Portfólio", "Avaliações", "Onde Estamos"
H3: Nome de cada serviço (Corte Masculino, Barba, Combo, etc.)
```

### Meta Tags Essenciais
```html
<title>Barbearia Hype | Barbearia Premium Vista Alegre Curitiba</title>
<meta name="description" content="Barbearia premium no Vista Alegre, Curitiba. Cortes masculinos, barba, plano de assinatura. Agende online ou pelo WhatsApp. 4,8★ no Google." />
<meta name="keywords" content="barbearia Vista Alegre Curitiba, barbearia plano assinatura Curitiba, corte masculino Curitiba, barbearia Hype" />
<link rel="canonical" href="https://barbeariahype.com.br" />
```

### Open Graph (WhatsApp/redes sociais)
```html
<meta property="og:title" content="Barbearia Hype — Vista Alegre, Curitiba" />
<meta property="og:description" content="Barbearia premium com plano de assinatura. Agende agora!" />
<meta property="og:image" content="/images/og-image.jpg" />
```

### URLs Amigáveis
- `/` — home/landing page única
- `/plano` — (opcional) página dedicada ao plano de assinatura

### Boas práticas de performance
- Next.js `<Image>` com `priority` no hero
- Fonte via `next/font` (sem render-blocking)
- Lighthouse score alvo: 90+ em Performance, Acessibilidade e SEO

---

## 9. CONTEÚDO BASE

### Headline Principal
> **"Seu estilo. Sua identidade. Nossa obsessão."**

### Descrição da Empresa
> A Barbearia Hype nasceu para ser mais do que uma barbearia — é um espaço onde estilo encontra qualidade. Localizada no Vista Alegre, em Curitiba, nossa equipe transforma cada visita em uma experiência premium, com cortes personalizados, barba impecável e um ambiente que você vai querer frequentar toda semana.

### Descrição do Plano de Assinatura
> **Plano Hype — Corte todo mês, sempre no seu melhor.**
> Seja assinante e tenha acesso ilimitado ao seu serviço favorito por uma mensalidade fixa. Sem surpresas, sem filas, sem complicação. Faça parte do clube.

### Serviços — Textos Base
- **Corte Masculino:** "Do clássico ao moderno. Corte personalizado para o seu estilo e formato de rosto."
- **Barba:** "Navalha, modelagem ou degradê — a barba que você imaginou."
- **Combo Corte + Barba:** "O pacote completo para quem não abre mão de estar no seu melhor."
- **Sobrancelha:** "Detalhes que fazem a diferença no resultado final."
- **Tratamento Capilar:** "Hidratação e cuidado especializado para seu cabelo."

### CTAs
- "Agendar agora →"
- "Quero ser assinante"
- "Falar com a Hype"
- "Ver disponibilidade"

---

## 10. INFORMAÇÕES DE CONTATO

| Canal | Dado |
|---|---|
| **Telefone/WhatsApp** | (41) 99523-5620 |
| **Endereço** | Rua João Tschannerl, 998 - Vista Alegre, Curitiba-PR, 80820-010 |
| **Instagram** | [@barbeariahype_](https://instagram.com/barbeariahype_) |
| **Google Meu Negócio** | Ativo — 4,8★ (29 avaliações) |
| **Horário** | Verificar com cliente (terça abertura confirmada às 10h) |
| **Acessibilidade** | Acessível para cadeirantes |

**Link WhatsApp direto:**
```
https://wa.me/5541995235620?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário.
```

---

## 11. DIFERENCIAIS E OPORTUNIDADES

### Diferenciais Competitivos a Comunicar
1. **Plano de assinatura** — praticamente único no segmento local
2. **Identidade visual forte** — iluminação verde, posicionamento "Hype"
3. **Acessibilidade** — diferencial inclusivo que gera empatia e fidelização
4. **4,8★ Google** — prova social sólida para novos clientes

### Oportunidades Digitais Identificadas
- **Link na bio do Instagram** apontando para agendamento e plano (hoje não existe)
- **Sistema de agendamento online** elimina dependência de mensagens manuais
- **Página dedicada do plano** com vídeo de 30s mostrando a experiência (alto impacto)
- **Campanha de indicação digital** — cliente assinante indica, ganha desconto no próximo mês

### Ideias de Crescimento Online
- **Google Ads localizado:** "barbearia Vista Alegre Curitiba" (CPC baixo, alta intenção)
- **Reels semanais** mostrando cortes com link no bio apontando para agendamento
- **Campanha "Plano Hype"** no Instagram Stories com depoimentos de assinantes
- **SEO de conteúdo:** blog post "Os melhores cortes masculinos 2026 em Curitiba"

### Estimativa de ROI do Projeto
> Com 5 novos agendamentos/semana gerados pelo site + 3 novos assinantes/mês, o site paga seu custo de desenvolvimento em menos de 30 dias.

---

*Guia gerado em 17/03/2026 | Baseado na análise de prospecção da Barbearia Hype*
*Stack: Next.js + TypeScript + Tailwind CSS + Vercel*
