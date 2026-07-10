import type { OpeningHoursEntry } from "@/lib/types";
import { Body } from "./Typography";
import { cn } from "@/lib/utils";

interface OpeningHoursProps {
  title?: string;
  hours: OpeningHoursEntry[];
  onDark?: boolean;
}

export function OpeningHours({ title = "Öffnungszeiten", hours, onDark = false }: OpeningHoursProps) {
  return (
    <div className={cn(
      "p-7 border",
      onDark ? "bg-white/5 border-white/[0.08]" : "bg-leica-light border-leica-border"
    )}>
      <p className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-leica-red mb-4">{title}</p>
      {hours.map((h) => (
        <div key={h.days} className={cn(
          "flex justify-between py-2.5 border-b",
          onDark ? "border-white/[0.08]" : "border-leica-border"
        )}>
          <Body onDark={onDark} size="sm">{h.days}</Body>
          <Body onDark={onDark} size="sm" className="font-semibold">{h.hours}</Body>
        </div>
      ))}
    </div>
  );
}
