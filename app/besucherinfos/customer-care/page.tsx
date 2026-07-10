"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { OpeningHours } from "@/components/ui/OpeningHours";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";
import { SERVICES } from "@/lib/constants";

const TABS = ["Customer Care", "Gläserne Werkstatt", "Kontakt"];

export default function CustomerCarePage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <>
      <PageHero eyebrow="Service" title="Customer Care &amp; Werkstatt" subtitle="Erleben Sie perfekten Service und schauen Sie unseren Experten bei der Reparatur historischer Kameras über die Schulter." />

      <section className="py-16 px-6 md:px-10 bg-white border-b border-leica-border">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <FilterTabs categories={TABS} active={activeTab} onChange={setActiveTab} />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          {activeTab === "Customer Care" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <AnimatedSection>
                <Eyebrow>Customer Care</Eyebrow>
                <H2>Service in Perfektion</H2>
                <Body className="mt-6 mb-8">
                  Ihre Leica ist ein Meisterwerk der Feinmechanik und Optik. Damit sie auch nach Jahren und Jahrzehnten noch perfekt funktioniert, bieten wir Ihnen im Customer Care umfassenden Service – von der Wartung bis zur fachgerechten Reparatur.
                </Body>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  {SERVICES.slice(0, 4).map((s) => (
                    <div key={s.title} className="p-6 border border-leica-border bg-leica-light">
                      <H3>{s.title}</H3>
                      <Body size="sm" className="mt-2">{s.description}</Body>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="mb-8">
                  <ImgPlaceholder aspect="4/3" label="Customer Care Service" src="/images/leica_customercare.jpg" />
                </div>
                <OpeningHours hours={[
                  { days: "Montag – Freitag", hours: "08:00 – 17:00" },
                  { days: "Sa, So & Feiertage", hours: "Geschlossen" },
                ]} />
              </AnimatedSection>
            </div>
          )}

          {activeTab === "Gläserne Werkstatt" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <AnimatedSection>
                <ImgPlaceholder aspect="4/3" label="Gläserne Werkstatt" src="/images/leica_manufaktur.jpg" />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Eyebrow>Live erleben</Eyebrow>
                <H2>Die Gläserne Werkstatt</H2>
                <Body className="mt-6 mb-8">
                  In der öffentlich zugänglichen Show-Werkstatt können Sie unseren Spezialisten bei der Arbeit zusehen. Beobachten Sie die hochpräzise Restauration und Wartung historischer Kameramodelle.
                </Body>
                <OpeningHours hours={[
                  { days: "Dienstag – Freitag", hours: "10:00 – 15:00" },
                  { days: "Mo, Sa & So", hours: "Geschlossen" },
                ]} />
              </AnimatedSection>
            </div>
          )}

          {activeTab === "Kontakt" && (
            <div className="max-w-[800px] mx-auto text-center">
              <AnimatedSection>
                <Eyebrow>Direkter Draht</Eyebrow>
                <H2>Kontakt zum Service</H2>
                <Body className="mt-6 mb-10">
                  Sie möchten Ihre Ausrüstung einsenden oder haben Fragen zu Reparaturen? Kontaktieren Sie unser Service-Team.
                </Body>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-12">
                  <div className="p-8 border border-leica-border bg-leica-light">
                    <H3>Hotline</H3>
                    <p className="font-heading text-leica-red text-[24px] mt-4 mb-2">+49 (0)6441 2080-189</p>
                    <Body size="sm">Mo. - Fr. 08:00 - 17:00 Uhr</Body>
                  </div>
                  <div className="p-8 border border-leica-border bg-leica-light">
                    <H3>E-Mail</H3>
                    <p className="font-heading text-leica-dark text-[20px] mt-4 mb-2">customer.care@leica-camera.com</p>
                    <Body size="sm">Wir antworten i.d.R. innerhalb von 48h</Body>
                  </div>
                </div>
                
                <Button variant="filled" href="/kontakt">Zum Kontaktformular</Button>
              </AnimatedSection>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
