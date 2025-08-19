"use client";

import { entryAnimation } from "@/animations";
import { contacts } from "@/app/Contact/constants";
import { motion } from "framer-motion"; // ajustei import
import Link from "next/link";
import { SiMinutemailer } from "react-icons/si";
import EntryAnimation from "../AnimatedContent/EntryAnimation";

const Footer = () => {
  return (
    <>
      {/* Seção de Contato acima do Footer */}
      <section className="bg-dark-300 text-light py-12">
        <EntryAnimation
          from="bottom"
          className="text-center flex flex-col md:flex-row justify-around"
        >
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Entre em Contato
              </h2>
              <p className="mt-2 text-gray-100">
                Tem dúvidas, sugestões ou quer falar com a MeddFitness? Preencha
                o formulário:
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <SiMinutemailer size={100} className="text-primary" />
            </div>
          </div>

          <form className="mt-6 flex flex-col md:items-center md:justify-center gap-4 w-full max-w-120 p-10">
            <input
              type="text"
              placeholder="Seu nome"
              className="px-4 py-2 rounded-lg w-full border-1 border-dark bg-dark inner-shadow"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-2 rounded-lg w-full border-1 border-dark bg-dark inner-shadow"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              rows={3}
              className="px-4 py-2 rounded-lg w-full border-1 border-dark bg-dark inner-shadow"
              required
            />
            <button
              type="submit"
              className="bg-light cursor-pointer hover:scale-103 hover:bg-primary transition-all px-6 py-3 rounded-lg font-semibold text-dark"
            >
              Enviar
            </button>
          </form>
        </EntryAnimation>
      </section>

      {/* Footer */}
      <motion.div
        className="bg-darker text-light"
        variants={entryAnimation()}
        initial="from_bottom"
        whileInView="default"
      >
        {/* Container Principal */}
        <div className="customContainer">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-8 ">
            {/* Coluna 1 - Sobre a Empresa */}
            <div className="w-full">
              <h2 className="text-2xl font-bold">
                <span>MEDDFITNESS</span>
              </h2>
              <h4 className="mt-2 text-gray-300 text-lg">
                A MeddFitness é a organizadora do maior fórum de medicina
                integrativa do país.
              </h4>
            </div>

            {/* Coluna 2 - Serviços */}
            <div className="w-full">
              <h3 className="text-lg font-semibold">Nossos Serviços</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="/meddfitness-next/CongressoMeddfitness#palestrantes-temas"
                    className="text-sm hover:text-gray-400"
                  >
                    Palestras
                  </a>
                </li>
                <li>
                  <a
                    href="/meddfitness-next/MegaFitness2025"
                    className="text-sm hover:text-gray-400"
                  >
                    Concursos
                  </a>
                </li>
                <li>
                  <a
                    href="/meddfitness-next/CongressoMeddfitness#competicoes-e-categorias"
                    className="text-sm hover:text-gray-400"
                  >
                    Campeonatos
                  </a>
                </li>

                <li>
                  <a
                    href="/meddfitness-next/About#eventos-patrocinados"
                    className="text-sm hover:text-gray-400"
                  >
                    Shows
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Redes Sociais */}
            <div className="w-full">
              <h3 className="text-lg font-semibold">Redes Sociais</h3>
              <div className="space-y-2 mt-2">
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
            {/* Coluna 4 - Contato */}
            <div className="w-full list-none text-sm">
              <h3 className="text-lg font-semibold pb-2">Contatos</h3>
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
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <hr className="border-1 border-dark-200 mt-6" />

        {/* Direitos Autorais */}
        <div className="text-center text-sm text-gray-400 p-6">
          © 2025 MeddFitness. Todos os direitos reservados.
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
