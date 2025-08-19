"use client";
import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import GradientCard from "@/components/ui/GradientCard";
import { motion } from "motion/react";
// import { FaMapMarkerAlt } from "react-icons/fa";
import localImg from "@/assets/images/Uncategorized/local.webp";

const Local = () => {
  return (
    <div className="customContainer flex flex-col md:flex-row text-center gap-10">
      <div className="flex-1 flex justify-center items-center">
        <motion.img
          src={localImg.src}
          alt="local"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-10">
        <div>
          <h1>
            <span className="neon">07 A 09 DE NOVEMBRO DE 2025</span>
          </h1>
          <h2>LOCAL: ARENA OLÍMPIA SHOWS & EVENTOS</h2>
        </div>
        <div>
          <GradientCard bordered>
            <div className="flex">
              {/* <div>
                <span>
                  <FaMapMarkerAlt className="w-12 h-12" />
                </span>
              </div> */}
              <div className="ml-8 mb-4">
                <p>Rua Projetada A, sem n° - Parque do Sol, Olímpia-SP.</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.0897835653768!2d-48.919746697038754!3d-20.7029316126649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc6f7583218d71%3A0x3fa668f43574128c!2sR.%20Projetada%20A%20-%20Ol%C3%ADmpia%2C%20SP%2C%2015400-000!5e0!3m2!1spt-BR!2sbr!4v1752539951459!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-auto"
            ></iframe>
          </GradientCard>
        </div>
        <GarantirEngressoBtn className="flex justify-center" />
      </div>
    </div>
  );
};

export default Local;
