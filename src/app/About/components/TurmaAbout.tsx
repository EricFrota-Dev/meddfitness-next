import { entryAnimation } from "@/animations";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import { images } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";

const TurmaAbout = () => {
  return (
    <section>
      <div className="customContainer mt-10 mb-10 flex flex-col xl:flex-row gap-5 xl:gap-20">
        <EntryAnimation from="left" className="flex-1 flex items-center">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            className="w-full max-w-100"
          />
        </EntryAnimation>
        <EntryAnimation
          from="right"
          className="flex-2 text-justify self-center"
        >
          <p>
            {" "}
            A <span>MEDDFITNESS</span> nasceu para preencher uma lacuna
            existente no setor de medicina esportiva, oferecendo eventos e
            serviços especializados para profissionais da área que, muitas
            vezes, não têm acesso a grandes congressos realizados nas capitais
            do Brasil. Nosso objetivo é descentralizar o conhecimento e
            democratizar o acesso à informação, promovendo eventos de alto nível
            que unam medicina esportiva, nutrição, fisioterapia, educação física
            e fisiculturismo em um ambiente de aprendizado e networking.
            <br /> Através de workshops, seminários e convenções, promovemos a
            conexão entre especialistas da área da saúde esportiva e o setor
            fitness, criando oportunidades para profissionais, empresas e
            atletas. <br />
            Nosso diferencial está na criação de eventos espetáculos, que unem
            ciência, negócios e entretenimento, proporcionando experiências
            imersivas e impactantes para todos os participantes
          </p>
        </EntryAnimation>
      </div>
    </section>
  );
};

export default TurmaAbout;
