"use client";

import { useForm } from "react-hook-form";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Body, Eyebrow, H2, H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ROOMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LocationForm {
  name: string;
  email: string;
  date: string;
  guests: string;
  location: string;
  message: string;
}

export default function LocationBuchenPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<LocationForm>();

  const onSubmit = (data: LocationForm) => {
    console.log(data);
  };

  return (
    <>
      <PageHero eyebrow="Events" title="Location buchen" subtitle="Einzigartige Räumlichkeiten für Ihre Veranstaltungen im Leitz-Park." imageLabel="Event Location" />

      {/* USP Section */}
      <section className="bg-leica-light py-16 px-6 md:px-10 border-b border-leica-border">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { t: "Flexible Räume", d: "Für 10 bis 500 Personen." },
            { t: "Premium Catering", d: "Durch das Oskar's Restaurant." },
            { t: "Inspirierende Atmosphäre", d: "Umgeben von Fotografie-Kunst." }
          ].map((usp, i) => (
            <AnimatedSection key={usp.t} delay={i * 0.1}>
              <div className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-leica-red mt-2.5" />
                <div>
                  <H3>{usp.t}</H3>
                  <Body size="sm" className="mt-2">{usp.d}</Body>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <AnimatedSection>
            <div className="mb-12">
              <Eyebrow>Räumlichkeiten</Eyebrow>
              <H2>Unsere Locations</H2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {ROOMS.map((room, i) => (
              <AnimatedSection key={room.title} delay={i * 0.1}>
                <div className="border border-leica-border p-8 h-full">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-leica-red font-heading font-semibold mb-3">{room.capacity}</p>
                  <H3>{room.title}</H3>
                  <Body className="mt-4">{room.description}</Body>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-leica-dark py-20 px-6 md:px-10" id="anfrage">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Eyebrow onDark>Unverbindlich</Eyebrow>
              <H2 onDark>Event anfragen</H2>
            </div>

            {isSubmitSuccessful ? (
              <div className="bg-white/5 border border-leica-red p-10 text-center">
                <H3 onDark className="mb-4">Vielen Dank für Ihre Anfrage</H3>
                <Body onDark>Wir werden uns umgehend mit Ihnen in Verbindung setzen, um die Details für Ihr Event zu besprechen.</Body>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("name", { required: "Name ist erforderlich" })}
                      placeholder="Name / Firma"
                      className={cn("w-full bg-white/5 border px-5 py-4 text-white font-body outline-none focus:border-white transition-colors", errors.name ? "border-leica-red" : "border-white/[0.15]")}
                    />
                    {errors.name && <p className="text-leica-red text-xs mt-2">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register("email", { 
                        required: "E-Mail ist erforderlich",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ungültige E-Mail" }
                      })}
                      placeholder="E-Mail"
                      className={cn("w-full bg-white/5 border px-5 py-4 text-white font-body outline-none focus:border-white transition-colors", errors.email ? "border-leica-red" : "border-white/[0.15]")}
                    />
                    {errors.email && <p className="text-leica-red text-xs mt-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <input
                      {...register("date", { required: "Datum ist erforderlich" })}
                      placeholder="Wunschdatum"
                      type="date"
                      className={cn("w-full bg-white/5 border px-5 py-4 text-white/50 font-body outline-none focus:border-white transition-colors", errors.date ? "border-leica-red" : "border-white/[0.15]")}
                    />
                    {errors.date && <p className="text-leica-red text-xs mt-2">{errors.date.message}</p>}
                  </div>
                  <div className="md:col-span-1">
                    <input
                      {...register("guests", { required: "Personenzahl ist erforderlich" })}
                      placeholder="Personenzahl"
                      type="number"
                      className={cn("w-full bg-white/5 border px-5 py-4 text-white font-body outline-none focus:border-white transition-colors", errors.guests ? "border-leica-red" : "border-white/[0.15]")}
                    />
                    {errors.guests && <p className="text-leica-red text-xs mt-2">{errors.guests.message}</p>}
                  </div>
                  <div className="md:col-span-1">
                    <select
                      {...register("location", { required: "Bitte wählen Sie eine Location" })}
                      className={cn("w-full bg-white/5 border px-5 py-4 text-white/50 font-body outline-none focus:border-white transition-colors appearance-none", errors.location ? "border-leica-red" : "border-white/[0.15]")}
                    >
                      <option value="" disabled selected>Location wählen</option>
                      {ROOMS.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                      <option value="Andere/Unbekannt">Noch offen</option>
                    </select>
                    {errors.location && <p className="text-leica-red text-xs mt-2">{errors.location.message}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Art des Events & zusätzliche Wünsche"
                    rows={4}
                    className="w-full bg-white/5 border border-white/[0.15] px-5 py-4 text-white font-body outline-none focus:border-white transition-colors resize-y"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" variant="filled">Anfrage senden</Button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
