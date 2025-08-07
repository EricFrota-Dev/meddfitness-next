"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { navegation } from "../../../constants";
import { entryAnimation } from "@/animations";
import useSidebar from "@/hooks/useSidebar";

type NavItem = {
  url: string;
  title: string;
  childrens: {
    title: string;
    url: string;
  }[];
};

const NavItems = () => {
  const { isSidebarOpen, close } = useSidebar();
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (!isSidebarOpen) {
      setOpenSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarOpen) {
      setOpenSubmenu(null);
    }
  };

  const handleClickToggle = (index: number) => {
    if (isSidebarOpen) {
      setOpenSubmenu((prev) => (prev === index ? null : index));
    }
  };

  return (
    <>
      {navegation.map(({ url, title, childrens }: NavItem, index) => {
        const hasChildren = childrens.length > 0;
        const isOpen = openSubmenu === index;

        return (
          <motion.li
            key={index}
            className="relative flex m-1 h-full items-center"
            variants={entryAnimation(isSidebarOpen ? 0.03 * index : 0)}
            initial={isSidebarOpen ? "from_right" : "initialScale"}
            animate={isSidebarOpen ? "default" : "defaultScale"}
            exit={isSidebarOpen ? "from_right" : undefined}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full">
              <button
                onClick={(e) => {
                  if (hasChildren && !isSidebarOpen) {
                    e.preventDefault();
                  }
                  handleClickToggle(index);
                  if (!hasChildren) close();
                }}
                className={`relative w-full rounded-md py-1 px-3 flex items-center justify-between hover:bg-4/40 hover:scale-102 active:scale-98 active:bg-4/80 transition-transform ${
                  pathname === url && "scale-102 text-dark"
                }`}
              >
                <motion.div
                  className="absolute inset-0 rounded-md z-[-1] bg-primary"
                  initial={{ width: "0%" }}
                  animate={{
                    width: pathname === url ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <h5 className="font-medium">{title}</h5>
                {hasChildren && <IoMdArrowDropdown className="ml-1" />}
              </button>

              {/* Submenu */}
              {hasChildren && (isSidebarOpen || isOpen) && (
                <ul
                  className={`absolute z-10 bg-dark shadow-md rounded-md mt-2 p-4 min-w-[200px] w-full border-[1px] border-dark-300 ${
                    isSidebarOpen
                      ? "relative left-0 mt-1"
                      : "left-1/2 -translate-x-1/2 top-6"
                  }`}
                >
                  {childrens.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={`${url}${child.url}`}
                        onClick={close}
                        className="block px-4 py-2 text-sm hover:bg-primary transition rounded-md border-b-[1px] border-b-dark-300"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        );
      })}
    </>
  );
};

export default NavItems;
