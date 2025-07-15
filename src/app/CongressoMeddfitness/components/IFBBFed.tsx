import Image from "next/image";
import man from "@/assets/images/man01.png";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const IFBBFed = () => {
  return (
    <div className="customContainer flex gap-6 justify-center">
      <EntryAnimation from="left">
        <div className="flex flex-col gap-6 max-w-200 border-b-1 border-dark-100 p-4">
          <span className="font-montserrat">
            <p className="font-[900] text-[4rem]">CBMFF | IFBB BRASIL</p>
            <p className="font-[900] text-2xl">
              CONFEDERAÇÃO BRASILEIRA DE MUSCULAÇÃO, FISICULTURISMO E FITNESS
            </p>
          </span>

          <ul className="text-justify space-y-6">
            <li>
              <p>
                É a entidade esportiva responsável pela gestão do fisiculturismo
                e fitness em nível mundial. Com <strong>204 nações</strong>{" "}
                afiliadas, a IFBB promove o esporte amador, representando a mais
                alta expressão do desenvolvimento muscular humano de forma
                equilibrada e saudável.
              </p>
            </li>
            <li>
              <p>
                Anualmente, organiza mais de{" "}
                <strong>8.000 campeonatos mundiais</strong> e{" "}
                <strong>52 campeonatos no Brasil:</strong> Regionais, Estaduais,
                Brasileiro, Sul-americano, Mundial, Feminino e Kids.{" "}
              </p>
            </li>
            <li>
              <p>
                Seu site oficial (www.ifbb.com) recebe{" "}
                <strong>15 milhões de acessos por mês,</strong>
                provenientes de diversos países ao redor do mundo.
              </p>
            </li>
          </ul>
        </div>
      </EntryAnimation>
      <div className="flex">
        <div>
          <div className="h-full mx-auto w-full relative flex justify-center items-center">
            <EntryAnimation
              from="bottom"
              className="bg-primary -z-10 h-full absolute w-50 top-0 right-[50%] translate-x-[50%]"
            />
            <EntryAnimation from="right" delay={0.2}>
              <Image
                src={man}
                alt="Muscular Man"
                className="object-contain " // ou object-cover
                priority
              />
            </EntryAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFBBFed;
