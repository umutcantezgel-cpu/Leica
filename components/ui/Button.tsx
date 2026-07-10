"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  color?: "dark" | "white" | "red";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "outline",
  color = "dark",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-[0.12em] uppercase cursor-pointer border font-heading transition-all duration-250";

  const variants = {
    filled: "bg-leica-red border-leica-red text-white hover:bg-[#b50015] hover:border-[#b50015] hover:shadow-[0_4px_16px_rgba(226,0,26,0.3)]",
    "outline-dark": "bg-transparent border-leica-dark text-leica-dark hover:bg-leica-dark hover:text-white",
    "outline-white": "bg-transparent border-white text-white hover:bg-white hover:text-black",
    "outline-red": "bg-transparent border-leica-red text-leica-red hover:bg-leica-red hover:text-white",
  };

  const variantKey = variant === "filled" ? "filled" : `outline-${color}` as keyof typeof variants;
  const classes = cn(base, variants[variantKey] || variants["outline-dark"], className);

  if (href) {
    return (
      <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
