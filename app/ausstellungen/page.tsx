"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { NewsletterStrip } from "@/components/ui/NewsletterStrip";
import { EXHIBITIONS, EXHIBITION_FILTERS } from "@/lib/constants";

export default function AusstellungenPage() {
  const [filter, setFilter] = useState("Alle");
  const filtered = filter === "Alle" ? EXHIBITIONS : EXHIBITIONS.filter((e) => e.tag === filter);

  return (
    <>
      <PageHero eyebrow="Ausstellungen" title="Aktuelle &amp; kommende Ausstellungen" subtitle="Fotografie als Kunstform — erleben Sie wechselnde und permanente Ausstellungen im Ernst Leitz Museum." />

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="mb-10">
              <FilterTabs categories={EXHIBITION_FILTERS} active={filter} onChange={setFilter} />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((ex, i) => (
              <AnimatedSection key={ex.id} delay={i * 0.08}>
                <Card title={ex.title} tag={ex.tag} subtitle={`${ex.dateRange} · ${ex.location}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <NewsletterStrip />
    </>
  );
}
