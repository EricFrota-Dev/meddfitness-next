import { simpleCardProps } from "@/constants/types";
import Image from "next/image";
import React from "react";

const EventCard: React.FC<simpleCardProps> = ({ src, name }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      <Image src={src} alt={name} />
      <div className="flex text-center flex-col items-center justify-center bg-2 text-6 p-2">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default EventCard;
