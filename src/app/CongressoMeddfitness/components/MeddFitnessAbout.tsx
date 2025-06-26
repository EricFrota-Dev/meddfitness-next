import { LogoPrincipal } from "@/assets/images/logos";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import Image from "next/image";
const MeddFitnessAbout = () => {
  return (
    <div className="customContainer flex gap-8">
      <EntryAnimation
        from="left"
        className="border-b-1 border-t-1 border-light flex-4 my-10 py-20"
      >
        <p className="text-[4rem] font-bold font-montserrat">
          <span>MEDD</span>FITNESS
        </p>
        <p className="py-3 text-xl">
          A Meddfitness nasceu com o propósito de levar conhecimento e
          capacitação de qualidade para a comunidade médica, de saúde e de
          bem-estar, oferecendo cursos de especialização, seminários e
          palestras, especialmente para regiões importantes, que ficam fora do
          circuito das capitais e metrópoles.
        </p>
        <p className="py-3 text-xl">
          No Brasil, a maioria dos eventos voltados à medicina esportiva e
          serviços de excelência estão concentrados nos grandes centros urbanos
          e nossa proposta é justamente trazer esta excelência para estes polos
          potenciais mais distantes.{" "}
        </p>
      </EntryAnimation>
      <EntryAnimation
        from="right"
        className="border-b-10 border-t-10 border-r-10 border-primary flex-2 flex justify-end flex-col items-center py-10 mim-w-60"
      >
        <Image src={LogoPrincipal} alt="logo" className="w-50" />
      </EntryAnimation>
    </div>
  );
};

export default MeddFitnessAbout;
