import Image from "next/image";
import React from "react";
import woman from "@/assets/images/woman01.jpg";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const MedicinaEsportiva = () => {
  return (
    <div className="customContainer flex gap-6">
      <div className="w-20 flex justify-center items-center">
        <EntryAnimation from="bottom" delay={0.3}>
          <p className="tracking-[20px] vertical rotate-180 font-[900] font-montserrat text-4xl">
            <span>PÚBLICO-ALVO</span>
          </p>
        </EntryAnimation>
      </div>
      <div className="flex-1">
        <div>
          <p className="font-montserrat font-[900] text-4xl text-centere py-10 border-b-1 border-light-500">
            <span>1º CONGRESSO DE MEDICINA ESPORTIVA</span>
          </p>
        </div>
        <div className="flex gap-6 p-10 justify-around">
          <div>
            <div className={`p-6 pl-0 bg-primary w-[590px]`}>
              <EntryAnimation from="left">
                <Image src={woman} alt="woman" />
              </EntryAnimation>
            </div>
          </div>
          <div className="flex items-center">
            <EntryAnimation from="right">
              <ul className="space-y-6 list-disc max-w-100 text-justify">
                <li>
                  <p>
                    Profissionais e estudantes de graduação e pós-graduação das
                    áreas de Nutrição, Educação Física, Medicina, Fisioterapia e
                    demais áreas relacionadas ao esporte.
                  </p>
                </li>
                <li>
                  <p>
                    Pesquisadores e membros de grupos de pesquisa e programas de
                    pós-graduação em áreas correlatas à Medicina Esportiva.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Atletas, treinadores e praticantes de atividades físicas,
                    além dos públicos já mencionados.
                  </p>
                </li>
                <li>
                  <p>
                    Empresas prestadoras de serviços e fornecedoras de produtos
                    voltados à prática esportiva e atividades físicas.
                  </p>
                </li>
              </ul>
            </EntryAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinaEsportiva;
