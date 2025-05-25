import { StaticImageData } from "next/image";

export type atractionProps = {
  id?: number;
  title: string;
  subTitle?: string;
  desc: string[];
  images: StaticImageData[];
  isLeft?: boolean;
};
