import GradientCard from "@/components/ui/GradientCard";
import { ingressosCard } from "@/constants";
import React from "react";
import GarantirEngressoBtn from "../Button/GarantirEngressoBtn";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const Ingressos = () => {
  return (
    <div className="customContainer flex flex-col justify-around gap-10 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-[5%] justify-center items-center">
        {ingressosCard.map((event, index) => (
          <EntryAnimation
            from="scale"
            key={index}
            delay={index * 100}
            className="h-full"
          >
            <GradientCard
              bordered
              className="md:max-w-64 text-center mb-[5%] md:mb-0 h-full"
            >
              <h3>
                {event.title
                  .split(" ")
                  .map((word, idx) =>
                    event.neonWords.includes(word) ? (
                      <span key={idx}>{word}</span>
                    ) : (
                      word
                    )
                  )
                  .reduce<React.ReactNode[]>((prev, curr) => {
                    return [prev, " ", curr];
                  }, [])}
              </h3>
            </GradientCard>
          </EntryAnimation>
        ))}
      </div>
      <GarantirEngressoBtn className="flex justify-center" />
    </div>
  );
};

export default Ingressos;
