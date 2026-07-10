"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Body, H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { NewsletterStrip } from "@/components/ui/NewsletterStrip";
import { EVENTS, EVENT_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function VeranstaltungenPage() {
  const [filter, setFilter] = useState("Alle");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filtered = filter === "Alle" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  return (
    <>
      <PageHero eyebrow="Kalender" title="Veranstaltungen" subtitle="Workshops, Vorträge, Führungen und besondere Events in der Leica Welt." />

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <FilterTabs categories={EVENT_CATEGORIES} active={filter} onChange={setFilter} />
              
              {/* View Toggle */}
              <div className="flex border border-leica-border">
                <button
                  onClick={() => setViewMode("list")}
                  className={cn("px-4 py-2 flex items-center justify-center transition-colors cursor-pointer", viewMode === "list" ? "bg-leica-light" : "bg-white hover:bg-leica-light/50")}
                  aria-label="Listenansicht"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <div className="w-px bg-leica-border" />
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn("px-4 py-2 flex items-center justify-center transition-colors cursor-pointer", viewMode === "grid" ? "bg-leica-light" : "bg-white hover:bg-leica-light/50")}
                  aria-label="Rasteransicht"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>

          {viewMode === "list" ? (
            <div className="max-w-[960px] mx-auto space-y-0">
              {filtered.map((ev, i) => (
                <AnimatedSection key={ev.id} delay={i * 0.05}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-8 border-b border-leica-border items-start md:items-center group">
                    <p className="font-heading text-[12px] tracking-[0.15em] uppercase text-leica-red w-[140px] flex-shrink-0 font-semibold">{ev.date}</p>
                    <div className="flex-1">
                      <H3 className="group-hover:text-leica-red transition-colors">{ev.title}</H3>
                      <div className="flex gap-4 mt-2">
                        <span className="px-2.5 py-1 bg-leica-light text-leica-gray text-[10px] tracking-[0.15em] uppercase font-heading">{ev.category}</span>
                        <Body size="sm">{ev.time} · {ev.price}</Body>
                      </div>
                    </div>
                    <Button variant="outline" color="dark">Details</Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((ev, i) => (
                <AnimatedSection key={ev.id} delay={i * 0.05}>
                  <div className="border border-leica-border p-8 h-full flex flex-col hover:shadow-md transition-shadow">
                    <p className="font-heading text-[11px] tracking-[0.15em] uppercase text-leica-red font-semibold mb-3">{ev.date}</p>
                    <H3>{ev.title}</H3>
                    <div className="mt-4 mb-6 flex-1">
                      <span className="inline-block px-2.5 py-1 bg-leica-light text-leica-gray text-[10px] tracking-[0.15em] uppercase font-heading mb-2">{ev.category}</span>
                      <Body size="sm">{ev.time} · {ev.price}</Body>
                    </div>
                    <div>
                      <Button variant="outline" color="dark">Details</Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Body>Keine Veranstaltungen in dieser Kategorie gefunden.</Body>
            </div>
          )}
        </div>
      </section>

      <NewsletterStrip />
    </>
  );
}
