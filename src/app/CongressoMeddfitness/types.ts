import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export type Midias = {
  icon: StaticImageData;
  name: string;
  value: string;
  type: string;
};
export type FAQsProps = {
  id: number;
  question: string;
  response: string[];
};
export type About = {
  title: string;
  desc: string;
  icon: StaticImageData;
  itens?: string[];
};
