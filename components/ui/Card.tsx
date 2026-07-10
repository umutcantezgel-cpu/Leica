"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImgPlaceholder } from "./ImgPlaceholder";
import { H3 } from "./Typography";

interface CardProps {
  title: string;
  subtitle?: string;
  tag?: string;
  href?: string;
  aspect?: string;
  imageUrl?: string;
}

export function Card({ title, subtitle, tag, href, aspect = "3/2", imageUrl }: CardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-leica-border overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300 cursor-pointer"
    >
      <div className="overflow-hidden relative">
        <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
          <ImgPlaceholder aspect={aspect} label={imageUrl || title} />
        </motion.div>
        {tag && (
          <div className="absolute top-4 left-4 bg-leica-red text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 font-heading font-semibold">
            {tag}
          </div>
        )}
      </div>
      <div className="p-6">
        {subtitle && (
          <p className="text-[11px] tracking-[0.15em] uppercase text-leica-red font-heading font-semibold mb-2">{subtitle}</p>
        )}
        <H3>{title}</H3>
        {href && (
          <div className="mt-3.5 flex items-center gap-2 text-[#999] text-[11px] tracking-[0.12em] uppercase font-heading">
            Mehr erfahren
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
