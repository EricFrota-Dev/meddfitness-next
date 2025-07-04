"use client";

import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export type EntryDirection =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "scale"
  | "none";

type EntryAnimationProps = {
  children?: React.ReactNode;
  from?: EntryDirection;
  delay?: number;
  className?: string;
  repeat?: boolean;
};

const EntryAnimation = ({
  children,
  from = "none",
  delay = 0,
  className = "",
  repeat = false,
}: EntryAnimationProps) => {
  const { ref, inView } = useInView({ triggerOnce: !repeat });

  const animationClass = {
    bottom: "animate-fade-in-up",
    top: "animate-fade-in-down",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right",
    scale: "animate-fade-in-scale",
    none: "animate-fade-in-smooth",
  }[from];
  return (
    <div
      ref={ref}
      className={clsx("opacity-0", inView && animationClass, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default EntryAnimation;
