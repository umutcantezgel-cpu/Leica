import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { NewsletterStrip } from "@/components/ui/NewsletterStrip";
import { EXPERIENCES } from "@/lib/constants";

export default function ErlebnissePage() {
  return (
    <>
      <PageHero eyebrow="Erlebnisse" title="Leica hautnah erleben" subtitle="Museum, Manufaktur, Touren, Workshops und exklusive Erlebnispakete — alles an einem Ort." />

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {EXPERIENCES.map((exp, i) => (
            <AnimatedSection key={exp.title} delay={i * 0.08}>
              <Card title={exp.title} subtitle={exp.subtitle} href={exp.href} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <NewsletterStrip />
    </>
  );
}
