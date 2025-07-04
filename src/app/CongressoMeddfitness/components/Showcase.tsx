import React from "react";
import { MdAbout } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const Showcase = () => {
  return (
    <div className="customContainer">
      <div className="border-b-1 border-light mb-6 pb-3">
        <h1>
          <span>MEDD</span>FITNESS
        </h1>
        <h3>
          <span className="font-bold">
            FEIRA | WORKSHOP | PODCAST | CONCURSO | CAMPEONATO | SHOW
          </span>
        </h3>
      </div>
      <div className="mb-6 text-justify">
        <p className="mb-6">
          O <strong>1º Congresso Meddfitness Brasil</strong> foi idealizado para
          percorrer o Brasil com uma série de workshops voltados à medicina
          esportiva, de saúde e bem-estar, consolidando-se em 2025 como um
          evento de destaque no estado de São Paulo.
        </p>
        <p>
          Com uma programação completa que inclui feira, workshops, podcast,
          concurso, campeonato e shows, o Meddfitness vai além do formato
          tradicional de eventos. É uma experiência inovadora e imersiva. Entre
          os destaques está o Campeonato de Fisiculturismo, criado e organizado
          pela IFBB Brasil, que reforça a conexão entre a prática esportiva e o
          conhecimento científico.
        </p>
      </div>
      <div className="flex justify-around">
        {MdAbout.map((item, i) => (
          <EntryAnimation
            key={i}
            from="scale"
            delay={i * 150}
            className="rounded-full w-100 h-100 bg-primary px-10 text-dark font-bold py-40 flex justify-center items-center text-center"
          >
            <p>{item}</p>
          </EntryAnimation>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
