import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OpeningHours } from "@/components/ui/OpeningHours";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";

export default function BesucherinfosPage() {
  return (
    <>
      <PageHero eyebrow="Besucher" title="Informationen für Ihren Besuch" subtitle="Alles, was Sie für Ihre Reise in die Leica Welt wissen müssen." imageLabel="Leitz-Park Eingang" />

      {/* Info Grid */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          <AnimatedSection delay={0}>
            <OpeningHours title="Allgemeine Öffnungszeiten" hours={[
              { days: "Montag - Freitag", hours: "10:00 - 17:00" },
              { days: "Sa, So & Feiertage", hours: "10:00 - 18:00" },
            ]} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="bg-leica-dark p-7 h-full">
              <p className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-white/50 mb-4">Tickets & Preise</p>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b border-white/[0.08] pb-2">
                  <Body onDark size="sm">Erwachsene</Body>
                  <Body onDark size="sm" className="font-semibold">16,00 €</Body>
                </li>
                <li className="flex justify-between border-b border-white/[0.08] pb-2">
                  <Body onDark size="sm">Ermäßigt</Body>
                  <Body onDark size="sm" className="font-semibold">8,00 €</Body>
                </li>
                <li className="flex justify-between border-b border-white/[0.08] pb-2">
                  <Body onDark size="sm">Familien</Body>
                  <Body onDark size="sm" className="font-semibold">36,00 €</Body>
                </li>
              </ul>
              <Button variant="outline" color="white" href="/erlebnisse/touren">Touren buchen</Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="p-7 border border-leica-border h-full">
              <p className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-leica-red mb-4">Adresse</p>
              <H3 className="mb-2">Leica Camera AG</H3>
              <Body size="sm">Am Leitz-Park 6</Body>
              <Body size="sm">35578 Wetzlar</Body>
              <Body size="sm">Deutschland</Body>
              <div className="mt-6">
                <Button variant="outline" color="dark">Auf Google Maps öffnen</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Arrival Details */}
      <section className="bg-leica-light py-20 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <Eyebrow>Anreise</Eyebrow>
              <H2>Wege in die Leica Welt</H2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Mit dem Auto", d: "A45 Ausfahrt Wetzlar-Süd, der Beschilderung Richtung Leitz-Park folgen. Es stehen ausreichend kostenfreie Parkplätze sowie Tesla Supercharger (250 kW) und Typ2 Ladesäulen zur Verfügung." },
              { t: "Mit der Bahn", d: "ICE oder RE bis Bahnhof Wetzlar. Von dort mit der Buslinie 11 (Richtung Gießen) direkt bis zur Haltestelle 'Leitz-Park'. Fahrtzeit ca. 15 Minuten." },
              { t: "Mit dem Flugzeug", d: "Flughafen Frankfurt am Main (FRA). Weiterreise mit Mietwagen (ca. 45 Min. über A5/A45) oder per Zug via Frankfurt Hauptbahnhof nach Wetzlar." },
            ].map((item, i) => (
              <AnimatedSection key={item.t} delay={i * 0.1}>
                <div className="bg-white p-8 h-full border border-leica-border">
                  <H3>{item.t}</H3>
                  <Body className="mt-4">{item.d}</Body>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px]">
        <ImgPlaceholder fill label="Interactive Google Map Integration" src="/images/leica_ankunft.jpg" />
      </section>
    </>
  );
}
