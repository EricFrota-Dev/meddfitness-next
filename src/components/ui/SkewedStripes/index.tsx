"use client";
import { motion } from "motion/react";

const SkewedStripes = () => {
  const stripes = Array.from({ length: 6 });
  const stripeWidths = ["w-1.5", "w-3", "w-4.5", "w-6", "w-7.5", "w-full"];
  const stripeMargin = ["ml-3", "ml-2.5", "ml-2", "ml-1.5", "ml-1", ""];
  return (
    <div
      className="h-12 relative flex flex-row-reverse "
      style={{
        transform: "skewX(-20deg)",
      }}
    >
      {stripes.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.08, duration: 1.3, type: "spring" }}
          className={`${stripeWidths[i]} bg-primary ${stripeMargin[i]}`}
        />
      ))}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 5 * 0.08, duration: 1.3, type: "spring" }}
        className="w-400 -left-400 h-12 top-0 bg-primary absolute "
      />
    </div>
  );
};

export default SkewedStripes;
