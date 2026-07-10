import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Body, Eyebrow, H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { TOURS } from "@/lib/constants";

export default function TourenPage() {
  return (
    <>
      <PageHero eyebrow="Touren" title="Geführte Touren &amp; Rundgänge" subtitle="Erleben Sie die Leica Welt mit erfahrenen Guides — oder erkunden Sie den Leitz-Park auf eigene Faust." />

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-[960px] mx-auto space-y-0">
          {TOURS.map((tour, i) => (
            <AnimatedSection key={tour.nr} delay={i * 0.08}>
              <div className="flex gap-6 md:gap-10 py-8 border-b border-leica-border items-start">
                <span className="font-heading text-[clamp(42px,5vw,64px)] font-light text-leica-border leading-none flex-shrink-0 w-[70px]">
                  {tour.nr}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <H3>{tour.title}</H3>
                    <span className="px-2.5 py-1 bg-leica-light text-leica-gray text-[10px] tracking-[0.12em] uppercase font-heading whitespace-nowrap">
                      {tour.duration}
                    </span>
                  </div>
                  <Body>{tour.description}</Body>
                  <p className="text-leica-red font-heading text-[12px] tracking-[0.1em] mt-3">{tour.price}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Manufaktur CTA */}
      <AnimatedSection>
        <section className="bg-leica-dark py-20 px-6 md:px-10 text-center">
          <div className="max-w-[640px] mx-auto">
            <Eyebrow onDark>Manufakturführung</Eyebrow>
            <h2 className="font-heading text-[clamp(32px,4vw,48px)] font-light text-white leading-tight mb-5">Blick hinter die Kulissen</h2>
            <Body onDark className="mb-8">
              Erleben Sie in unserer Manufaktur, wie aus über 1.700 Einzelteilen eine Leica Kamera entsteht. Standard (60 Min., 20 €), Premium (3 Std., 80 €) oder Gruppen (ab 250 €).
            </Body>
            <Button variant="filled" href="/kontakt">Führung anfragen</Button>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
