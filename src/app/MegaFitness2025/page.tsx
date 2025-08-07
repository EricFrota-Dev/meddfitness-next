import React from "react";
import Image from "next/image";
import { banners } from "@/constants";
import Apresentacao from "./components/Apresentacao";
import Desafios from "./components/Desafios";
import Regulamento from "./components/Regulamento";
import Award from "./components/Award";
const MegaFitness2025 = () => {
  return (
    <>
      <div id="o-concurso-megafitness">
        <Image src={banners[2].src} alt={banners[2].alt} />
      </div>
      <section id="megapersonalidade-fitness">
        <Apresentacao />
      </section>
      <section className="flex justify-around">
        <Desafios />
        <Regulamento />
      </section>
      <section id="premiacao">
        <Award />
      </section>
      <section id="presenca-em-eventos-e-midias">
        <div className="flex bg-primary-darker">
          <div className="p-10 flex-1 pl-[10%] text-center flex justify-center items-center flex-col">
            <h1 className="text-[3rem] mb-4">
              PRESENÇA MARCANTE EM EVENTOS E REDES SOCIAIS
            </h1>
            <p className="text-2xl">
              Hair Fashion Show 1,4 milhões inscrições <br /> Monange Drean
              Fashion 2.0 milhões de pessoas <br />
              Like Mega Model 1,4 milhões incrições <br />
              Menina Fantástica 50 milhões impactados <br />
              TicTac Mega Model 2 milhões inscrições <br />
              Palmolive Mega Model 1,3 milhões inscrições <br />
              Atroveran Mega Model 1,3 milhões inscrições. <br />
              Pantene Menina Fantástica 50 milhões Impactados <br />
              Mega Challenge Simple Organic 320 milhões de “views “ em 30 dias
              no Tik Tok.
            </p>
          </div>
          {/* <div
          style={{
            backgroundImage: `url('https://media-public.canva.com/Z9MsU/MADyQ6Z9MsU/1/s2.jpg')`,
          }}
          className="h-150 bg-cover bg-center flex-1"
        /> */}
        </div>
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
