import React from "react";
import { midias } from "../constants";
import Image from "next/image";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";

const Midias = () => {
  return (
    <div className="customContainer text-center">
      <p className="font-montserrat text-4xl border-b-1 border-b-light-500 p-4">
        <span>
          <strong>IFBB EM NÚMEROS:</strong>
        </span>
      </p>
      <div>
        <ul className="flex justify-around gap-4 p-10">
          {midias.map(({ icon, name, value, type }, i) => (
            <EntryAnimation from="scale" delay={i * 100} key={i}>
              <li
                className={`w-33 h-65 flex flex-col justify-around items-center px-3 py-6 ${
                  i % 2 == 0
                    ? "border-2 border-primary text-primary"
                    : "text-lisht"
                }`}
              >
                <div>
                  <div className="w-full h-14 flex items-center justify-center">
                    <Image
                      src={icon.src}
                      alt={name}
                      width={icon.width}
                      height={icon.height}
                    />
                  </div>
                  <p>
                    <strong>{name}</strong>
                  </p>
                </div>
                <div>
                  <p className="mb-4 text-2xl font-[900]">{value}</p>
                  <p className="text-[0.8rem]">{type}</p>
                </div>
              </li>
            </EntryAnimation>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Midias;
