import GradientCard from "@/components/ui/GradientCard";
import { cardsContent } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const TurmaPurpose = () => {
  return (
    <section>
      <div className="customContainer text-center bg-dark-300">
        <div>
          <h3 className="mb-6">
            <strong>
              O <span>PROPÓSITO DA MEDDFITNESS</span> é levar conhecimento e
              participação em grandes eventos relacionados a medicina esportiva
              e desenvolver o mercado para empresas nas cidades do interior do
              Brasil
            </strong>
          </h3>
          <h3>
            Nosso foco são eventos como Workshop, Seminários, Convenções unindo
            o setor de medicina esportiva com o setor de Fitness e
            fisiculturismo com ações conjuntas e sustentáveis, dentro de um
            ambiente saudável e inédito
          </h3>
        </div>
        <div className="text-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-18 mb-18 h-full">
          {cardsContent.map((text, i) => (
            <EntryAnimation from="scale" delay={i * 150}>
              <GradientCard
                bg="bg-dark-300"
                bordered
                key={i}
                className="min-w-[130px] max-w-70 ml-auto mr-auto"
              >
                {text}
              </GradientCard>
            </EntryAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurmaPurpose;
