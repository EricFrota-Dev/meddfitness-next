import React from "react";
import Image from "next/image";
import { banners } from "@/constants";
import Apresentacao from "./components/Apresentacao";
import Desafios from "./components/Desafios";
import Regulamento from "./components/Regulamento";
const MegaFitness2025 = () => {
  return (
    <>
      <div>
        <Image src={banners[2].src} alt={banners[2].alt} />
      </div>
      <section id="apresentacao" className="grid grid-cols-3 mt-40">
        <Apresentacao />
      </section>
      <section id="desafiosRegulamentos" className="flex justify-around">
        <Desafios />
        <Regulamento />
      </section>

      {/* <section id="investimento" className="customContainer text-center">
        <h1>Investimento Patrocínio</h1>
        <p>Medfit Ouro 200 K 2 cotas</p>
        <p>Medfit prata 100 K 5 cotas</p>
        <p>Medfit bronze 50 K 3 cotas</p>
      </section> */}
    </>
  );
};

export default MegaFitness2025;
