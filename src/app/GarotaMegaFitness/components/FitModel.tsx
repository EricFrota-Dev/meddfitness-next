import {
  fitModel01,
  fitModel02,
  fitModel03,
  fitModelTable,
} from "@/assets/images/fitModels";
import Image from "next/image";

const FitModel = () => {
  const imgs = [fitModel01, fitModel02, fitModel03];

  return (
    <div className="customContainer text-center">
      <h1 className="mb-10">1º FIT MODEL RIO PRETO</h1>
      <div className="md:flex gap-6">
        <div className="flex-5 mb-6 md:mb-0">
          <Image src={fitModelTable} alt="table" />
        </div>
        <div className="flex-3 flex flex-col gap-6 justify-between">
          {imgs.map((img, i) => (
            <div key={i}>
              <Image src={img} alt={`teste${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitModel;
