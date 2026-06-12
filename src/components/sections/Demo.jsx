import React from 'react';
import { MousePointerClick, Sparkles } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';
import LandingGlobe from '../LandingGlobe';
import { DEMO_COUNTRIES } from '../../data/mapData';

const CARDS = [
  { demo: 'marrakech', flag: '🇲🇦', name: 'Marrakech', sub: '4 días · low-cost', price: '~550€', color: 'from-amber-500/10 to-yellow-500/10' },
  { demo: 'bangkok', flag: '🇹🇭', name: 'Bangkok', sub: '5 días · exótico', price: '~560€', color: 'from-violet-500/10 to-purple-500/10' },
  { demo: 'cancun', flag: '🇲🇽', name: 'Cancún', sub: '5 días · playa', price: '~1.500€', color: 'from-teal-500/10 to-cyan-500/10' },
  { demo: 'roma', flag: '🇮🇹', name: 'Roma', sub: '5 días · cultural', price: '~1.800€', color: 'from-red-500/10 to-orange-500/10' },
  { demo: 'tokio', flag: '🇯🇵', name: 'Tokio', sub: '7 días · cultural', price: '~2.400€', color: 'from-pink-500/10 to-rose-500/10' },
  { demo: 'islandia', flag: '🇮🇸', name: 'Islandia', sub: '6 días · naturaleza', price: '~4.700€', color: 'from-sky-500/10 to-blue-500/10' },
];

export default function Demo({ onCountrySelect }) {
  return (
    <section id="demo" className="py-24 bg-ink relative overflow-hidden">
      {/* Glow ambiental */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-5 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/15 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Demo en vivo
          </span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-cream tracking-tight">
            Pruébalo tú mismo
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            Gira el globo y toca un punto dorado, o elige un destino abajo. Verás un itinerario completo
            generado al instante. <span className="text-primary font-semibold">Sin registro, sin IA de pago, sin esperas.</span>
          </p>
        </Reveal>

        {/* Globo central */}
        <Reveal delay={0.1} className="flex justify-center mb-12">
          <div className="relative">
            <LandingGlobe size={400} onCountrySelect={onCountrySelect} />
          </div>
        </Reveal>

        {/* Pista */}
        <Reveal className="flex items-center justify-center gap-2 text-cream/50 text-sm mb-8">
          <MousePointerClick className="w-4 h-4" />
          Elige un destino para ver el itinerario completo
        </Reveal>

        {/* Tarjetas de destinos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {CARDS.map((c, i) => (
            <Reveal key={c.demo} delay={i * 0.06}>
              <button
                onClick={() => onCountrySelect(c.demo)}
                className={`w-full text-left bg-gradient-to-br ${c.color} bg-ink-soft border border-white/10 rounded-2xl p-4 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{c.flag}</span>
                  <span className="text-xs font-bold text-primary">{c.price}</span>
                </div>
                <p className="font-display font-bold text-cream">{c.name}</p>
                <p className="text-[11px] text-cream/50">{c.sub}</p>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-primary/80 group-hover:text-primary">
                  Ver itinerario →
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
