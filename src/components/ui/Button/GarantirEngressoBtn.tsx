"use client";
import { motion } from "motion/react";
import Button from ".";
import { pulseAnimation } from "@/animations";
import { GarantirEngressoBtnProps } from "./types";

const GarantirEngressoBtn: React.FC<GarantirEngressoBtnProps> = ({
  className,
}) => {
  return (
    <motion.div
      className={`${className} scale-100 md:scale-130 xl:scale-160`}
      variants={pulseAnimation()}
      animate="default"
    >
      <Button typeBtn="redirect" onClick={() => (window.location.href = "#")}>
        <strong className="text-center">GARANTA O SEU INGRESSO</strong>
      </Button>
    </motion.div>
  );
};

export default GarantirEngressoBtn;
