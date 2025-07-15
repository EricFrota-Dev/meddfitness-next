import React from "react";
import Image from "next/image";
import Couple from "@/assets/images/banners/couple.png";
import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const Banner = () => {
  return (
    <div className="w-full h-205 bg-gradient-to-l via-primary text-shadow-sm text-shadow-primary-darker to-primary-darker from-primary-darker p-10 text-center flex flex-col justify-center items-center relative">
      <EntryAnimation from="left" className="absolute">
        <Image src={Couple} alt="couple" height={820} />
      </EntryAnimation>
      <EntryAnimation from="bottom" className="flex items-center flex-col">
        <h1 className="text-[6rem] font-extrabold z-10 mb-10">
          1º Fórum MeddFitness Brasil - Olímpia/SP 2025
        </h1>
        <h3 className="text-[2.5rem] z-10">
          Feira • Workshop • Podcast• Concurso • Campeonato • Show
        </h3>
        {/* <h5 className="text-[2.5rem] z-10">
          {" "}
          Uma experiência imersiva de saúde, ciência e performance
        </h5> */}

        <GarantirEngressoBtn className="mt-10" />
      </EntryAnimation>
    </div>
  );
};

export default Banner;
