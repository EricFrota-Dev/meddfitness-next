"use client";

import { entryAnimation } from "@/animations";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      className="bg-darker text-light"
      variants={entryAnimation()}
      initial="from_bottom"
      whileInView="default"
    >
      {/* Container Principal */}
      <div className="customContainer">
        <div className="flex flex-wrap justify-between gap-8 ">
          {/* Coluna 1 - Sobre a Empresa */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold">
              <span>MEDDFITNESS</span>
            </h2>
            <h4 className="mt-2 text-gray-300 text-lg">
              A MeddFitness é a organizadora do maior fórum de medicina
              integrativa do país.
            </h4>
          </div>

          {/* Coluna 2 - Serviços */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Feiras
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Palestras
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Concursos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Campeonatos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Shows
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          {/* <div className="w-full md:w-1/4 list-none text-sm">
            <h3 className="text-lg font-semibold pb-2">Contatos</h3>
            <p className="text-sm text-gray-300">📞 (11) 96922-3341</p>
            {contacts.map((contact, i) => (
              <li className="pb-2 flex flex-col" key={i}>
                <p className="text-bold">{contact.name}</p>
                {contact.contacts.map((item, i) => (
                  <Link
                    href="#"
                    key={i}
                    className="pl-2 hover:text-primary hover:scale-102 transition-all"
                  >
                    {item}
                  </Link>
                ))}
              </li>
            ))}
          </div> */}

          {/* Coluna 4 - Redes Sociais */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="space-x-4 mt-2">
              <a href="#" className="text-gray-300 flex hover:text-gray-400">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 flex hover:text-gray-400">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-300 flex hover:text-gray-400">
                📷 Instagram
              </a>
              <a href="#" className="text-gray-300 flex hover:text-gray-400">
                🎥 YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Linha Divisória */}
      <hr className="border-1 border-dark-200" />

      {/* Direitos Autorais */}
      <div className="text-center text-sm text-gray-400 p-6">
        © 2025 MeddFitness. Todos os direitos reservados.
      </div>
    </motion.div>
  );
};

export default Footer;
