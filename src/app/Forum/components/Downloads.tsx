import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import localImg from "@/assets/images/Uncategorized/local2.webp";
import Image from "next/image";

const Downloads = () => {
  return (
    <div className="customContainer">
      <div className="md:flex md:gap-6 mb-6">
        <div className="flex-1 mb-3 md:mb-0">
          <Image
            src={localImg.src}
            alt="#"
            width={localImg.width}
            height={localImg.height}
          />
        </div>
        <div className="flex-1 flex gap-3 flex-col justify-around items-center">
          <h1>
            <span>DOWNLOADS</span>
          </h1>
          <Button typeBtn="download">VÍDEO CAMPEONATO 2024</Button>
          <Button typeBtn="download">LOGOS IFBB BRASIL E MEDDFITNESS</Button>
        </div>
      </div>
      <div className="md:flex md:gap-6">
        <div className="flex-1">
          <GradientCard className="h-full ">
            <div>
              <h1>
                <span>SOBRE O EVENTO</span>
              </h1>
              <p>
                1ª MEDDFITNESS – Evento Regional de Conhecimento, Negócios e
                Entretenimento de Medicina Esportiva
              </p>
            </div>
          </GradientCard>
        </div>
        <div className="flex-1">
          <GradientCard className="h-full">
            <div>
              <h1>
                <span>CONTATO PARA ASSUNTOS SOBRE IMPRENSA</span>
              </h1>
              <p>📩 jacvart@uol.com.br</p>
            </div>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
