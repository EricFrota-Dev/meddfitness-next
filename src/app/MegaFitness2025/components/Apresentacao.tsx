import React from "react";
import { sections } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import medal from "@/assets/images/Uncategorized/medal.webp";
import hand from "@/assets/images/Uncategorized/hand.webp";

const Apresentacao = () => {
  return (
    <div className="grid grid-cols-3 mt-40 w-full relative">
      {sections.map(({ title, content }, i) => (
        <EntryAnimation
          from="bottom"
          key={i}
          className="text-center rounded-xl shadow-lg shadow-darker p-6 m-2 bg-primary-darker/85 z-10"
        >
          <p className="text-[3rem]  font-bold font-montserrat">{title}</p>
          <div className="p-10">
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
          </div>
        </EntryAnimation>
      ))}
      <EntryAnimation from="left" className="absolute -bottom-20">
        <Image src={hand} alt="hand" width={900} />
      </EntryAnimation>
      <EntryAnimation from="right" className="absolute -bottom-40 right-45">
        <Image src={medal} alt="medal" width={500} />
      </EntryAnimation>
    </div>
  );
};

export default Apresentacao;
