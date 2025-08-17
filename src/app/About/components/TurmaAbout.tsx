import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import { images } from "@/constants";
import Image from "next/image";
import { cardsContent } from "../constants";
import GradientCard from "@/components/ui/GradientCard";

const TurmaAbout = () => {
  return (
    <div className="customContainer mt-14" id="a-meddfitness">
      <div className="mt-10 mb-10 flex flex-col xl:flex-row gap-5 xl:gap-20">
        <EntryAnimation from="left" className="flex-1 flex items-center">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            width={100}
            height={100}
            className="w-full max-w-100"
          />
        </EntryAnimation>
        <EntryAnimation from="right" className="flex-2 self-center text-xl">
          <p>
            {" "}
            A <strong>MeddFitness</strong> nasceu com o propósito de levar
            conhecimento e capacitação de qualidade para a comunidade médica, de
            saúde e bem-estar, oferecendo cursos de especialização, seminários e
            palestras, especialmente para regiões importantes, que ficam fora do
            circuito das capitais e metrópoles.
            <br /> No Brasil, a maioria dos eventos voltados à medicina
            esportiva e serviços de excelência estão concentrados nos grandes
            centros urbanos e nossa proposta é justamente trazer excelência para
            estes polos potenciais mais distantes.
          </p>
        </EntryAnimation>
      </div>
      <div className="text-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-18 mb-18 h-full">
        {cardsContent.map((text, i) => (
          <EntryAnimation from="scale" key={i} delay={i * 150}>
            <GradientCard
              bg="bg-dark"
              bordered
              key={i}
              className="min-w-[130px] max-w-70 ml-auto mr-auto text-xl text-center h-full"
            >
              {text}
            </GradientCard>
          </EntryAnimation>
        ))}
      </div>
    </div>
  );
};

export default TurmaAbout;
