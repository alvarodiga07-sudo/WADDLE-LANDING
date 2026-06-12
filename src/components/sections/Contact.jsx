import React from 'react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import { BRAND } from '../../data/brand';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 mesh-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #5c3d11 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-3xl mx-auto px-5 text-center relative">
        <Reveal>
          <img src={BRAND.logo} alt="Waddle" className="w-16 h-16 rounded-2xl mx-auto mb-6 shadow-lg" />
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            Construyamos el futuro<br />de los viajes juntos
          </h2>
          <p className="mt-5 text-lg text-ink/60 max-w-xl mx-auto">
            Si crees en un mundo donde viajar es accesible, personal y para toda la vida,
            hablemos. Te enseño el producto en vivo y te cuento la visión completa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`mailto:${BRAND.email}?subject=Hablemos de Waddle`} className="group inline-flex items-center justify-center gap-2 bg-ink text-cream font-bold px-7 py-4 rounded-2xl hover:bg-ink-soft transition shadow-xl">
              <Mail className="w-5 h-5" /> {BRAND.email}
            </a>
            {BRAND.calendly && (
              <a href={BRAND.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-ink font-bold px-7 py-4 rounded-2xl hover:bg-accent transition shadow-lg">
                <Calendar className="w-5 h-5" /> Agendar reunión <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="mt-8 text-sm text-ink/40">
            Waddle · El planificador de viajes inclusivo, social y para toda la vida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img src={BRAND.logo} alt="Waddle" className="w-8 h-8 rounded-lg" />
          <span className="font-display font-bold text-cream">Waddle</span>
        </div>
        <p className="text-xs text-cream/40">© 2026 Waddle · Viaja a tu manera · Hecho con ❤️ para viajeros</p>
      </div>
    </footer>
  );
}
