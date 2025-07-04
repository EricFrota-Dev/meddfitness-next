"use client";

import { motion } from "motion/react";
import React from "react";

type props = {
  index: number;
  text: string;
};

const AboutHideTexts: React.FC<props> = ({ text }) => {
  return (
    <motion.div
      className={`w-full h-full absolute flex text-center items-center p-10 bg-dark/95 rounded-md`}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h4>{text}</h4>
    </motion.div>
  );
};

export default AboutHideTexts;
