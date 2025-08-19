"use client";

import { motion } from "motion/react";
import React from "react";

type props = {
  index: number;
  text: string;
  itens?: string[] | null;
};

const AboutHideTexts: React.FC<props> = ({ text, itens }) => {
  return (
    <motion.div
      className={`w-full h-full absolute flex flex-col text-center justify-center p-10 bg-dark/95 rounded-md`}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h4>{text}</h4>
      {itens && (
        <ul className="mt-10 font-extrabold text-sm">
          {itens.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default AboutHideTexts;
