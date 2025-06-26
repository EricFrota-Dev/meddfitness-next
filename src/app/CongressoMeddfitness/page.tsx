import { LogoPrincipal } from "@/assets/images/logos";
import Logo from "@/components/layout/Navigation/Logo";
import { banners } from "@/constants";
import Image from "next/image";
import React from "react";
import MeddFitnessAbout from "./components/MeddFitnessAbout";
import Showcase from "./components/Showcase";
import IFBBFed from "./components/IFBBFed";
import Midias from "./components/Midias";
import Objetivos from "./components/Objetivos";
import { grupoGestorAbout } from "../About/constants";
import PerfilCard from "@/components/ui/PerfilCards";
import MedicinaEsportiva from "./components/MedicinaEsportiva";

const page = () => {
  return (
    <>
      <div>
        <Image src={banners[0].src} alt={banners[0].alt} className="" />
      </div>
      <section>
        <MeddFitnessAbout />
      </section>
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
        <div className="customContainer flex justify-between">
          {grupoGestorAbout.map((perfil, i) => (
            <PerfilCard key={i} {...perfil} />
          ))}
        </div>
      </section> */}
      <section>
        <Objetivos />
      </section>
      <section>
        <MedicinaEsportiva />
      </section>
    </>
  );
};

export default page;
