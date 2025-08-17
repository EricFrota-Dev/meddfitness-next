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
      <div className="grid grid-cols-1 md:grid-cols-8 ">
        <div className="md:col-span-5 text-primary flex flex-col px-10 justify-around">
          <div className="w-full flex justify-center text-center md:text-start">
            <div>
              <h1 className="font-[900] italic text-[20px] md:text-[36px] xl:text-[50px]">
                PREMIAÇÃO MEDDFITNESS
              </h1>
              <h2 className="font-[900] italic text-[18px]  md:text-[36px] xl:text-[40px]">
                MISS E MISTER MEGAFITNESS
              </h2>
            </div>
          </div>
          <Image
            src={LogoPrincipal}
            alt="logo"
            height={250}
            className="mx-auto w-50 md:w-60 xl:80 mt-15 mb-10"
          />
        </div>

        <div className="md:col-span-3 px-10">
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
        <div className="md:col-span-5 mt-10 md:mt-0">
          <SkewedStripes />
        </div>
      </div>
    </div>
  );
};

export default Award;
