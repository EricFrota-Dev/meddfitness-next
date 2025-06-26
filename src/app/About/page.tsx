import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import { banners, echosystem } from "@/constants";
import TurmaAbout from "./components/TurmaAbout";
import PerfilCard from "@/components/ui/PerfilCards";
import TurmaPurpose from "./components/TurmaPurpose";
import eventImg from "@/assets/images/events/events-bg.jpg";
import MeddProject from "./components/MeddProject";
import { grupoGestorAbout } from "./constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import EchoSysyemCarousel from "@/components/ui/EchoSysyemCarousel";

const Equipe = () => {
  return (
    <>
      <EntryAnimation>
        <BannerItem src={banners[1].src} alt={banners[1].alt} />
      </EntryAnimation>
      <TurmaAbout />
      <section>
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
      <TurmaPurpose />
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
      <section id="ecosistema">
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
    </>
  );
};

export default Equipe;
