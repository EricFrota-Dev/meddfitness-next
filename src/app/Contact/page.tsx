import React from "react";
import { contacts } from "./constants";
import GradientCard from "@/components/ui/GradientCard";
import { TbWorld } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className="px-[10%] grid grid-cols-2 justify-around mt-40 gap-10
    "
    >
      {contacts.map(({ name, contacts }, i) => (
        <GradientCard key={i} bordered className="max-w-150 flex-1">
          <h2>{name}</h2>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-all duration-300"
          >
            <TbWorld />
            {contacts.site}
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-all duration-300"
          >
            <IoIosMail />
            {contacts.email}
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-all duration-300"
          >
            <FaPhoneAlt />
            {contacts.phone}
          </Link>
        </GradientCard>
      ))}
    </div>
  );
};

export default Contact;
