"use client";

import { entryAnimation } from "@/animations";
import { images } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <motion.div
        variants={entryAnimation()}
        initial="from_left"
        animate="default"
        className="-z-20">
        <Link href="/">
          <Image className="h-[50px]" src={images[0].src} alt={images[0].alt} />
        </Link>
      </motion.div>
    </>
  );
};

export default Logo;
