"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeicaLogo } from "@/components/ui/LeicaLogo";
import { Button } from "@/components/ui/Button";
import { Body } from "@/components/ui/Typography";
import { NAV_LINKS, MOBILE_MENU_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome || menuOpen;
  const textColor = isHome && !scrolled && !menuOpen ? "text-white" : "text-leica-dark";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-350",
          showSolid
            ? "bg-white/[0.97] backdrop-blur-md shadow-[0_1px_0_#E8E8E8]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center h-[72px] gap-10">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <LeicaLogo size={68} />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex gap-7 flex-1 justify-center nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                href={link.href}
                active={pathname === link.href || pathname.startsWith(link.href + "/")}
                lightText={isHome && !scrolled}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="filled" href="/location-buchen">Buchen</Button>
            <button
              onClick={() => setMenuOpen((m) => !m)}
              className={cn(
                "border p-2 cursor-pointer flex flex-col gap-1 transition-all duration-200",
                showSolid ? "border-leica-border" : "border-white/30",
                textColor === "text-white" ? "text-white" : "text-leica-dark"
              )}
              style={{ background: "none" }}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <>
                  <span className={cn("block w-5 h-[1.5px] transition-colors", showSolid ? "bg-leica-dark" : "bg-white")} />
                  <span className={cn("block w-5 h-[1.5px]", showSolid ? "bg-leica-dark" : "bg-white")} />
                  <span className={cn("block w-[13px] h-[1.5px]", showSolid ? "bg-leica-dark" : "bg-white")} />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[999] bg-white flex flex-col px-8 md:px-14 pt-24 pb-14 overflow-y-auto border-l-4 border-leica-red"
          >
            <div className="flex flex-col gap-1">
              {MOBILE_MENU_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block font-heading text-[clamp(22px,3.5vw,44px)] font-light tracking-[-0.01em] py-2.5 border-b border-[#F0F0F0] transition-colors no-underline",
                      pathname === link.href ? "text-leica-red" : "text-leica-dark hover:text-leica-red"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-10">
              <Body size="sm" className="!text-[#999]">Am Leitz-Park 6 · 35578 Wetzlar · info@leica-welt.com</Body>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label, href, active, lightText }: { label: string; href: string; active: boolean; lightText: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-0 py-1 font-heading text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 no-underline group",
        active ? "text-leica-red" : lightText ? "text-white hover:text-leica-red" : "text-leica-dark hover:text-leica-red"
      )}
    >
      {label}
      <span className={cn(
        "absolute -bottom-0.5 left-0 h-px bg-leica-red transition-all duration-250 ease-out",
        active ? "right-0" : "right-full group-hover:right-0"
      )} />
    </Link>
  );
}
