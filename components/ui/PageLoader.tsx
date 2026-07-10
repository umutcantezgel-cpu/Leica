"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LeicaLogo } from "./LeicaLogo";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);   // Shutter width opens
    const t2 = setTimeout(() => setPhase(2), 1200);  // Shutter height opens
    const t3 = setTimeout(() => setPhase(3), 2600);  // Focus rings and logo appear
    const t4 = setTimeout(() => setPhase(4), 5000);  // Scale up and zoom through
    const t5 = setTimeout(() => setLoading(false), 5800); // Remove from DOM

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
          {/* Cinematic Shutter Curtain */}
          <motion.div
            initial={{ height: "2px", width: "0%", opacity: 0 }}
            animate={{ 
              width: phase >= 1 ? "100%" : "0%",
              height: phase >= 2 ? "100%" : "2px",
              opacity: phase >= 4 ? 0 : 1
            }}
            transition={{ 
              width: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              height: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
              opacity: { duration: 0.8, ease: "easeInOut" }
            }}
            className="bg-[#0f0f0f] flex items-center justify-center relative overflow-hidden"
          >
            {/* The Lens Elements */}
            <motion.div
              initial={{ scale: 3, filter: "blur(30px)", opacity: 0 }}
              animate={{ 
                scale: phase >= 4 ? 20 : (phase >= 2 ? 1 : 3),
                filter: phase >= 4 ? "blur(20px)" : (phase >= 2 ? "blur(0px)" : "blur(30px)"),
                opacity: phase >= 4 ? 0 : (phase >= 2 ? 1 : 0)
              }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-white/5 flex items-center justify-center shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
            >
              {/* Inner Lens Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute w-[80%] h-[80%] rounded-full border-[1px] border-white/5 border-t-[#E2001A]/40 flex items-center justify-center"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="absolute w-[60%] h-[60%] rounded-full border-[1px] border-white/5 border-b-[#E2001A]/20 flex items-center justify-center"
              />
            </motion.div>

            {/* Leica Logo Reveal */}
            {phase >= 3 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                animate={{ 
                  scale: phase >= 4 ? 3 : 1, 
                  opacity: phase >= 4 ? 0 : 1, 
                  filter: phase >= 4 ? "blur(20px)" : "blur(0px)" 
                }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center drop-shadow-[0_0_30px_rgba(226,0,26,0.3)]"
              >
                <LeicaLogo size={140} />
              </motion.div>
            )}

            {/* Claim Text */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ 
                  opacity: phase >= 4 ? 0 : 1, 
                  y: phase >= 4 ? 30 : 0,
                  filter: phase >= 4 ? "blur(10px)" : "blur(0px)"
                }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-[20%] md:bottom-24 z-10"
              >
                <h1 className="font-heading text-white/90 text-[10px] md:text-[14px] tracking-[0.5em] uppercase font-light text-center flex flex-col md:flex-row gap-3 md:gap-5 items-center">
                  <span>Sehen</span> 
                  <span className="hidden md:inline text-[#E2001A] opacity-60">·</span> 
                  <span>Gestalten</span> 
                  <span className="hidden md:inline text-[#E2001A] opacity-60">·</span> 
                  <span>Erleben</span>
                </h1>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
