"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { MENU_DAYS } from "@/lib/constants";

export default function CasinoPage() {
  const [activeDay, setActiveDay] = useState("Montag");
  const menu = MENU_DAYS.find(d => d.day === activeDay) || MENU_DAYS[0];

  return (
    <>
      <PageHero eyebrow="Gastronomie" title="Leica Casino" subtitle="Frisch. Regional. Ausgewogen. Das moderne Betriebsrestaurant im Leitz-Park." imageLabel="Leica Casino" />

      {/* Hours Strip */}
      <section className="bg-leica-red py-6 px-6 text-white text-center">
        <p className="font-heading text-[12px] tracking-[0.15em] uppercase font-bold">
          Öffnungszeiten: Montag – Freitag, 11:30 – 13:30 Uhr
        </p>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection>
            <Eyebrow>Konzept</Eyebrow>
            <H2>Genuss für Mitarbeiter und Gäste</H2>
            <Body className="mt-6 mb-8">
              Das Leica Casino steht nicht nur Mitarbeitern, sondern auch allen Besuchern des Leitz-Parks offen. Genießen Sie in lichtdurchfluteter Atmosphäre frisch zubereitete, abwechslungsreiche Menüs mit regionalen Zutaten.
            </Body>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-leica-red pl-4">
                <H3>Regional</H3>
                <Body size="sm" className="mt-1">Zutaten aus der Umgebung</Body>
              </div>
              <div className="border-l-2 border-leica-red pl-4">
                <H3>Täglich frisch</H3>
                <Body size="sm" className="mt-1">Vor Ort zubereitet</Body>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ImgPlaceholder aspect="4/3" label="Casino Innenraum" src="/images/leica_casino.jpg" />
          </AnimatedSection>
        </div>
      </section>

      {/* Menu Planner */}
      <section className="bg-leica-light py-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Eyebrow>Speiseplan</Eyebrow>
              <H2>Wochenmenü</H2>
            </div>
            
            <div className="flex justify-center mb-10">
              <FilterTabs categories={MENU_DAYS.map(d => d.day)} active={activeDay} onChange={setActiveDay} />
            </div>

            <div className="bg-white p-10 border border-leica-border shadow-sm">
              <H3 className="mb-8 text-center text-leica-red">{activeDay}</H3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-leica-gray mb-1">Menü 1</p>
                  <p className="font-body text-[17px] text-leica-dark">{menu.main}</p>
                </div>
                <div className="w-full h-px bg-leica-border" />
                <div>
                  <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-leica-gray mb-1">Vegetarisch</p>
                  <p className="font-body text-[17px] text-leica-dark">{menu.vegetarian}</p>
                </div>
                <div className="w-full h-px bg-leica-border" />
                <div>
                  <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-leica-gray mb-1">Tagessuppe</p>
                  <p className="font-body text-[17px] text-leica-dark">{menu.soup}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
