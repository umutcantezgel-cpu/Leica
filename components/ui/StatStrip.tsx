import type { Stat } from "@/lib/types";

interface StatStripProps {
  stats: Stat[];
}

export function StatStrip({ stats }: StatStripProps) {
  return (
    <section className="bg-leica-light py-14 px-6 md:px-10 border-y border-leica-border">
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-[clamp(40px,5vw,68px)] font-light text-leica-dark tracking-tight leading-none">{s.value}</p>
            <p className="font-heading text-[10px] tracking-[0.18em] uppercase text-leica-red mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
