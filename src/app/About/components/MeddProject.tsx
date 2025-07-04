import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import GradientCard from "@/components/ui/GradientCard";
import { projetoMeddfitness } from "@/constants";
import Image from "next/image";

const MeddProject = () => {
  return (
    <section id="projetoMeddfitness">
      <div className="customContainer">
        <div>
          <h3 className="text-center">
            A <span>MEDDFITNESS</span> é um projeto inovador e dinâmico, criado
            para transformar o cenário da medicina esportiva e do fitness no
            Brasil, levando conhecimento, oportunidades e experiências únicas
            para todos os envolvidos.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10">
          {projetoMeddfitness.map(({ title, desc, icon }, index) => (
            <EntryAnimation
              delay={index * 150}
              from="scale"
              key={index}
              className="flex items-center flex-col"
            >
              <div className="flex items-center justify-center mb-6 mt-6 md:mt-0">
                <Image src={icon} alt={title} className="w-18 h-18" />
              </div>

              <GradientCard className="max-w-70 h-full" bordered>
                <div className="h-full">
                  <div>
                    <h3 className="mb-4 text-center">
                      <span>{title}</span>
                    </h3>
                  </div>
                  <div>
                    <p className="text-center">{desc}</p>
                  </div>
                </div>
              </GradientCard>
            </EntryAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeddProject;
