"use client";

import { navegation } from "../../../constants";
import { motion } from "motion/react";
import { entryAnimation } from "@/animations";
import useSidebar from "@/hooks/useSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const { isSidebarOpen, close } = useSidebar();
  const location = usePathname();
  return (
    <>
      {navegation.map(({ url, title }, index) => (
        <motion.li
          key={index}
          className="flex m-1 h-full items-center"
          variants={entryAnimation(isSidebarOpen ? 0.03 * index : 0)}
          initial={isSidebarOpen ? "from_right" : "initialScale"}
          animate={isSidebarOpen ? "default" : "defaultScale"}
          exit={isSidebarOpen ? "from_right" : undefined}
        >
          <Link
            href={url}
            onClick={close}
            className={`relative rounded-md py-1 px-3 flex w-full items-center hover:bg-4/40 hover:scale-102 active:scale-98 active:bg-4/80 transition-transform ${
              location === url && "scale-102 text-dark"
            }`}
          >
            <motion.div
              className={`${
                isSidebarOpen ? "bg-primary " : "bg-primary"
              } absolute inset-0 rounded-md z-[-1]`}
              initial={{ width: "0%" }}
              animate={{
                width: location === `${url}` ? "100%" : "0%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            <h5 className="font-[500]">{title}</h5>
          </Link>
        </motion.li>
      ))}
    </>
  );
};

export default NavItems;
