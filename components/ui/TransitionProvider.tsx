"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  useEffect(() => {
    // When pathname changes, we are on the new page, so we animate in (uncover).
    setIsAnimatingOut(false);
    setTargetUrl(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      
      // If no valid internal link is clicked, do nothing
      if (!target || !target.href) return;
      if (target.target === "_blank" || target.hasAttribute("download")) return;
      if (target.origin !== window.location.origin) return;

      const url = new URL(target.href);
      
      // If we are clicking on the current page, let the browser handle it (e.g. hash links)
      if (url.pathname === pathname && url.hash) return;
      
      if (url.pathname !== pathname) {
        e.preventDefault();
        setTargetUrl(url.href);
        setIsAnimatingOut(true);
      }
    };

    // Use capture phase to intercept before Next.js Link
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);

  useEffect(() => {
    if (isAnimatingOut && targetUrl) {
      const timer = setTimeout(() => {
        router.push(targetUrl);
      }, 500); // Wait for exit animation to complete before navigating
      return () => clearTimeout(timer);
    }
  }, [isAnimatingOut, targetUrl, router]);

  return (
    <>
      <AnimatePresence>
        {isAnimatingOut && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#E2000F] flex items-center justify-center pointer-events-none"
          >
            <span className="font-heading font-bold text-4xl text-white tracking-[0.2em] uppercase">Leica</span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
