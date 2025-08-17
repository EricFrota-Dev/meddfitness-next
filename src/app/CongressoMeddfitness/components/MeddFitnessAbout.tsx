import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import { about } from "../constants";

const MeddFitnessAbout = () => {
  return (
    <section id="sobre-o-forum">
      <div className="customContainer text-center px-20">
        <div>
          <h1>
            <span>1º Fórum MEDDFITNESS • Olímpia-SP </span>
          </h1>
          <h2>
            O início de uma nova era na medicina integrativa, reunindo
            especialistas, atletas, pesquisadores e profissionais do setor
            fitness para compartilhar conhecimento, inovação e experiências.
          </h2>
        </div>
        {about.map(({ title, desc }, i) => (
          <div className="my-15" key={i}>
            <h1 className="mb-5">
              <span>{title}</span>
            </h1>
            <p className="text-xl">{desc}</p>
          </div>
        ))}
        <div className="flex justify-center">
          <GarantirEngressoBtn className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default MeddFitnessAbout;
