// import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import { echosystem } from "@/constants";
import TurmaAbout from "./components/TurmaAbout";
import PerfilCard from "@/components/ui/PerfilCards";
// import TurmaPurpose from "./components/TurmaPurpose";
import eventImg from "@/assets/images/events/events-bg.jpg";
import MeddProject from "./components/MeddProject";
import { grupoGestorAbout } from "./constants";
// import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import EchoSysyemCarousel from "@/components/ui/EchoSysyemCarousel";
import { targets } from "@/assets/images/logos/targets";
import Image from "next/image";
import eventosRealizados from "@/assets/images/events/eventosRealizados.jpg";

const Equipe = () => {
  return (
    <>
      {/* <EntryAnimation>
        <BannerItem src={banners[1].src} alt={banners[1].alt} />
      </EntryAnimation> */}
      <TurmaAbout />
      <section id="comissao-2025">
        <div className="customContainer gap-8 flex flex-col items-center">
          <h1>COMISSÃO 2025</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {grupoGestorAbout.map(({ src, name, desc, role }, index) => (
              <PerfilCard
                src={src}
                role={role}
                name={name}
                desc={desc}
                key={index}
                delay={index * 80}
                animation="scale"
              />
            ))}
          </div>
        </div>
      </section>
      {/* <TurmaPurpose /> */}
      {/* <FrontsMeddfitness /> */}
      {/* <section className="">
        <EntryAnimation from="right" className="text-center">
          <h2>
            <strong>
              APOSTAMOS NO INÉDITO.
              <br />
              FAZEMOS O QUE NINGUÉM FAZ!
            </strong>
          </h2>
        </EntryAnimation>
      </section> */}
      <section id="ecossistema-operacional">
        <div className="cusomContainer text-center">
          <div className="my-10">
            <p className="text-3xl font-bold">ECOSSISTEMA OPERACIONAL</p>
          </div>
          <div className="my-10 border-t border-b border-primary/20 bg-darker/30 py-10">
            <EchoSysyemCarousel items={echosystem} />
          </div>
        </div>
      </section>
      <section
        id="ecentosRealizados"
        className="text-shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url('${eventImg.src}')` }}
      >
        <div>
          <h1 className="text-center">Mais de 500 eventos realizados!</h1>
        </div>
      </section>
      <MeddProject />
      <section id="eventos-patrocinados">
        <Image src={eventosRealizados} alt="eventos realizdos" />
      </section>
      <div className="bg-primary max-w-screen" id="clientes-relacionamentos">
        <h1 className="text-center text-xl mb-6  text-dark py-10 px-[10%] border-b border-dark-100">
          ALGUNS CLIENTES & TARGET : NOSSA REDE DE RELACIONAMENTOS
        </h1>
        <div>
          <ul className="grid overflow-hidden gap-1 md:gap-4 xl:gap-5 grid-cols-3 md:grid-cols-5 xl:grid-cols-7 bg-primary">
            {targets.map((image, i) => (
              <li
                key={i}
                className="flex items-center justify-center shadow-lg bg-light"
              >
                <div className="rounded min-w-30 h-30 p-3 flex justify-center items-center">
                  <Image
                    src={image}
                    alt={"logo" + 1 + i}
                    width={120}
                    height={120}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Equipe;
