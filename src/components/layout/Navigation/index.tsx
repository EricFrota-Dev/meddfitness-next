"use client";

import { useEffect, useState } from "react";
import Navibar from "./Navbar";
import Logo from "./Logo";
import useSidebar from "@/hooks/useSidebar";

const Navegation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { isSidebarOpen } = useSidebar();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Só aplica no mobile
      if (window.innerWidth <= 768 && !isSidebarOpen) {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
          // Rolando para baixo → esconde
          setVisible(false);
        } else {
          // Rolando para cima → mostra
          setVisible(true);
        }
      } else {
        // Em desktop sempre visível
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isSidebarOpen]);

  return (
    <nav
      className={`bg-darker justify-between z-50 h-30 md:h-30 w-[100vw] fixed flex flex-wrap items-center pr-6 pl-6 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Logo />
      <Navibar />
    </nav>
  );
};

export default Navegation;
