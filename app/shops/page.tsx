import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImgPlaceholder } from "@/components/ui/ImgPlaceholder";
import { OpeningHours } from "@/components/ui/OpeningHours";
import { Body, Eyebrow, H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SHOPS } from "@/lib/constants";

export default function ShopsPage() {
  return (
    <>
      <PageHero eyebrow="Shopping" title="Shops &amp; Stores" subtitle="Kameras, Literatur, limitierte Editionen und Sammlerstücke entdecken." imageLabel="Leica Store Wetzlar" />

      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {SHOPS.map((shop, i) => (
            <AnimatedSection key={shop.title} delay={i * 0.1}>
              <div className="border border-leica-border h-full flex flex-col group">
                <div className="overflow-hidden relative">
                  <ImgPlaceholder aspect="3/2" label={shop.title} src="/images/leica_store.jpg" className="group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-leica-red text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 font-heading font-semibold">
                    {shop.tag}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <H3>{shop.title}</H3>
                  <Body className="mt-4 mb-8 flex-1">{shop.description}</Body>
                  <OpeningHours hours={shop.hours} />
                  {shop.href && (
                    <div className="mt-8">
                      <Button href={shop.href}>Mehr erfahren</Button>
                    </div>
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
