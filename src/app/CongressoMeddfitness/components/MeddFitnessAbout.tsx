import Image from "next/image";
import { about } from "../constants";
import GradientCard from "@/components/ui/GradientCard";
import AboutHideTexts from "./AboutHideTexts";

const MeddFitnessAbout = () => {
  return (
    <div className="px-[10%] py-30 grid grid-cols-3 gap-20" id="sobre-o-forum">
      {about.map(({ title, icon, desc, itens }, i) => (
        <GradientCard
          delay={i * 100}
          from="bottom"
          key={i}
          bordered
          className="hover:scale-105 transition-all duration-500 cursor-pointer relative"
        >
          <AboutHideTexts index={i} text={desc} itens={itens ? itens : null} />
          <Image
            src={icon}
            width={300}
            alt={"imagen" + i}
            className="mb-4 text-light"
          />
          <h2 className="font-extrabold text-center">{title}</h2>
        </GradientCard>
      ))}
    </div>
  );
};

export default MeddFitnessAbout;
