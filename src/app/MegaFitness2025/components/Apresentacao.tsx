import React from "react";
import { sections } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";

const Apresentacao = () => {
  return (
    <>
      {sections.map(({ title, content }, i) => (
        <EntryAnimation
          from="bottom"
          key={i}
          className="text-center rounded-xl shadow-lg shadow-darker border-dark-100 border-1 p-6 m-2 bg-primary-dark"
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
    </>
  );
};

export default Apresentacao;
