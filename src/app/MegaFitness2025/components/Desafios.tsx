"use client";

import React, { useState } from "react";
import { desafios } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";

const Desafios = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <>
      <h1 className="text-center font-extrabold text-[4rem] mb-10 ">
        <span>DESAFIOS</span>
      </h1>
      {desafios.map(({ title, content }, i) => (
        <EntryAnimation from="bottom" key={i} className="text-center m-4">
          <button
            className={` ${
              openItem === i ? "bg-dark-300 rounded-t-2xl" : ""
            } text-left p-3 hover:text-primary cursor-pointer font-semibold hover:bg-3/20 transition-all`}
            onClick={() => toggleItem(i)}
          >
            <h3 className="text-center">{title}</h3>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openItem === i ? "auto" : 0,
              opacity: openItem === i ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-dark-300 rounded-2xl shadow-xl shadow-darker/20 p-6"
          >
            {content.map(({ text, spacing }, i) => (
              <ReactMarkdown
                key={i}
                components={{
                  p: ({ children }) => (
                    <p className={`text-xl ${spacing ? "mb-4" : ""}`}>
                      {children}
                    </p>
                  ),
                }}
              >
                {text}
              </ReactMarkdown>
            ))}
          </motion.div>
        </EntryAnimation>
      ))}
    </>
  );
};

export default Desafios;
