import React from "react";
import { contacts } from "./constants";
import GradientCard from "@/components/ui/GradientCard";

const Contact = () => {
  return (
    <div
      className="px-[10%] grid grid-cols-2 justify-around mt-40 gap-10
    "
    >
      {contacts.map(({ name, contacts }, i) => (
        <GradientCard key={i} bordered className="max-w-150 flex-1">
          <h2>{name}</h2>
          <p>{contacts.site}</p>
          <p>{contacts.email}</p>
          <p>{contacts.phone}</p>
        </GradientCard>
      ))}
    </div>
  );
};

export default Contact;
