import { LogoPrincipal } from "@/assets/images/logos";
import SkewedStripes from "@/components/ui/SkewedStripes";
import Image from "next/image";
import React from "react";
import { awards } from "../constants";

const Award = () => {
  return (
    <div className="customContainer min-h-140 bg-darker">
      <p className="text-primary mb-10 text-center">
        A premiação desta Edição será composta da seguinte forma, por categoria.{" "}
      </p>
      <div className="flex">
        <div className="flex-5 text-primary flex flex-col px-10 justify-between">
          <div>
            <h1 className="font-[900] italic text-[50px]">
              PREMIAÇÃO MEDDFITNESS
            </h1>
            <h2 className="font-[900] italic text-[40px]">
              MISS E MISTER MEGAFITNESS
            </h2>
          </div>
          <Image
            src={LogoPrincipal}
            alt="logo"
            height={250}
            className="mx-auto mt-15"
          />
          <SkewedStripes />
        </div>

        <div className="flex-3 px-10">
          <div>
            <ul className="space-y-4">
              {awards.map(({ title, awards }, i) => (
                <li key={i}>
                  <h3 className="text-primary">{title}</h3>
                  {awards.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
