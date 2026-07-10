"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection as Reveal } from "@/components/ui/AnimatedSection";
import { Body, H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const cats = ["Alle", "Allgemein", "Touren", "Gastronomie", "Barrierefreiheit", "Anfahrt", "Workshops", "Gutscheine"];
const faqs = [
  { cat: "Allgemein", q: "Wann ist die Leica Welt geöffnet?", a: "Mo. – Fr.: 10:00 – 17:00 Uhr. Sa., So. & Feiertage: 10:00 – 18:00 Uhr. Sonderschließungen beachten (Ernst Leitz Museum 23. Mai bis 15:00 Uhr, Leica Headquarter 6. Juni geschlossen)." },
  { cat: "Allgemein", q: "Was kostet der Eintritt?", a: "Erwachsene: 16,00 €. Ermäßigt: 8,00 €. Kinder bis 6: kostenlos. Familienticket: 36,00 €. Gruppen (10+): 12,00 €/P. Jahreskarte: 48,00 €." },
  { cat: "Allgemein", q: "Darf ich im Museum fotografieren?", a: "Fotografieren für private Zwecke ist in den meisten Bereichen erlaubt. In einzelnen Wechselausstellungen kann es Einschränkungen geben." },
  { cat: "Anfahrt", q: "Wie komme ich zum Leica Welt?", a: "Mit dem PKW: A45 Ausfahrt Wetzlar-Süd, Beschilderung Leitz-Park folgen. Kostenlose Parkplätze. Mit Bahn: Buslinie 11 ab Wetzlar ZOB, ca. 15 Min." },
  { cat: "Anfahrt", q: "Gibt es Parkmöglichkeiten?", a: "Kostenlose Parkplätze hinter Museum und Café. 12 Tesla Supercharger (250 kW) und 4 Typ2 Ladepunkte (22/50 kW)." },
  { cat: "Touren", q: "Welche Touren gibt es?", a: "1) Durch die Leica Welt (60 Min.) 2) Durch das Ernst Leitz Museum (45 Min.) 3) Leitz-Park Wald (3 km) 4) Vom Leitz-Park in die Altstadt (7,8 km) 5) Leica Naturlehrpfad. Alle im Eintrittspreis inklusive." },
  { cat: "Touren", q: "Kann ich eine Manufakturführung buchen?", a: "Ja. Standard 60 Min. (20 €), Premium 3 Std. (80 €), Gruppen ab 250 €. Bitte min. 2 Wochen im Voraus buchen." },
  { cat: "Gastronomie", q: "Wann hat das Café Leitz geöffnet?", a: "Di – So: 11:30 – 17:30 Uhr. Mo geschlossen. Sonderschließungen: 9., 13. und 18. Juni 2026." },
  { cat: "Gastronomie", q: "Wann hat Oskar's Restaurant geöffnet?", a: "Mo–Fr: Frühstück 06–10 Uhr, Dinner 17–21:30 Uhr. Sa: Frühstück 07–11:30 Uhr, Dinner 17–21:30 Uhr. So: Frühstück 07–11 Uhr, Brunch 12–15 Uhr." },
  { cat: "Barrierefreiheit", q: "Ist die Leica Welt barrierefrei?", a: "Ja. Rollstuhlgerechte Eingänge, Aufzüge und Toiletten in allen Bereichen. Bei speziellen Anforderungen bitte im Voraus kontaktieren." },
  { cat: "Workshops", q: "Welche Workshops werden angeboten?", a: "Smartphone Workshops, Straßenfotografie, Camera Obscura und Leica.Connect. Alle Termine im Veranstaltungskalender." },
  { cat: "Gutscheine", q: "Gibt es Gutscheine und Erlebnispakete?", a: "Ja: MAX (ab 89 €), ELSIE (ab 249 €), OSKAR (ab 399 €). Im Leica Store oder online erhältlich." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState("Alle");

  const shown = cat === "Alle" ? faqs : faqs.filter(f => f.cat === cat);

  return (
    <>
      <PageHero eyebrow="Leica Welt" title="Häufige Fragen" imageLabel="FAQ Leica Welt" height="38vh" />
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-[920px] mx-auto">
          <div className="flex gap-2 flex-wrap mb-11">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => { setCat(c); setOpen(null); }}
                className={cn(
                  "px-4 py-2 border font-heading text-[11px] tracking-[0.1em] uppercase transition-all duration-200",
                  c === cat ? "border-leica-red bg-leica-red text-white" : "border-[#D8D8D8] bg-white text-leica-gray hover:border-leica-red"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          {shown.map((faq, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="border-b border-leica-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 bg-transparent border-none cursor-pointer text-left gap-6"
                >
                  <div>
                    <p className="font-heading text-[10px] text-leica-red tracking-[0.15em] uppercase mb-1">{faq.cat}</p>
                    <p className="font-heading text-[clamp(15px,1.7vw,19px)] font-normal text-leica-dark m-0">{faq.q}</p>
                  </div>
                  <div className={cn("flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 text-leica-red", open === i && "rotate-45")}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                </button>
                <div
                  className={cn("overflow-hidden transition-all duration-400 ease-in-out", open === i ? "max-h-[300px]" : "max-h-0")}
                >
                  <div className="pb-6">
                    <Body size="md">{faq.a}</Body>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="mt-14 p-9 bg-leica-light border border-leica-border flex justify-between items-center flex-wrap gap-5">
            <div>
              <H3>Weitere Fragen?</H3>
              <div className="mt-2"><Body>Kontaktieren Sie uns direkt.</Body></div>
            </div>
            <Button variant="filled" href="/kontakt">Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>
    </>
  );
}
