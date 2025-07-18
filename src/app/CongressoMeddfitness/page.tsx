import { atractions, embaixadores, patrocinadores } from "@/constants";
import React from "react";
import MeddFitnessAbout from "./components/MeddFitnessAbout";
import IFBBFed from "./components/IFBBFed";
import Midias from "./components/Midias";
import PerfilCard from "@/components/ui/PerfilCards";
import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import Accordion from "@/components/ui/Accordion";
import { duvidasRespostas01, duvidasRespostas02 } from "./constants";
import Speakers from "./components/Speakers";
import Local from "./components/Local";
import AtractionCard from "@/components/ui/AtractionCard";
// import Passport from "./components/Passport";
import Partner from "./components/Partner";
import Volunteer from "./components/Volunteer";
// import Downloads from "./components/Downloads";
// import DailyTickets from "./components/DailyTickets";
import Banner from "./components/Banner";
import imagemSemNome from "@/assets/images/logos/Imagem do WhatsApp de 2025-07-17 à(s) 20.32.32_7ea71c4d.jpg";

import { ifbbBrasil, jacCo, LogoPrincipal } from "@/assets/images/logos";
import Image from "next/image";

const page = () => {
  const realizacao = [ifbbBrasil, LogoPrincipal, jacCo];
  return (
    <>
      <Banner />
      <MeddFitnessAbout />
      {/* <section className="bg-dark-300">
        <Showcase />
      </section> */}
      <section>
        <IFBBFed />
      </section>
      <section className="bg-darker">
        <Midias />
      </section>
      {/* <section>
        <div className="customContainer flex gap-6 justify-between">
          {grupoGestorAbout.map((perfil, i) => (
            <PerfilCard key={i} delay={i * 150} {...perfil} />
          ))}
        </div>
      </section> */}
      {/* <section>
        <Objetivos />
      </section>
      <section>
        <MedicinaEsportiva />
      </section> */}
      <section>
        <div className="customContainer text-center px-20 bg-6/60">
          <div>
            <h1>
              <span>1ª Edição do MEDDFITNESS – Olímpia - SP</span>
            </h1>
            <h2>
              O WORKSHOP MEDDFITNESS 2025 marca o início de uma nova era na
              medicina esportiva, reunindo especialistas, atletas, pesquisadores
              e profissionais do setor fitness para compartilhar conhecimento,
              inovação e experiências.
            </h2>
          </div>
          <div className="flex justify-center">
            <GarantirEngressoBtn className="mt-6" />
          </div>
        </div>
      </section>

      <section>
        <div className="customContainer text-center">
          <div>
            <h1>EMBAIXADORAS</h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {/* são 3 e estao na ultima apresentação enviada */
            /* COLOCAR IMAGEM DO DOCUMENTO */}
            {embaixadores.map(({ title, src, desc }, i) => (
              <PerfilCard
                key={i}
                delay={i * 150}
                role=""
                src={src}
                name={title}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="customContainer text-center">
          <div>
            <h1>MEDDFITNESS 2025</h1>
          </div>
          <div className="xl:flex mt-6">
            {/* <div className="flex-1 order-first xl:order-last">
              <img src={medEventPhoto} alt="foto Evento" />
            </div> */}
            <div className="flex-1 p-6 order-last xl:order-first">
              <Accordion items={duvidasRespostas01} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Speakers />
      </section>

      <section id="localDoEvento" className="bg-darker/50">
        <Local />
      </section>

      <section>
        <div className="customContainer">
          <h1 className="text-center mb-10">ATRAÇÕES DA FEIRA</h1>

          {atractions.map((atraction, i) => (
            <AtractionCard {...atraction} isLeft={i % 2 == 0} key={i} />
          ))}
        </div>
      </section>

      {/* <section id="passaportes">
        <Passport />
      </section> */}

      <section className="bg-primary text-darker text-center mb-10">
        <h1 className="m-6">
          MEDDFITNESS 2025: Onde a ciência, o esporte e a performance se
          encontram para transformar o futuro do fitness!
        </h1>
      </section>

      <section id="sejaParceiro">
        <Partner />
      </section>

      <section>
        <div className="bg-darker/70 text-center py-10  px-6">
          <h1>
            <span>MEDDFITNESS – Olímpia, SP.</span>
          </h1>
          <h2>
            Apoiar o MEDDFITNESS 2025 é conectar sua marca ao futuro do esporte,
            da saúde e da alta performance. Seja um patrocinador e impacte
            milhares de pessoas!
          </h2>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <h1>QUADRO DE PATROCINADORES</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {patrocinadores.map((patrocinador, i) => (
              <PerfilCard role="" {...patrocinador} key={i} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="customContainer text-center">
          <h1>PERGUNTAS FREQUENTES</h1>
          <Accordion items={duvidasRespostas02} />
        </div>
      </section>
      <section id="voluntario">
        <Volunteer />
      </section>
      {/* <section>
        <Downloads />
      </section> */}
      <section>
        <div className="text-center bg-light text-darker py-10 my-10">
          <h1 className="font-[700] text-primary-dark">REALIZAÇÃO:</h1>
          <div className="flex justify-around customContainer">
            {realizacao.map((image, i) => (
              <Image
                src={image}
                alt={`logo ${i + 1}`}
                key={i}
                width={200}
                className=""
              />
            ))}
          </div>

          <h1 className="font-[700] text-primary-dark mt-10 pt-10 ml-[14%] mr-[14%] border-t-2 border-light-500">
            APOIO:
          </h1>
          <div className="flex justify-center">
            <Image src={imagemSemNome} alt="uma-logo" width={500} />
          </div>
        </div>
      </section>
      {/* <section>
        <DailyTickets />
      </section> */}
    </>
  );
};

export default page;
