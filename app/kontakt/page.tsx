"use client";

import { useForm } from "react-hook-form";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection as Reveal } from "@/components/ui/AnimatedSection";
import { Body, Eyebrow, H2 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface KontaktForm {
  anrede: string;
  vorname: string;
  nachname: string;
  email: string;
  betreff: string;
  nachricht: string;
}

export default function KontaktPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<KontaktForm>();

  const onSubmit = (data: KontaktForm) => {
    console.log(data);
  };

  return (
    <>
      <PageHero eyebrow="Leica Welt" title="Kontakt" imageLabel="Leica Welt Kontakt" height="40vh" />
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <Reveal>
              <Eyebrow>Schreiben Sie uns</Eyebrow>
              <H2>Wie können wir helfen?</H2>
            </Reveal>
            <div className="mt-10">
              {isSubmitSuccessful ? (
                <div className="p-12 bg-leica-light border border-leica-border text-center">
                  <div className="w-12 h-12 bg-leica-red rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <p className="font-heading text-xl font-light">Vielen Dank!</p>
                  <p className="font-body text-gray-500 mt-2.5">Wir antworten innerhalb von 2 Werktagen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                  <div>
                    <label className="font-heading text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-1.5">Anrede</label>
                    <select
                      {...register("anrede")}
                      className="w-full p-3 border border-[#D8D8D8] bg-white font-body text-sm text-[#1A1A1A] outline-none focus:border-leica-red transition-colors appearance-none"
                    >
                      <option value="">Bitte wählen</option>
                      {["Herr", "Frau", "Divers", "Keine Angabe"].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="font-heading text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-1.5">Vorname</label>
                      <input
                        {...register("vorname", { required: "Vorname ist erforderlich" })}
                        className={cn("w-full p-3 border bg-white font-body text-sm text-[#1A1A1A] outline-none focus:border-leica-red transition-colors", errors.vorname ? "border-leica-red" : "border-[#D8D8D8]")}
                      />
                    </div>
                    <div>
                      <label className="font-heading text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-1.5">Nachname</label>
                      <input
                        {...register("nachname", { required: "Nachname ist erforderlich" })}
                        className={cn("w-full p-3 border bg-white font-body text-sm text-[#1A1A1A] outline-none focus:border-leica-red transition-colors", errors.nachname ? "border-leica-red" : "border-[#D8D8D8]")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-heading text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-1.5">E-Mail</label>
                    <input
                      {...register("email", { 
                        required: "E-Mail ist erforderlich",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ungültige E-Mail" }
                      })}
                      className={cn("w-full p-3 border bg-white font-body text-sm text-[#1A1A1A] outline-none focus:border-leica-red transition-colors", errors.email ? "border-leica-red" : "border-[#D8D8D8]")}
                    />
                  </div>
                  <div>
                    <label className="font-heading text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-1.5">Betreff</label>
                    <input
                      {...register("betreff", { required: "Betreff ist erforderlich" })}
                      className={cn("w-full p-3 border bg-white font-body text-sm text-[#1A1A1A] outline-none focus:border-leica-red transition-colors", errors.betreff ? "border-leica-red" : "border-[#D8D8D8]")}
                    />
                  </div>
                  <div>
                    <label className="font-heading text-[10px] tracking-[0.15em] uppercase text-gray-500 block mb-1.5">Nachricht</label>
                    <textarea
                      {...register("nachricht", { required: "Nachricht ist erforderlich" })}
                      rows={5}
                      className={cn("w-full p-3 border bg-white font-body text-sm text-[#1A1A1A] outline-none focus:border-leica-red transition-colors resize-y", errors.nachricht ? "border-leica-red" : "border-[#D8D8D8]")}
                    />
                  </div>
                  <div className="mt-2">
                    <Button type="submit" variant="filled">Nachricht senden</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="flex flex-col">
              {[
                { title: "Adresse", lines: ["Am Leitz-Park 6", "35578 Wetzlar", "Deutschland"] },
                { title: "Telefon (Mo–Fr)", lines: ["06441-2080-119"] },
                { title: "Telefon (Sa & Feiertage)", lines: ["06441-2080-0"] },
                { title: "E-Mail", lines: ["info@leica-welt.com"] },
                { title: "Öffnungszeiten", lines: ["Mo. – Fr.: 10:00 – 17:00 Uhr", "Sa., So. & Feiertage: 10:00 – 18:00 Uhr"] },
              ].map(c => (
                <div key={c.title} className="border-t border-leica-border py-5">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-leica-red font-heading font-bold mb-2.5">{c.title}</p>
                  {c.lines.map(l => <Body key={l} size="sm" className="mb-1">{l}</Body>)}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
