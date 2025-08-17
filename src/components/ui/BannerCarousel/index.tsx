"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "./Arrows";
import { bannerForum, bannerMegafitness } from "@/assets/images/banners";
import Banner from "../Banner";

const BannerCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const banners = [bannerForum, bannerMegafitness];
  const links = [
    "/meddfitness-next/CongressoMeddfitness",
    "/meddfitness-next/MegaFitness2025",
  ];

  return (
    <div className="w-screen max-h-180 flex justify-center relative">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        containerClass="w-screen"
        draggable
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        responsive={responsive}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        customTransition="all 0.7s ease" // suaviza troca
        transitionDuration={700}
      >
        {banners.map((banner, i) => (
          <a key={i} className="relative group" href={links[i]}>
            <Banner bannerImage={banner} />
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
