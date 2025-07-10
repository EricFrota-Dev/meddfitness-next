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
              A MeddFitness é a organizadora do maior congresso de medicina
              esportiva do país.
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
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Concursos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Campionatos
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
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Atendimento</h3>
            {/* <p className="text-sm text-gray-300">📞 (11) 96922-3341</p> */}
            <p className="text-sm text-gray-300">
              📧 contato@meddfitness.com.br
            </p>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-300 hover:text-gray-400">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                📷 Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
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
