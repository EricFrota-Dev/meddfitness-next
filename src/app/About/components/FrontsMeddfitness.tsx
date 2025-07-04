import exemplo from "@/assets/images/exemplo.jpg";
import Image from "next/image";

const FrontsMeddfitness = () => {
  return (
    <section>
      <div className="customContainer flex flex-col gap-10">
        <div>
          <h3 className="text-center ">
            A <span>MEDDFITNESS ATUA EM DIVERSAS FRENTES</span>, conectando
            profissionais, empresas e entidades do setor. Entre os principais
            segmentos que fazem parte do nosso ecossistema, destacam-se:
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <Image src={exemplo.src} alt="exemplo" />
        </div>
        <div className="md:flex">
          <div className="p-6 flex items-center flex-3">
            <h3 className="text-center md:text-end">
              Somos um “centro de estudos” que coordenarmseis (6) Camara
              Setoriais sendo; “NEGÓCIOS, MUSICA, MODA, ARTE, INTERNET e
              FITNESS”, como trabalho social da empresa
            </h3>
          </div>
          <div className="p-6 flex flex-1 items-center md:border-t-[0px] md:border-b-[0px] md:border-r-[2px] md:border-l-[2px] border-t-2 border-b-2  border-r-2 border-l-2">
            <h3 className="text-center">
              <span>MÚSICA ARTE MODA NEGÓCIOS MUNDO FITNESS EVENTO</span>
            </h3>
          </div>
          <div className="p-6 flex items-center flex-3">
            <h3 className="text-center md:text-start">
              {" "}
              Essas câmaras setoriais possibilitam a criação de projetos
              sociais, capacitação profissional e oportunidades para novos
              talentos, consolidando a MEDDFITNESS como um centro de estudos e
              inovação no Brasil.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontsMeddfitness;
