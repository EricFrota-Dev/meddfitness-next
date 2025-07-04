"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLongArrowAltRight, FaFileDownload } from "react-icons/fa";
import { hoverAnimation } from "@/animations";
import { btnProps } from "./types";

const Button: React.FC<btnProps> = ({
  children,
  typeBtn = "default",
  onClick,
  type = "button",
}) => {
  const [hover, setHover] = useState(false);
  const modelos = {
    default:
      "p-6 bg-gradient-to-t from-primary-dark to-primary-darker rounded-full border-[1px] border-2",
    download:
      "relative w-full max-w-120 p-[2px] rounded-lg bg-gradient-to-r from-primary-darker via-primary to-primary-darker",
    redirect:
      "pl-6 pr-14 py-2 bg-dark rounded-full border-[1px] border-primary-dark",
  };

  return (
    <motion.button
      className={`${modelos[typeBtn]} cursor-pointer overflow-hidden min-h-12 ${
        typeBtn !== "download"
          ? " shadow-3 shadow-md relative flex justify-center items-center"
          : ""
      }`}
      variants={hoverAnimation}
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onClick={onClick}
      whileInView="initial"
      type={type}
    >
      {typeBtn === "download" && (
        <div className="bg-5 w-full overflow-hidden pr-4 pl-14 rounded-lg border h-20 flex items-center border-transparent bg-clip-padding">
          <p
            className={`${
              hover && "text-5"
            } transition-all duration-700 z-10 m-auto`}
          >
            {children}
          </p>
          <div
            className={`${
              hover ? "scale-[2820%] bg-primary" : "bg-primary/60"
            } absolute inset-0  h-8 w-8  transition-all duration-1000 top-[26px] left-4 
           rounded-full`}
          ></div>
          <div className="absolute left-[25px]">
            <FaFileDownload />
          </div>
        </div>
      )}
      {typeBtn !== "download" && <p className="z-5">{children}</p>}
      {typeBtn === "redirect" && (
        <div
          className={`${
            hover ? "w-full" : "w-12"
          } absolute transition-all duration-500 flex justify-end items-center top-0 right-0 h-full rounded-full bg-gradient-to-l from-primary to-primary-dark px-4`}
        >
          <FaLongArrowAltRight />
        </div>
      )}
    </motion.button>
  );
};

export default Button;
