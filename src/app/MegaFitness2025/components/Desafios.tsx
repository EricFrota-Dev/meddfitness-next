import { desafios } from "../constants";
import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import ReactMarkdown from "react-markdown";

const Desafios = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-extrabold text-[4rem] mb-10 ">
        <span>DESAFIOS</span>
      </h1>
      <div className="text-light flex flex-col gap-20 bg-dark-100 w-200 h-130 overflow-x-hidden overflow-y-auto p-10">
        {desafios.map(({ title, content }, i) => (
          <li key={i} className="">
            <h2 className="text-center">{title}</h2>
            <EntryAnimation from="bottom" className="text-center m-4">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-darker/20 p-6">
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
  );
};

export default Desafios;
