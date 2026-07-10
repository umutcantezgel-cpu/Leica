import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H3 } from "@/components/ui/Typography";

const PACKAGES = [
  { name: "MAX", price: "ab 89 €", desc: "Museumseintritt, Führung und Café-Gutschein." },
  { name: "ELSIE", price: "ab 249 €", desc: "Inklusive Übernachtung, Museumsbesuch und Manufakturführung." },
  { name: "OSKAR", price: "ab 399 €", desc: "Das Premium-Paket: 2 Nächte, alle Erlebnisse, Dinner bei Oskar's." },
];

export default function ErlebnispaketePage() {
  return (
    <>
      <PageHero eyebrow="Erlebnispakete" title="MAX · ELSIE · OSKAR" subtitle="Komplett-Erlebnisse für einen oder mehrere Tage — alles aus einem Guss." />
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {PACKAGES.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.1}>
              <div className="border border-leica-border p-8 text-center hover:shadow-md transition-shadow">
                <Eyebrow>Paket</Eyebrow>
                <H3>{pkg.name}</H3>
                <p className="font-heading text-leica-red text-[20px] mt-3 mb-4">{pkg.price}</p>
                <Body size="sm">{pkg.desc}</Body>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/kontakt">Paket anfragen</Button>
        </div>
      </section>
    </>
  );
}
