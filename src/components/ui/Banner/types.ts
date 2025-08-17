import { StaticImageData } from "next/image";

export type ResponsiveImage = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
};

export type BannerProps = {
  bannerImage: ResponsiveImage;
};
