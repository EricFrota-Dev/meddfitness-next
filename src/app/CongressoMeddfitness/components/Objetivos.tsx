import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import React from "react";
import Image from "next/image";
import man from "@/assets/images/man02.png";

const Objetivos = () => {
  return (
    <div className="customContainer flex gap-10">
      <div className="max-w-200 flex flex-col gap-6 justify-center">
        <div className="font-montserrat text-6xl">
          <p>
            <span>
              <strong className="font-[900]">OBJETIVOS</strong>
              <br /> DO EVENTO
            </span>
          </p>
        </div>
        <ul className="space-y-6 text-justify">
          <li>
            Congregar, estimular e apoiar o intercâmbio de informações
            atualizadas e do conhecimento técnico-científico na área de
            medicina, na área da medicina esportiva, alinhando-se às diretrizes
            das políticas de promoção do esporte saudável, adequado e da
            segurança física e mental.
          </li>
          <li>
            Gerar oportunidades de aperfeiçoamento profissional e promover a
            divulgação de estudos e avanços científicos, contribuindo para a
            melhoria dos serviços de saúde e do bem-estar do indivíduo, com foco
            no fisiculturismo.{" "}
          </li>
          <li>
            Incentivar a troca de experiências, a cooperação e o enriquecimento
            profissional, reunindo especialistas e empresas de diversos estados
            brasileiros e de países ibero-americanos. Além disso, proporcionar
            aos congressistas a oportunidade de ampliar o relacionamento com
            entidades atuantes nas diferentes áreas da medicina esportiva.
          </li>
        </ul>
      </div>
      <div className="flex-1 flex">
        <EntryAnimation from="right">
          <div className="h-full mx-auto w-full relative flex justify-center items-center">
            <div className="-z-10 h-130 absolute w-70 top-0 right-0 border-b-20 border-t-20 border-r-20 border-primary" />
            <EntryAnimation from="right" delay={0.2}>
              <Image
                src={man}
                alt="Muscular Man"
                className="object-contain "
                priority
                height={500}
              />
            </EntryAnimation>
          </div>
        </EntryAnimation>
      </div>
    </div>
  );
};

export default Objetivos;
