import React from 'react';
import { Check, Rocket } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';

// EDITA estos hitos con tu realidad
const DONE = [
  'MVP 100% funcional: app completa en producción',
  'Motor de itinerarios propio (datos veraces de 196 países)',
  'Globo 3D interactivo, pasaporte digital y red social',
  'Sistema de inclusividad médica (alergias, vacunas, dietas)',
];

const ROADMAP = [
  { q: 'Ahora', items: ['Beta cerrada con early adopters', 'Pulido de UX y onboarding'], active: true },
  { q: 'Q3 2026', items: ['Lanzamiento público', 'Primeras integraciones de afiliación'] },
  { q: 'Q4 2026', items: ['10.000 usuarios', 'App Store + Google Play'] },
  { q: '2027', items: ['Premium y partnerships B2B', 'Expansión LatAm'] },
];

export default function Traction() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-cream-deep/40">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag><Rocket className="w-3.5 h-3.5" /> Tracción & roadmap</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            No es una idea. Ya está construido.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            El producto existe y funciona hoy. La ronda es para crecer, no para empezar de cero.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ya construido */}
          <Reveal>
            <div className="bg-white rounded-3xl border border-cream-deep p-8 h-full">
              <h3 className="font-display font-bold text-xl text-ink mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check className="w-4 h-4" /></span>
                Ya conseguido
              </h3>
              <ul className="space-y-3.5">
                {DONE.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/80">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Roadmap */}
          <Reveal delay={0.15}>
            <div className="bg-white rounded-3xl border border-cream-deep p-8 h-full">
              <h3 className="font-display font-bold text-xl text-ink mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary/15 text-primary-dark flex items-center justify-center"><Rocket className="w-4 h-4" /></span>
                Hacia dónde vamos
              </h3>
              <div className="relative pl-6">
                <div className="absolute left-[7px] top-1 bottom-1 w-0.5 bg-cream-deep" />
                {ROADMAP.map((r, i) => (
                  <div key={i} className="relative mb-5 last:mb-0">
                    <div className={`absolute -left-[1.35rem] top-0.5 w-3.5 h-3.5 rounded-full border-2 ${r.active ? 'bg-primary border-primary animate-pulse' : 'bg-white border-cream-deep'}`} />
                    <p className={`text-sm font-bold ${r.active ? 'text-primary-dark' : 'text-ink'}`}>{r.q}</p>
                    <ul className="mt-1 space-y-0.5">
                      {r.items.map((it, j) => <li key={j} className="text-xs text-ink/55">· {it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
