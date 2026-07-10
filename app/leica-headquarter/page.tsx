import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";

export default function HeadquarterPage() {
  return (
    <>
      <PageHero eyebrow="Manufaktur" title="Leica Headquarter" subtitle="Handwerk, Präzision und Innovation hautnah erleben." imageLabel="Leica Headquarter" />

      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection>
            <ImgPlaceholder aspect="4/3" label="Manufaktur" src="/images/leica_manufaktur.jpg" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Eyebrow>Manufaktur</Eyebrow>
            <H2>Made in Wetzlar</H2>
            <Body className="mt-6 mb-8">
              Blicken Sie hinter die Kulissen der Leica Fertigung. Von den drei einzigartig gestalteten Fenstern der Manufaktur aus können Sie den Mitarbeitern bei der hochpräzisen Fertigung und Montage von Objektiven und Kameras über die Schulter schauen.
            </Body>
            <div className="space-y-6">
              {[
                { title: "Linsenfertigung", desc: "Präzision auf den Mikrometer genau." },
                { title: "Objektivmontage", desc: "Handarbeit in höchster Reinraumklasse." },
                { title: "Kameramontage", desc: "Perfektion aus über 1.700 Einzelteilen." }
              ].map((item) => (
                <div key={item.title} className="pl-4 border-l-2 border-leica-red">
                  <H3>{item.title}</H3>
                  <Body size="sm" className="mt-1">{item.desc}</Body>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tour Booking */}
      <section className="bg-leica-dark py-20 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Eyebrow onDark>Führungen</Eyebrow>
              <H2 onDark>Manufaktur hautnah erleben</H2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Standard Tour", duration: "60 Minuten", price: "20 € p.P.", desc: "Blick durch die Manufakturfenster mit Expertenwissen." },
              { title: "Premium Tour", duration: "3 Stunden", price: "80 € p.P.", desc: "Tiefere Einblicke inklusive Leica Galerie und Museum." }
            ].map((tour, i) => (
              <AnimatedSection key={tour.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/[0.08] p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <H3 onDark>{tour.title}</H3>
                    <span className="text-leica-red font-heading font-bold">{tour.price}</span>
                  </div>
                  <Body onDark className="mb-6 flex-1">{tour.desc}</Body>
                  <p className="text-white/50 text-[11px] uppercase tracking-[0.1em] font-heading mb-6">{tour.duration}</p>
                  <Button variant="outline" color="white" href="/kontakt">Anfragen</Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
