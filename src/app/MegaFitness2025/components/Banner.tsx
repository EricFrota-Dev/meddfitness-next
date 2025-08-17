import EntryAnimation from "@/components/layout/AnimatedContent/EntryAnimation";
import React from "react";
import Image from "next/image";
import { bannerMegafitness } from "@/assets/images/banners";

const Banner = () => {
  return (
    <EntryAnimation className="w-full customContainer">
      <div className="w-full md:py-16" id="o-concurso-megafitness">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={bannerMegafitness.mobile.src}
          />
          <source
            media="(max-width: 1024px)"
            srcSet={bannerMegafitness.tablet.src}
          />
          <Image
            src={bannerMegafitness.desktop.src}
            alt="Megafitness Banner"
            width={1920}
            height={1080}
            className="w-full h-auto shadow-lg shadow-darker/30 rounded-2xl"
          />
        </picture>
      </div>
    </EntryAnimation>
  );
};

export default Banner;
