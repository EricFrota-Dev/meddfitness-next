import { ifbbBrasil } from "@/assets/images/logos";
import SkewedStripes from "@/components/ui/SkewedStripes";
import Image from "next/image";
import React from "react";
import { ifbbAwards } from "../constants";

const IfbbAwards = () => {
  return (
    <div className="customContainer min-h-140 bg-darker text-white py-16">
      <p className="text-primary mb-10 text-center text-lg">
        A premiação desta Edição será composta da seguinte forma, por categoria.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Lado esquerdo: título + logo + stripes */}
        <div className="flex-5 flex flex-col justify-between px-6">
          <div>
            <h1 className="font-black italic text-[36px] md:text-[50px] text-primary">
              PREMIAÇÃO IFBB - BRASIL
            </h1>
          </div>

          <Image
            src={ifbbBrasil}
            alt="logo"
            height={250}
            className="mx-auto my-10"
          />

          <SkewedStripes />
        </div>

        {/* Lado direito: premiações */}
        <div className="flex-3">
          <ul className="space-y-4">
            {ifbbAwards.map(({ title, items }, i) => (
              <li key={i}>
                <h3 className="text-primary font-bold">{title}</h3>
                <ul>
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IfbbAwards;
