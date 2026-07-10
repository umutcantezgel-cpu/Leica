import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";

const PHOTOGRAPHERS = [
  {
    name: "Henri Cartier-Bresson",
    era: "1908 – 2004",
    desc: "Der Meister des 'entscheidenden Augenblicks'. Cartier-Bresson prägte die Straßenfotografie und den Fotojournalismus des 20. Jahrhunderts maßgeblich – fast ausschließlich mit seiner Leica.",
    image: "/images/leica_hof_hcb.jpg"
  },
  {
    name: "Sebastião Salgado",
    era: "Geboren 1944",
    desc: "Salgados epische Schwarz-Weiß-Aufnahmen dokumentieren die Verletzlichkeit unserer Welt. Für Projekte wie 'Genesis' verließ er sich oft auf die Zuverlässigkeit von Leica Kameras unter extremen Bedingungen.",
    image: "/images/leica_hof_salgado.jpg"
  },
  {
    name: "Elliott Erwitt",
    era: "1928 – 2023",
    desc: "Bekannt für seine humorvollen, oft ironischen Beobachtungen des Alltags. Erwitts Bilder zeigen, wie eine Leica in den richtigen Händen den feinen Witz menschlicher und tierischer Begegnungen einfangen kann.",
  }
];

export default function HallOfFamePage() {
  return (
    <>
      <PageHero
        eyebrow="Hall of Fame"
        title="Legenden der Leica Fotografie"
        subtitle="Entdecken Sie die Fotografen, die mit einer Leica die Weltgeschichte in unvergesslichen Bildern festgehalten haben."
        imageLabel="Leica Hall of Fame"
        image="/images/leica_hof_hcb.jpg"
      />

      <section className="py-24 px-6 md:px-10 bg-leica-light">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <Eyebrow>Inspiration</Eyebrow>
            <H2 className="mt-4 mb-6">Meisterwerke durch Meisterhände</H2>
            <Body>
              Die Leica Kamera war stets mehr als nur ein Werkzeug. Sie war ständiger Begleiter, das "dritte Auge" und oft die Verlängerung des Künstlers selbst. In unserer Hall of Fame würdigen wir jene Visionäre, die die Fotografie neu definiert haben.
            </Body>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {PHOTOGRAPHERS.map((photographer, index) => (
              <AnimatedSection key={photographer.name} delay={0.1 * index}>
                <div className="bg-white p-8 md:p-12 border border-leica-border h-full flex flex-col group">
                  <div className="mb-8 overflow-hidden">
                    {photographer.image ? (
                      <ImgPlaceholder
                        aspect="1/1"
                        label={photographer.name}
                        src={photographer.image}
                        className="group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-neutral-100 flex items-center justify-center">
                        <span className="text-neutral-300 font-heading tracking-widest uppercase text-sm">Portrait folgt</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-[12px] tracking-[0.15em] uppercase text-leica-red font-heading font-semibold mb-2">
                        {photographer.era}
                      </p>
                      <H3 className="mb-4">{photographer.name}</H3>
                      <Body>{photographer.desc}</Body>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
