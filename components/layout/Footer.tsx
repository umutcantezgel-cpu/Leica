import Link from "next/link";
import { LeicaLogo } from "@/components/ui/LeicaLogo";
import { Body } from "@/components/ui/Typography";
import { FOOTER_COLUMNS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-leica-dark text-white border-t-[3px] border-leica-red pt-16 pb-12 px-6 md:px-10">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
        {/* Logo + Address */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <LeicaLogo size={64} />
          </div>
          <div className="mb-5">
            <Body onDark size="sm">Leica Camera AG</Body>
            <Body onDark size="sm">Am Leitz-Park 6</Body>
            <Body onDark size="sm">35578 Wetzlar</Body>
          </div>
          {/* Social icons */}
          <div className="flex gap-3.5 mt-4">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-white/50 mb-4">
              {col.title}
            </p>
            <ul className="list-none p-0 m-0 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="font-body text-[13px] text-white/60 hover:text-white no-underline transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="font-body text-[13px] text-white/60">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1320px] mx-auto mt-14 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between gap-3">
        <Body onDark size="sm" className="!text-white/30">
          © 2026 Leica Camera AG. Alle Rechte vorbehalten.
        </Body>
        <Body onDark size="sm" className="!text-white/30">
          Leica Welt · Am Leitz-Park · Wetzlar
        </Body>
      </div>
    </footer>
  );
}
