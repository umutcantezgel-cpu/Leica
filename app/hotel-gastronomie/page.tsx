"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";
import { OpeningHours } from "@/components/ui/OpeningHours";

const TABS = ["Ernst Leitz Hotel", "Oskar's", "Café Leitz"];

export default function HotelGastroPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <>
      <PageHero eyebrow="Übernachten &amp; Genießen" title="Hotel &amp; Gastronomie" subtitle="Erstklassiger Komfort und kulinarische Highlights direkt im Leitz-Park." />

      <section className="py-16 px-6 md:px-10 bg-white border-b border-leica-border">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <FilterTabs categories={TABS} active={activeTab} onChange={setActiveTab} />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          {activeTab === "Ernst Leitz Hotel" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <AnimatedSection>
                <ImgPlaceholder aspect="4/3" label="Ernst Leitz Hotel" src="/images/leica_hotel.jpg" />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Eyebrow>4-Sterne-Superior</Eyebrow>
                <H2>Ernst Leitz Hotel</H2>
                <Body className="mt-6 mb-8">
                  Das Vienna House by Wyndham Ernst Leitz Hotel feiert die Fotografie. 129 Zimmer, Suiten und Apartments in modernem Design, ausgestattet mit exklusiven Fotografien. Der perfekte Ausgangspunkt für Ihre Entdeckungsreise durch die Leica Welt.
                </Body>
                <ul className="space-y-3 mb-8">
                  {[
                    "129 Zimmer & Suiten",
                    "Fotografie-inspiriertes Interior Design",
                    "Fitnessbereich",
                    "Direkt im Leitz-Park gelegen"
                  ].map((f) => (
                    <li key={f} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-leica-red" />
                      <Body>{f}</Body>
                    </li>
                  ))}
                </ul>
                <Button variant="filled">Zimmer buchen</Button>
              </AnimatedSection>
            </div>
          )}

          {activeTab === "Oskar's" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <AnimatedSection>
                <Eyebrow>Restaurant</Eyebrow>
                <H2>Oskar's</H2>
                <Body className="mt-6 mb-8">
                  Das Oskar's bietet kulinarische Vielfalt von morgens bis abends. Benannt nach dem Erfinder der Ur-Leica, Oskar Barnack, serviert das Restaurant internationale Klassiker und regionale Spezialitäten in entspannter Atmosphäre.
                </Body>
                <OpeningHours hours={[
                  { days: "Mo – Fr", hours: "06:00 – 10:00 (Frühstück)\n17:00 – 21:30 (Dinner)" },
                  { days: "Samstag", hours: "07:00 – 11:30 (Frühstück)\n17:00 – 21:30 (Dinner)" },
                  { days: "Sonntag", hours: "07:00 – 11:00 (Frühstück)\n12:00 – 15:00 (Brunch)" },
                ]} />
                <div className="mt-8">
                  <Button variant="outline" color="dark">Tisch reservieren</Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <ImgPlaceholder aspect="4/3" label="Oskar's Restaurant" src="/images/leica_restaurant.jpg" />
              </AnimatedSection>
            </div>
          )}

          {activeTab === "Café Leitz" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <AnimatedSection>
                <ImgPlaceholder aspect="4/3" label="Café Leitz" src="/images/leica_cafe.jpg" />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Eyebrow>Kaffeehaus</Eyebrow>
                <H2>Café Leitz</H2>
                <Body className="mt-6 mb-8">
                  Der ideale Ort für eine genussvolle Auszeit. Neben feinen Kaffeespezialitäten lockt Meister-Patissier Daniel Rebert mit exquisiten Kuchen und Törtchen. Das Café Leitz ist architektonisch in Form einer stilisierten Linse erbaut.
                </Body>
                <OpeningHours hours={[
                  { days: "Dienstag - Sonntag", hours: "11:30 – 17:30" },
                  { days: "Montag", hours: "Geschlossen" },
                ]} />
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
