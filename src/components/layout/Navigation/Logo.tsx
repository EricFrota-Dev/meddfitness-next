import { images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import EntryAnimation from "../AnimatedContent/EntryAnimation";

const Logo = () => {
  return (
    <>
      <EntryAnimation from="left">
        <Link href="/">
          <Image
            className="h-18 md:h-20 w-auto"
            src={images[1].src}
            alt={images[1].alt}
          />
        </Link>
      </EntryAnimation>
    </>
  );
};

export default Logo;
