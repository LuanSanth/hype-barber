import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Plano } from "@/components/Plano";
import { Servicos } from "@/components/Servicos";
import { Galeria } from "@/components/Galeria";
import { Depoimentos } from "@/components/Depoimentos";
import { Localizacao } from "@/components/Localizacao";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Plano />
        <Servicos />
        <Galeria />
        <Depoimentos />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
