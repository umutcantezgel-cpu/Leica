"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={cn(
            "px-5 py-2 border cursor-pointer font-heading text-[11px] tracking-[0.12em] uppercase transition-all duration-200",
            c === active
              ? "border-leica-red bg-leica-red text-white"
              : "border-[#D8D8D8] bg-white text-leica-gray hover:border-leica-red"
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
