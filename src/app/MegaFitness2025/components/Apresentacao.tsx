import React from "react";
import { sections } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";

const Apresentacao = () => {
  return (
    <div className="customContainer">
      {sections.map(({ title, content }, i) => (
        <EntryAnimation from="bottom" key={i} className="m-2 z-10 mb-16">
          <p className="text-[1.6rem] md:text-[2rem] text-center font-bold font-montserrat pb-4">
            <span>{title}</span>
          </p>
          <div>
            {content.map(({ text, spacing }, i) => (
              <ReactMarkdown
                key={i}
                components={{
                  p: ({ children }) => (
                    <p className={`text-xl ${spacing ? "" : ""}`}>{children}</p>
                  ),
                }}
              >
                {text}
              </ReactMarkdown>
            ))}
          </div>
        </EntryAnimation>
      ))}
    </div>
  );
};

export default Apresentacao;
