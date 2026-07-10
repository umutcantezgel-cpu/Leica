"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eyebrow, H2 } from "./Typography";

interface NewsletterForm {
  email: string;
}

export function NewsletterStrip() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterForm>();

  const onSubmit = () => {
    setSent(true);
  };

  return (
    <section className="bg-leica-light py-20 px-6 md:px-10 border-t border-leica-border">
      <div className="max-w-[640px] mx-auto text-center">
        <Eyebrow>Newsletter</Eyebrow>
        <H2>Bleiben Sie auf dem Laufenden</H2>
        <p className="text-leica-gray mt-4 mb-8 font-body text-[15px] leading-[1.65]">
          Neuigkeiten zu Ausstellungen, Veranstaltungen und exklusiven Angeboten — direkt in Ihr Postfach.
        </p>
        {sent ? (
          <p className="text-leica-red font-heading text-base tracking-[0.05em]">
            Vielen Dank für Ihre Anmeldung.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-0 max-w-[460px] mx-auto">
            <input
              {...register("email", {
                required: "E-Mail ist erforderlich",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ungültige E-Mail" },
              })}
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-[18px] py-3.5 border border-r-0 border-[#D8D8D8] bg-white text-leica-dark font-body text-sm outline-none focus:border-leica-red transition-colors"
              aria-label="E-Mail-Adresse für Newsletter"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-leica-red text-white border-none cursor-pointer font-heading text-[11px] tracking-[0.15em] uppercase font-semibold whitespace-nowrap hover:bg-[#b50015] transition-colors"
            >
              Anmelden
            </button>
          </form>
        )}
        {errors.email && (
          <p className="text-leica-red text-xs mt-2 font-body">{errors.email.message}</p>
        )}
      </div>
    </section>
  );
}
