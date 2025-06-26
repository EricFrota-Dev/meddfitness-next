import React from "react";
import { sections } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";

const Apresentacao = () => {
  return (
    <>
      {sections.map(({ title, content }, i) => (
        <EntryAnimation from="bottom">
          <div key={i} id={title} className="customContainer text-center">
            <p className="text-[4rem] font-bold font-montserrat">{title}</p>
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
          </div>
        </EntryAnimation>
      ))}
    </>
  );
};

export default Apresentacao;
