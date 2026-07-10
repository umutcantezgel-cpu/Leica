import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}

export function SectionLabel({ children, onDark = false, className }: SectionLabelProps) {
  return (
    <p className={cn(
      "text-[10px] tracking-[0.22em] uppercase font-bold font-heading mb-4",
      onDark ? "text-white/50" : "text-leica-red",
      className
    )}>{children}</p>
  );
}
