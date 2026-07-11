import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OpeningHours } from "@/components/ui/OpeningHours";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Button } from "@/components/ui/Button";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";
import { Accordion } from "@/components/ui/Accordion";
import Link from "next/link";

export default function BesucherinfosPage() {
  const faqs = [
    {
      title: "Darf ich im Museum fotografieren?",
      content: "Ja, das Fotografieren für private, nicht-kommerzielle Zwecke ist in allen öffentlichen Bereichen und Ausstellungen ausdrücklich erwünscht. Bitte nehmen Sie jedoch Rücksicht auf andere Besucher und verwenden Sie keinen Blitz oder Stative ohne vorherige Anmeldung."
    },
    {
      title: "Sind Hunde auf dem Gelände erlaubt?",
      content: "Hunde sind auf den Außenflächen des Leitz-Parks sowie im Foyer des Ernst Leitz Museums herzlich willkommen. Aus Rücksicht auf die Kunstwerke und andere Besucher sind Hunde in den Ausstellungsräumen und der Manufaktur jedoch nicht gestattet (ausgenommen Assistenzhunde)."
    },
    {
      title: "Bieten Sie Führungen in anderen Sprachen an?",
      content: "Standardmäßig finden unsere Führungen auf Deutsch und Englisch statt. Auf Anfrage organisieren wir gerne private Touren in weiteren Sprachen, darunter Französisch, Spanisch, Mandarin und Japanisch. Bitte kontaktieren Sie hierfür frühzeitig unser Customer Care Team."
    },
    {
      title: "Gibt es Schließfächer und eine Garderobe?",
      content: "Ja, im Eingangsbereich des Ernst Leitz Museums stehen Ihnen kostenfreie Schließfächer in verschiedenen Größen (auch für Koffer und großes Foto-Equipment) sowie eine bewachte Garderobe zur Verfügung."
    },
    {
      title: "Was ist das Leica Leihprogramm?",
      content: "Gegen Vorlage eines gültigen Personalausweises können Sie sich im Leica Store eine aktuelle Leica Kamera (inkl. Objektiv) für die Dauer Ihres Besuchs kostenfrei ausleihen. Eine SD-Karte können Sie entweder selbst mitbringen oder im Store erwerben. So können Sie die Leica Welt direkt durch den Sucher einer Leica M, SL oder Q erleben."
    }
  ];

  return (
    <div className="bg-white">
      <PageHero 
        eyebrow="Besucher" 
        title="Willkommen im Herzen der Fotografie" 
        subtitle="Alles, was Sie für Ihre Reise in die Leica Welt wissen müssen. Planen Sie Ihren Aufenthalt am Leitz-Park Wetzlar." 
        imageLabel="Leitz-Park Architektur" 
        image="/images/leica_hero_park.jpg"
      />

      {/* 1. Philosophical Welcome */}
      <section className="py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <AnimatedSection>
            <Eyebrow>Der Leitz-Park</Eyebrow>
            <H2 className="mt-4 mb-8">Mehr als ein Museum. Eine Pilgerstätte für Licht und Raum.</H2>
            <Body className="opacity-80 max-w-2xl mx-auto text-lg md:text-xl">
              Der Leitz-Park Wetzlar ist das globale Hauptquartier der Leica Camera AG und ein offener Campus, der Fotografie-Enthusiasten aus aller Welt vereint. Hier erleben Sie nicht nur Ausstellungen von Weltrang, sondern blicken hinter die Kulissen der legendären Leica Manufaktur. Nehmen Sie sich Zeit. Tauchen Sie ein.
            </Body>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Campus Breakdown (Bento Grid) */}
      <section className="bg-leica-light py-32 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <Eyebrow>Entdecken</Eyebrow>
              <H2 className="mt-4 max-w-2xl">Der Campus im Überblick</H2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection className="lg:col-span-2 group">
              <Link href="/ernst-leitz-museum" className="block relative h-[400px] md:h-[600px] overflow-hidden">
                <ImgPlaceholder fill src="/images/leica_hero_museum.jpg" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <h3 className="text-white font-heading text-3xl mb-4">Ernst Leitz Museum</h3>
                  <Body onDark className="max-w-md">Interaktive Ausstellungen, Meisterwerke der Fotografie und tiefgreifende Einblicke in die Leica Historie.</Body>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="group">
              <Link href="/erlebnisse/touren" className="block relative h-[400px] md:h-[600px] overflow-hidden">
                <ImgPlaceholder fill src="/images/leica_manufaktur.jpg" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white font-heading text-2xl mb-3">Leica Manufaktur</h3>
                  <Body onDark>Erleben Sie absolute Präzision. Beobachten Sie unsere Techniker bei der Handfertigung der Kameras.</Body>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="group">
              <Link href="/shops" className="block relative h-[400px] overflow-hidden">
                <ImgPlaceholder fill src="/images/leica_store.jpg" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white font-heading text-2xl mb-3">Leica Store</h3>
                  <Body onDark>Das gesamte Portfolio. Lassen Sie sich exklusiv beraten und testen Sie aktuelle Systeme.</Body>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="group">
              <Link href="/hotel-gastronomie" className="block relative h-[400px] overflow-hidden">
                <ImgPlaceholder fill src="/images/leica_cafe.jpg" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white font-heading text-2xl mb-3">Café Leitz</h3>
                  <Body onDark>Pâtisserie und Kaffeehaus-Kultur in modernem Ambiente.</Body>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="group">
              <Link href="/hotel-gastronomie" className="block relative h-[400px] overflow-hidden">
                <ImgPlaceholder fill src="/images/leica_hotel.jpg" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white font-heading text-2xl mb-3">Ernst Leitz Hotel</h3>
                  <Body onDark>Übernachten Sie im einzigen Leica Hotel der Welt.</Body>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Detailed Opening Hours & Tickets */}
      <section className="py-32 px-6 md:px-10 bg-leica-dark text-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <Eyebrow onDark>Planung</Eyebrow>
            <H2 className="mt-4 mb-20 text-white">Öffnungszeiten & Preise</H2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24">
            <AnimatedSection delay={0.1}>
              <h3 className="font-heading text-xl mb-6 pb-4 border-b border-white/20">Ernst Leitz Museum</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start"><Body onDark size="sm">Montag - Sonntag</Body><Body onDark size="sm" className="font-bold text-right">10:00 - 18:00</Body></li>
                <li className="flex justify-between items-start"><Body onDark size="sm">Feiertage</Body><Body onDark size="sm" className="font-bold text-right">Geöffnet</Body></li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="font-heading text-xl mb-6 pb-4 border-b border-white/20">Leica Store Wetzlar</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start"><Body onDark size="sm">Montag - Samstag</Body><Body onDark size="sm" className="font-bold text-right">10:00 - 18:00</Body></li>
                <li className="flex justify-between items-start"><Body onDark size="sm">Sonntag</Body><Body onDark size="sm" className="font-bold text-right text-leica-red">Geschlossen</Body></li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="font-heading text-xl mb-6 pb-4 border-b border-white/20">Café Leitz</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start"><Body onDark size="sm">Montag - Freitag</Body><Body onDark size="sm" className="font-bold text-right">11:00 - 17:30</Body></li>
                <li className="flex justify-between items-start"><Body onDark size="sm">Sa, So & Feiertage</Body><Body onDark size="sm" className="font-bold text-right">10:00 - 18:00</Body></li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h3 className="font-heading text-xl mb-6 pb-4 border-b border-white/20">Customer Care</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start"><Body onDark size="sm">Montag - Freitag</Body><Body onDark size="sm" className="font-bold text-right">08:00 - 17:00</Body></li>
                <li className="flex justify-between items-start"><Body onDark size="sm">Wochenende</Body><Body onDark size="sm" className="font-bold text-right text-leica-red">Geschlossen</Body></li>
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="bg-white/5 p-8 md:p-12 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <H3 className="mb-6">Tickets Ernst Leitz Museum</H3>
                <Body onDark className="mb-8 max-w-md opacity-70">
                  Der Zugang zum Leitz-Park Gelände, der Manufaktur-Galerie und den Ausstellungsflächen im Leica Hauptquartier ist kostenfrei. Lediglich für das Ernst Leitz Museum wird Eintritt erhoben.
                </Body>
                <ul className="space-y-3 max-w-md">
                  <li className="flex justify-between border-b border-white/10 pb-3"><Body onDark>Regulär</Body><Body onDark className="font-semibold">12,00 €</Body></li>
                  <li className="flex justify-between border-b border-white/10 pb-3"><Body onDark>Ermäßigt (Schüler, Studenten, Senioren)</Body><Body onDark className="font-semibold">8,00 €</Body></li>
                  <li className="flex justify-between border-b border-white/10 pb-3"><Body onDark>Familienkarte (2 Erw. + Kinder)</Body><Body onDark className="font-semibold">28,00 €</Body></li>
                  <li className="flex justify-between pb-3"><Body onDark>Kinder (unter 16 Jahren)</Body><Body onDark className="font-semibold">Kostenfrei</Body></li>
                </ul>
              </div>
              <div className="flex flex-col justify-center bg-white/5 p-8 border border-white/10 text-center">
                <H3 className="mb-4">Tickets online buchen</H3>
                <Body onDark className="mb-8 opacity-70">
                  Sichern Sie sich Ihr Ticket im Voraus und vermeiden Sie Wartezeiten an der Kasse.
                </Body>
                <Button variant="primary" className="mx-auto" href="/ausstellungen">Zum Ticketshop</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Accessibility & VIP Services */}
      <section className="py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <Eyebrow>Services</Eyebrow>
              <H2 className="mt-4 mb-8">Barrierefreiheit & VIP Betreuung</H2>
              <div className="space-y-8">
                <div>
                  <H3 className="mb-3">Barrierefreier Campus</H3>
                  <Body className="opacity-80">
                    Der gesamte Leitz-Park, inklusive aller Ausstellungen, des Museums, des Cafés und der Manufaktur-Einblicke, ist vollständig rollstuhlgerecht und stufenlos erreichbar. Aufzüge verbinden alle Ebenen. Behindertengerechte Parkplätze befinden sich in unmittelbarer Nähe zu den Haupteingängen.
                  </Body>
                </div>
                <div>
                  <H3 className="mb-3">Inklusive Ausstellungen</H3>
                  <Body className="opacity-80">
                    Wir bieten regelmäßig spezielle Führungen für blinde und sehbehinderte Menschen an, bei denen taktile Modelle berühmter Kameras und erhabene Fotografien eine Erfahrung der Leica Welt ermöglichen. Gebärdensprachdolmetscher können auf Anfrage organisiert werden.
                  </Body>
                </div>
                <div>
                  <H3 className="mb-3">VIP & Concierge Service</H3>
                  <Body className="opacity-80">
                    Für Sammler, professionelle Fotografen und besondere Gäste bieten wir maßgeschneiderte Programme an. Unser Concierge-Team organisiert Helikoptertransfers vom Flughafen Frankfurt, private Besichtigungen außerhalb der regulären Öffnungszeiten und exklusive Termine im Customer Care.
                  </Body>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative h-[600px]">
              <ImgPlaceholder fill src="/images/leica_customercare.jpg" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. Arrival Logistics */}
      <section className="bg-leica-light py-32 px-6 md:px-10 border-t border-leica-border">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <Eyebrow>Anreise</Eyebrow>
              <H2 className="mt-4">Wege in die Leica Welt</H2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-10 border border-leica-border h-full flex flex-col">
                <div className="w-12 h-12 rounded-full border border-leica-border flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                    <circle cx="7" cy="17" r="2"/>
                    <path d="M9 17h6"/>
                    <circle cx="17" cy="17" r="2"/>
                  </svg>
                </div>
                <H3 className="mb-4">Auto & Parking</H3>
                <Body className="opacity-80 mb-6 flex-grow">
                  Über die A45 (Ausfahrt Wetzlar-Süd). Folgen Sie der Beschilderung "Leitz-Park". Auf dem Gelände stehen 300 kostenfreie Parkplätze zur Verfügung. Zudem bieten wir 16 Tesla Supercharger (V3) und 8 universelle Typ2 Ladesäulen für Elektrofahrzeuge.
                </Body>
                <div>
                  <Button variant="outline" color="dark" href="https://maps.google.com" target="_blank">Google Maps Route</Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-10 border border-leica-border h-full flex flex-col">
                <div className="w-12 h-12 rounded-full border border-leica-border flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                    <line x1="4" y1="22" x2="4" y2="15"/>
                  </svg>
                </div>
                <H3 className="mb-4">Öffentlicher Nahverkehr</H3>
                <Body className="opacity-80 flex-grow">
                  Der Bahnhof Wetzlar ist ICE und RE Haltepunkt. Von dort aus erreichen Sie den Leitz-Park direkt mit der Stadtbus-Linie 11 (Richtung Gießen). Die Fahrtzeit beträgt ca. 15 Minuten. Die Haltestelle "Leitz-Park" befindet sich unmittelbar vor dem Hauptgebäude.
                </Body>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white p-10 border border-leica-border h-full flex flex-col">
                <div className="w-12 h-12 rounded-full border border-leica-border flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6 7.4 3-2.6 2.6-4.5-1.5-1.5 1.5L4.5 21l4.8-3.2 1.5-1.5 2.6-2.6 3 7.4 3.6-1.2c.5-.2.8-.6.7-1.1z"/>
                  </svg>
                </div>
                <H3 className="mb-4">Flugzeug & VIP</H3>
                <Body className="opacity-80 flex-grow">
                  Der nächstgelegene internationale Flughafen ist Frankfurt am Main (FRA), ca. 45 Fahrminuten entfernt. Für private Flugzeuge steht der Flugplatz Siegerland zur Verfügung. Ein Helikopterlandeplatz (Heliport Wetzlar) befindet sich in unmittelbarer Nähe zum Leitz-Park.
                </Body>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Eyebrow>Häufig gestellte Fragen</Eyebrow>
              <H2 className="mt-4">Wissenswertes</H2>
            </div>
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Downloads & Contact */}
      <section className="py-24 px-6 md:px-10 bg-leica-dark text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <H2 className="text-white mb-8">Planen Sie Ihren Besuch</H2>
            <Body onDark className="mb-10 max-w-2xl mx-auto opacity-80">
              Laden Sie sich unseren aktuellen Campus-Plan herunter oder werfen Sie einen Blick in das aktuelle Ausstellungsprogramm. Unser Customer Care Team steht Ihnen bei weiteren Fragen gerne zur Verfügung.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" color="white" href="#">Campus-Plan PDF (2MB)</Button>
              <Button variant="outline" color="white" href="/kontakt">Customer Care kontaktieren</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
