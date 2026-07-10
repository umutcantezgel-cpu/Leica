import { HeroSlider } from "@/components/ui/HeroSlider";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { StatStrip } from "@/components/ui/StatStrip";
import { NewsletterStrip } from "@/components/ui/NewsletterStrip";
import { Button } from "@/components/ui/Button";
import { Eyebrow, H2, Body } from "@/components/ui/Typography";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { HERO_SLIDES, HOME_STATS, EXHIBITIONS, EXPERIENCES, HOME_EVENTS } from "@/lib/constants";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* Quick Nav Strip */}
      <section className="bg-white border-b border-leica-border overflow-x-auto">
        <div className="max-w-[1320px] mx-auto flex justify-center">
          {["Museum", "Manufaktur", "Ausstellungen", "Shops", "Hotel", "Gastronomie"].map((item) => (
            <Link
              key={item}
              href="#"
              className="px-6 py-4 font-heading text-[10px] tracking-[0.16em] uppercase text-leica-gray hover:text-leica-red hover:bg-leica-light transition-all duration-200 whitespace-nowrap no-underline"
            >
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <Eyebrow>Ausstellungen</Eyebrow>
                <H2>Aktuelle Ausstellungen</H2>
              </div>
              <Button href="/ausstellungen" variant="outline" color="dark" className="mt-4 md:mt-0">Alle Ausstellungen</Button>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {EXHIBITIONS.slice(0, 3).map((ex, i) => (
              <AnimatedSection key={ex.id} delay={i * 0.1}>
                <Card
                  title={ex.title}
                  tag={ex.tag}
                  subtitle={`${ex.dateRange} · ${ex.location}`}
                  href="/ausstellungen"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection>
        <StatStrip stats={HOME_STATS} />
      </AnimatedSection>

      {/* Experiences Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <Eyebrow>Erlebnisse</Eyebrow>
                <H2>Leica hautnah erleben</H2>
              </div>
              <Button href="/erlebnisse" variant="outline" color="dark" className="mt-4 md:mt-0">Alle Erlebnisse</Button>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {EXPERIENCES.slice(0, 3).map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <Card title={exp.title} subtitle={exp.subtitle} href={exp.href} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="bg-leica-dark py-20 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <Eyebrow onDark>Veranstaltungen</Eyebrow>
                <H2 onDark>Kommende Events</H2>
              </div>
              <Button href="/veranstaltungen" variant="outline" color="white" className="mt-4 md:mt-0">Alle Veranstaltungen</Button>
            </div>
          </AnimatedSection>
          <div className="space-y-0">
            {HOME_EVENTS.map((ev, i) => (
              <AnimatedSection key={ev.title} delay={i * 0.08}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-6 border-b border-white/[0.08] items-start md:items-center">
                  <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-leica-red w-[140px] flex-shrink-0">{ev.date}</p>
                  <h3 className="font-heading text-[clamp(20px,2vw,26px)] font-light text-white flex-1">{ev.title}</h3>
                  <span className="px-2.5 py-1 bg-white/[0.06] text-white/50 text-[10px] tracking-[0.15em] uppercase font-heading">{ev.type}</span>
                  <Body onDark size="sm">{ev.time}</Body>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Teaser */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ImgPlaceholder aspect="4/3" label="Erlebnispakete Collage" src="/images/leica_erlebnispakete.jpg" />
              <div>
                <Eyebrow>Erlebnispakete</Eyebrow>
                <H2>MAX · ELSIE · OSKAR</H2>
                <Body className="mt-5 mb-8 max-w-[480px]">
                  Komplett-Erlebnisse für einen oder mehrere Tage: vom Museumseintritt über Führungen und Workshops bis zu Hotelübernachtung — alles aus einem Guss.
                </Body>
                <Button href="/erlebnisse/erlebnispakete">Pakete entdecken</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterStrip />
    </>
  );
}
