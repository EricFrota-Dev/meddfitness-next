// import { LogoPrincipal } from "@/assets/images/logos";
// import Logo from "@/components/layout/Navigation/Logo";
import { atractions, embaixadores, patrocinadores } from "@/constants";
// import Image from "next/image";
import React from "react";
import MeddFitnessAbout from "./components/MeddFitnessAbout";
import Showcase from "./components/Showcase";
import IFBBFed from "./components/IFBBFed";
import Midias from "./components/Midias";
import Objetivos from "./components/Objetivos";
// import { grupoGestorAbout } from "../About/constants";
import PerfilCard from "@/components/ui/PerfilCards";
import MedicinaEsportiva from "./components/MedicinaEsportiva";
import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import Accordion from "@/components/ui/Accordion";
import { duvidasRespostas01, duvidasRespostas02 } from "./constants";
import Speakers from "./components/Speakers";
import Local from "./components/Local";
import AtractionCard from "@/components/ui/AtractionCard";
import Passport from "./components/Passport";
import Partner from "./components/Partner";
import Volunteer from "./components/Volunteer";
import Downloads from "./components/Downloads";
import DailyTickets from "./components/DailyTickets";
import Banner from "./components/Banner";

const page = () => {
  return (
    <>
      <Banner />
      <MeddFitnessAbout />
      <section className="bg-dark-300">
        <Showcase />
      </section>
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
      <section>
        <Objetivos />
      </section>
      <section>
        <MedicinaEsportiva />
      </section>
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
            {/* são 3 e estao na ultima apresentação enviada */}
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

      <section id="passaportes">
        <Passport />
      </section>

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
            <span>MEDDFITNESS – Olímpia,SP.</span>
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
          <h1>PERGUNTAS FREQUÊNTES</h1>
          <Accordion items={duvidasRespostas02} />
        </div>
      </section>
      <section id="voluntario">
        <Volunteer />
      </section>
      <section>
        <Downloads />
      </section>
      <section>
        <div className="bg-primary text-center text-darker py-10 my-10">
          <h1>REALIZAÇÃO</h1>
        </div>
      </section>
      <section>
        <DailyTickets />
      </section>
    </>
  );
};

export default page;
