import Button from "@/components/ui/Button";
import EchoSysyemCarousel from "@/components/ui/EchoSysyemCarousel";
import { palestrants } from "@/constants";

const Speakers = () => {
  return (
    <>
      <div className="text-center mt-6">
        <div>
          <h1>PALESTRANTES E TEMAS ABORDADOS</h1>
        </div>
        <div className="mt-6 ">
          <EchoSysyemCarousel items={palestrants} />
        </div>
      </div>
      <div className="flex justify-center my-10 customContainer">
        <div className="cursor-pointer">
          <Button>
            <span className="font-bold">
              CLIQUE AQUI E CONFIRA AS ATIVIDADES E CRONOGRAMA DO EVENTO
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Speakers;
