import React from "react";
import { GradientCardProps } from "./types";
import EntryAnimation, {
  EntryDirection,
} from "@/components/layout/AnimatedContent/EntryAnimation";

type ComponentProps = GradientCardProps & {
  from?: EntryDirection;
  delay?: number;
  bg?: string;
};

const GradientCard: React.FC<ComponentProps> = ({
  delay,
  from,
  children,
  bordered,
  className,
  bg = "bg-dark",
}) => {
  return (
    <EntryAnimation
      from={from}
      delay={delay}
      className={`${className} p-[2px] rounded-xl ${
        bordered &&
        "bg-gradient-to-r from-primary-darker via-primary to-primary-darker"
      }`}
    >
      <div
        className={`${
          bordered ? bg : "radial-gradient"
        } rounded-xl shadow-lg p-8 border border-transparent bg-clip-padding h-full flex flex-col justify-center items-center `}
      >
        {children}
      </div>
    </EntryAnimation>
  );
};

export default GradientCard;
