import React from "react";
import { simpleCardProps } from "@/constants/types";
import Image from "next/image";
import EntryAnimation, {
  EntryDirection,
} from "@/components/layout/AnimatedContent/EntryAnimation";

type PerfilCardProps = simpleCardProps & {
  animation?: EntryDirection;
  delay?: number;
};

const PerfilCard: React.FC<PerfilCardProps> = ({
  name,
  role = null,
  src,
  desc,
  animation = "scale",
  delay = 0,
}) => {
  return (
    <EntryAnimation
      delay={delay}
      from={animation}
      className="flex flex-col mt-6 rounded-xl overflow-hidden w-33 md:w-fit max-w-60 shadow-xl shadow-darker/30"
    >
      <div className="bg-primary">
        <Image src={src} alt={name} />
      </div>
      <div className="flex text-center flex-col items-center h-full bg-2 text-6 p-2">
        <h4>
          <strong>{name}</strong>
        </h4>
        {role && (
          <p>
            <span>{role}</span>
          </p>
        )}
        {desc && <p className="text-gray-500">{desc}</p>}
      </div>
    </EntryAnimation>
  );
};

export default PerfilCard;
