import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Card } from "@/components/ui/Card";
import { OpeningHours } from "@/components/ui/OpeningHours";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";

const INFO_CARDS = [
  { title: "Sehen", subtitle: "Interaktiv", desc: "Grundlagen der Fotografie interaktiv erleben." },
  { title: "Gestalten", subtitle: "Kreativ", desc: "Motive, Bildwirkung und Anamorphosen." },
  { title: "Erleben", subtitle: "Ausstellungen", desc: "Wechselnde Fotografieausstellungen von Weltrang." },
];

export default function MuseumPage() {
  return (
    <>
      <PageHero eyebrow="Museum" title="Ernst Leitz Museum" subtitle="150 Jahre Optik- und Fotogeschichte interaktiv erleben." imageLabel="Museum Innenraum" />

      {/* Info Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedSection>
            <Eyebrow>Über das Museum</Eyebrow>
            <H2>Fotografie verstehen lernen</H2>
            <Body className="mt-6 mb-8">
              Das Ernst Leitz Museum in Wetzlar präsentiert auf rund 600 Quadratmetern die Geschichte der Leica Fotografie. An interaktiven Stationen können Sie optische Phänomene und fotografische Prinzipien selbst ausprobieren und verstehen lernen.
            </Body>
            <Button href="/erlebnisse/touren">Führung buchen</Button>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ImgPlaceholder aspect="4/3" label="Museum Exponate" src="/images/leica_museum_exhibition.jpg" />
          </AnimatedSection>
        </div>
      </section>

      {/* Concept Cards */}
      <section className="bg-leica-light py-20 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {INFO_CARDS.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div className="bg-white p-8 border border-leica-border h-full">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-leica-red font-heading font-semibold mb-3">{card.subtitle}</p>
                  <H3>{card.title}</H3>
                  <Body className="mt-4">{card.desc}</Body>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets & Hours */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="bg-leica-dark p-10 text-white h-full">
              <Eyebrow onDark>Tickets</Eyebrow>
              <H3 onDark className="mb-6">Eintrittspreise</H3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/[0.08] pb-3">
                  <Body onDark>Erwachsene</Body>
                  <Body onDark className="font-semibold">16,00 €</Body>
                </li>
                <li className="flex justify-between border-b border-white/[0.08] pb-3">
                  <Body onDark>Ermäßigt</Body>
                  <Body onDark className="font-semibold">8,00 €</Body>
                </li>
                <li className="flex justify-between border-b border-white/[0.08] pb-3">
                  <Body onDark>Familien</Body>
                  <Body onDark className="font-semibold">36,00 €</Body>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="outline" color="white" href="/besucherinfos">Mehr Details</Button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <OpeningHours hours={[
              { days: "Montag - Freitag", hours: "10:00 - 17:00" },
              { days: "Sa, So & Feiertage", hours: "10:00 - 18:00" },
            ]} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
