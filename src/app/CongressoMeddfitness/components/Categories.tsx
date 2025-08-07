import React from "react";
import { categories } from "../constants";

const Categories = () => {
  return (
    <div
      className="customContainer flex flex-col items-center"
      id="competicoes-e-categorias"
    >
      <div>
        <h2 className="text-primary font-[800]">CBMFF | IFBB - BRASIL.</h2>
      </div>
      <div className="text-center">
        <h1 className="text-primary font-[900] italic">
          CATEGORIAS DA COMPETIÇÃO
        </h1>
        <h3 className="text-primary italic">FEMININAS E MASCULINAS </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="border-[1px] min-h-60 font-semibold border-primary-darker text-light p-4 flex flex-col justify-between"
          >
            <h2 className="text-xl font-extrabold mb-2">
              {cat.title.toUpperCase()}
            </h2>
            <ul className="text-sm space-y-1">
              {cat.divisions.map((div, i) => (
                <li key={i}>
                  <span className="flex justify-between">
                    <p>{div.ageGroup}</p>
                    {div.category && <p>{div.category}</p>}
                  </span>{" "}
                  {div.height && <p>{div.height}</p>}
                  {div.overall && (
                    <div className="text-light text-xs">Overall</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="font-bold">
        Mais detalhes:{" "}
        <a href="www.ifbb.com.br" className="hover:text-light text-primary">
          www.ifbb.com.br
        </a>
      </div>
    </div>
  );
};

export default Categories;
