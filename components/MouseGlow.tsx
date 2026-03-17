"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 15,
        mass: 0.3,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[400px] h-[400px] rounded-full bg-[#00CED1]/10 blur-[100px]"
      />
    </motion.div>
  );
}

