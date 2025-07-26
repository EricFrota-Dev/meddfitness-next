import { simpleCard } from "@/constants/types";
import Image from "next/image";
import React from "react";

const EchoSysyemCard: React.FC<simpleCard> = ({ title, desc, src }) => {
  return (
    <div className="w-60 transition-all">
      <div className="bg-dark border border-primary/20 h-80 rounded-t-2xl p-4 shadow-lg shadow-darker">
        <h4>
          <strong>
            <span>{title}</span>
          </strong>
        </h4>
        <p>{desc}</p>
      </div>
      <div className="bg-primary h-30 rounded-b-full relative">
        <Image
          src={src}
          alt={title}
          className="absolute rounded-full w-54 bottom-3 left-3 bg-light"
        />
      </div>
    </div>
  );
};

export default EchoSysyemCard;
