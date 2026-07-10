import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

export function Eyebrow({ children, onDark = false, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-[10px] tracking-[0.22em] uppercase font-bold font-heading mb-4",
      onDark ? "text-white/50" : "text-leica-red",
      className
    )}>{children}</p>
  );
}

export function H1({ children, onDark = false, className, size = "display" }: TypographyProps & { size?: "display" | "hero" | "section" | "card" }) {
  const sizes = {
    display: "text-[clamp(56px,7vw,100px)]",
    hero: "text-[clamp(48px,6vw,82px)]",
    section: "text-[clamp(36px,4vw,58px)]",
    card: "text-[clamp(24px,3vw,36px)]",
  };
  return (
    <h1 className={cn(
      "font-heading font-light leading-none tracking-tight",
      sizes[size],
      onDark ? "text-white" : "text-leica-dark",
      className
    )}>{children}</h1>
  );
}

export function H2({ children, onDark = false, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "font-heading font-light leading-[1.05] tracking-tight text-[clamp(32px,4vw,52px)]",
      onDark ? "text-white" : "text-leica-dark",
      className
    )}>{children}</h2>
  );
}

export function H3({ children, onDark = false, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "font-heading font-normal leading-[1.1] tracking-[-0.01em] text-[clamp(20px,2.2vw,28px)]",
      onDark ? "text-white" : "text-leica-dark",
      className
    )}>{children}</h3>
  );
}

export function Body({ children, onDark = false, size = "md", className }: TypographyProps & { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-[13px]", md: "text-[15px]", lg: "text-[17px]" };
  return (
    <p className={cn(
      "font-body font-normal leading-[1.7]",
      sizes[size],
      onDark ? "text-white/70" : "text-leica-gray",
      className
    )}>{children}</p>
  );
}
