"use client";
import { motion } from "motion/react";
import { atractionProps } from "./types";
import { entryAnimation } from "@/animations";
import Image from "next/image";

const AtractionCard: React.FC<atractionProps> = ({
  title,
  subTitle,
  desc,
  images,
  isLeft,
}) => {
  return (
    <motion.div
      className={`${
        isLeft
          ? "rounded-l-xl bg-gradient-to-r xl:text-end"
          : "rounded-r-xl bg-gradient-to-l xl:text-start items-end xl:justify-end"
      } from-primary-darker to-dark p-6 text-center flex flex-col xl:items-center mb-10 xl:flex-row`}
      variants={entryAnimation()}
      initial={!isLeft ? "from_left" : "from_right"}
      whileInView="default"
    >
      <div
        className={`mb-4 xl:max-w-120 mx-auto xl:mx-6 ${
          isLeft ? "xl:order-1" : "xl:order-2"
        }`}
      >
        <h1>
          <span>{title}</span>
        </h1>
        {subTitle && (
          <h2>
            <span>{subTitle}</span>
          </h2>
        )}
        <ul>
          {desc.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      </div>
      <div
        className={`w-full xl:w-fit flex justify-center gap-6 ${
          isLeft ? "xl:order-2" : "xl:order-1"
        }`}
      >
        <div
          className={`overflow-hidden rounded-xl max-w-70 max-h-70 ${
            isLeft ? "order-1" : "order-2"
          }`}
        >
          <Image
            src={images[0]}
            alt={title + " primeira imagen"}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`hidden md:flex overflow-hidden rounded-xl max-w-70 max-h-70 ${
            isLeft ? "order-2" : "order-1"
          }`}
        >
          <Image
            src={images[1]}
            alt={title + " segunda imagem"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AtractionCard;
