import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbearia Hype | Barbearia Premium Vista Alegre Curitiba",
  description:
    "Barbearia premium no Vista Alegre, Curitiba. Cortes masculinos, barba, plano de assinatura. Agende online ou pelo WhatsApp. 4,8★ no Google.",
  keywords:
    "barbearia Vista Alegre Curitiba, barbearia plano assinatura Curitiba, corte masculino Curitiba, barbearia Hype",
  openGraph: {
    title: "Barbearia Hype — Vista Alegre, Curitiba",
    description:
      "Barbearia premium com plano de assinatura. Agende agora!",
    url: "https://barbeariahype.com.br",
    siteName: "Barbearia Hype",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
