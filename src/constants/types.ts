import { StaticImageData } from "next/image";

export type imagesProps = {
  src: StaticImageData;
  alt: string;
};
export type simpleImage = {
  id: number;
  src: StaticImageData;
  alt: string;
};

export type childrenProps = {
  children: React.ReactNode;
};

export type simpleCardProps = {
  title: string;
  src: StaticImageData;
  desc?: string;
};
export type simpleCard = {
  id: number;
  title: string;
  src: StaticImageData;
  desc?: string;
};

export type articleContent = {
  id: number;
  title: string;
  content: string;
};
export type categoryFem = {
  id: number;
  title: string;
  desc: string[];
  images: StaticImageData[];
};
