"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
  animated?: boolean;
}

export default function Logo({ className = "", variant = "default", animated = true }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const logoVariants = {
    initial: animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-3 sm:scale-100 scale-90 ${className}`}
      initial={logoVariants.initial}
      animate={logoVariants.animate}
      whileHover={logoVariants.hover}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* V-Icon SVG */}
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        animate={{
          filter: isHovered
            ? "drop-shadow(0 0 12px rgba(99, 102, 241, 0.6)) drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))"
            : "drop-shadow(0 0 6px rgba(99, 102, 241, 0.3))",
        }}
        transition={{ duration: 0.3 }}
      >
        <defs>
          <linearGradient id={`v-gradient-${isHovered ? "hover" : "default"}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? "#818cf8" : "#6366f1"} />
            <stop offset="100%" stopColor={isHovered ? "#c084fc" : "#a855f7"} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* V Shape - Two sharp lines converging */}
        <motion.path
          key={`v-main-${isHovered}`}
          d="M8 32 L20 8 L32 32"
          stroke={`url(#v-gradient-${isHovered ? "hover" : "default"})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          animate={{
            strokeWidth: isHovered ? 4 : 3.5,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Inner accent line for depth */}
        <motion.path
          key={`v-accent-${isHovered}`}
          d="M12 28 L20 12 L28 28"
          stroke={`url(#v-gradient-${isHovered ? "hover" : "default"})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
          animate={{
            opacity: isHovered ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>

      {/* Typography */}
      <motion.span
        className={`
          font-light uppercase tracking-[0.2em] text-lg sm:text-xl
          ${variant === "footer" 
            ? "text-gray-300" 
            : "text-[#1a1a1a] dark:text-gray-100"
          }
          transition-colors duration-300
        `}
        animate={{
          letterSpacing: isHovered ? "0.25em" : "0.2em",
        }}
        transition={{ duration: 0.3 }}
      >
        VYNTRA
      </motion.span>
    </motion.div>
  );
}

