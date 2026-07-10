import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Body } from "@/components/ui/Typography";

export default function GutscheinePage() {
  return (
    <>
      <PageHero eyebrow="Geschenke" title="Gutscheine" subtitle="Das perfekte Geschenk für Fotografiebegeisterte — Leica Welt Gutscheine." />
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[640px] mx-auto text-center">
          <AnimatedSection>
            <Body className="mb-8">Gutscheine sind im Leica Store oder online erhältlich. Kontaktieren Sie uns für individuelle Gutscheinwerte.</Body>
            <Button href="/kontakt">Kontakt aufnehmen</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
