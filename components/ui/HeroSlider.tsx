"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { Eyebrow } from "./Typography";
import { ImgPlaceholder } from "./ImgPlaceholder";
import type { HeroSlide } from "@/lib/types";

interface HeroSliderProps {
  slides: HeroSlide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const goSlide = useCallback((i: number) => {
    setCurrent(i);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-leica-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <ImgPlaceholder fill label={slides[current].imageLabel} src={slides[current].image} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/[0.72] via-black/40 to-black/[0.12]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow onDark>Leica Welt · Wetzlar</Eyebrow>
            <h1 className="font-heading font-light text-[clamp(52px,7.5vw,108px)] text-white leading-none tracking-tight mb-6 whitespace-pre-line">
              {slides[current].title}
            </h1>
            <p className="font-body text-[clamp(14px,1.4vw,17px)] text-white/70 max-w-[520px] leading-[1.65] mb-10">
              {slides[current].subtitle}
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Button variant="filled" href="/erlebnisse">Erlebnisse entdecken</Button>
              <Button variant="outline" color="white" href="/besucherinfos">Besucherinfos</Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div className="flex gap-2.5 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goSlide(i)}
              className="p-0 border-none cursor-pointer transition-all duration-300"
              style={{
                width: i === current ? "32px" : "8px",
                height: "2px",
                background: i === current ? "#E2001A" : "rgba(255,255,255,0.35)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10">
        <div className="w-px h-12 bg-white/25 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-leica-red animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
