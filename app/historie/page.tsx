import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";

const MILESTONES = [
  {
    year: "1914",
    title: "Die Ur-Leica",
    desc: "Oskar Barnack konstruiert den ersten Prototypen einer Kleinbildkamera, die 'Ur-Leica'. Der Beginn einer Revolution in der Fotografie: 'Kleinbild-Negativ, großes Bild'.",
    image: "/images/leica_history_ur.jpg"
  },
  {
    year: "1954",
    title: "Die Leica M3",
    desc: "Leica präsentiert das M-System mit der legendären Leica M3. Das Messsuchersystem mit Bajonettanschluss setzt neue Maßstäbe und wird zum Werkzeug der bedeutendsten Fotografen der Welt.",
    image: "/images/leica_history_m3.jpg"
  },
  {
    year: "2014",
    title: "100 Jahre Leica Fotografie",
    desc: "Leica feiert 100 Jahre Fotografie und eröffnet den neuen Leitz-Park in Wetzlar, eine hochmoderne Manufaktur und ein Erlebniszentrum für Fotografiebegeisterte aus aller Welt."
  }
];

export default function HistoriePage() {
  return (
    <>
      <PageHero
        eyebrow="Historie"
        title="Meilensteine der Leica Geschichte"
        subtitle="Entdecken Sie die Kameras und Innovationen, die die Welt der Fotografie nachhaltig geprägt haben."
        imageLabel="Leica Historie"
        image="/images/leica_history_ur.jpg"
      />

      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1000px] mx-auto">
          {MILESTONES.map((milestone, index) => (
            <AnimatedSection key={milestone.year} delay={0.1 * index}>
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-24 last:mb-0 items-start">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="sticky top-24">
                    <h2 className="text-[120px] font-heading font-light text-leica-red leading-none tracking-tighter mb-4 opacity-20">
                      {milestone.year}
                    </h2>
                    <H3>{milestone.title}</H3>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 mt-4 md:mt-20">
                  <Body className="mb-10 text-[18px] leading-relaxed">
                    {milestone.desc}
                  </Body>
                  {milestone.image && (
                    <ImgPlaceholder
                      aspect="3/2"
                      label={milestone.title}
                      src={milestone.image}
                      className="shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
