"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Body } from "@/components/ui/Typography";

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  onDark?: boolean;
}

export function Accordion({ items, className, onDark = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={cn(
              "border-b pb-4 transition-colors duration-300",
              onDark ? "border-white/10 hover:border-white/30" : "border-leica-border hover:border-leica-dark"
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left py-2 group outline-none"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-heading tracking-[0.05em] uppercase text-[12px] md:text-[14px] transition-colors duration-300",
                  onDark ? "text-white group-hover:text-leica-red" : "text-leica-dark group-hover:text-leica-red"
                )}
              >
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className={cn(
                  "w-6 h-6 flex items-center justify-center shrink-0",
                  onDark ? "text-white" : "text-leica-dark"
                )}
              >
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "transition-colors duration-300",
                    onDark ? "stroke-white group-hover:stroke-leica-red" : "stroke-leica-dark group-hover:stroke-leica-red"
                  )}
                >
                  <path d="M1 1L6 6L11 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: 16 },
                    collapsed: { opacity: 0, height: 0, marginTop: 0 }
                  }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden"
                >
                  <Body onDark={onDark} className="opacity-70 leading-relaxed max-w-3xl">
                    {item.content}
                  </Body>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
