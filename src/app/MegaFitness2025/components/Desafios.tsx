import { desafios } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";

const Desafios = () => {
  return (
    <div
      className="flex flex-col items-center scrollborder"
      id="desafios-oficiais"
    >
      <h1 className="text-center font-extrabold text-[2rem] mb-10 ">
        Desafios
      </h1>
      <div className="  border-2 border-light rounded-4xl py-10 px-5">
        <div className="text-light flex flex-col gap-20 h-130 overflow-x-hidden overflow-y-auto">
          {desafios.map(({ title, content }, i) => (
            <li key={i} className="list-none">
              <EntryAnimation from="bottom">
                <div className="overflow-hidden p-6">
                  <h3>{title}</h3>
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
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desafios;
