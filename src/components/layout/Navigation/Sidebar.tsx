"use client";
import { entryAnimation } from "@/animations";
import { childrenProps } from "@/constants/types";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import HamburgerMenu from "./HamburgerMenu";
import useSidebar from "@/hooks/useSidebar";

const Sidebar: React.FC<childrenProps> = ({ children }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <HamburgerMenu />
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            className="w-90 -z-10 h-screen bg-darker/90 border-1 border-dark-300 backdrop-blur-xl fixed -top-16 right-0 py-30 xl:hidden overflow-hidden overflow-y-auto"
            variants={entryAnimation()}
            initial="from_right"
            animate="default"
            exit="from_right"
          >
            <ul className="flex flex-col gap-2 p-4 overflow-y-auto">
              {children}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
