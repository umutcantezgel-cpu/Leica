import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Body } from "@/components/ui/Typography";

export default function SmartphoneWorkshopPage() {
  return (
    <>
      <PageHero eyebrow="Workshop" title="Smartphone Workshop" subtitle="Vom Schnappschuss zum perfekten Bild — lernen Sie die Grundlagen der Bildkomposition mit Ihrem Smartphone." />
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[640px] mx-auto text-center">
          <AnimatedSection>
            <Body className="mb-8">Neue Termine werden in Kürze veröffentlicht. Schauen Sie im Veranstaltungskalender nach aktuellen Workshop-Angeboten.</Body>
            <Button href="/veranstaltungen">Zum Veranstaltungskalender</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
