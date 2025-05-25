import { imagesProps } from "@/constants/types";
import Image from "next/image";

const BannerItem = ({ src, alt }: imagesProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-screen h-auto min-h-50 object-cover"
    />
  );
};

export default BannerItem;
