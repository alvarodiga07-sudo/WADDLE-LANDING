import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';
import Counter from '../Counter';

// Hacia dónde podría ir una inversión (informativo, no una demanda)
const ALLOCATION = [
  { label: 'Producto y tecnología', pct: 40, color: '#eab308', desc: 'Apps nativas iOS/Android, motor propio, escalado.' },
  { label: 'Marketing y comunidad', pct: 30, color: '#0f1117', desc: 'Creadores de contenido, growth y posicionamiento.' },
  { label: 'Equipo', pct: 20, color: '#5c3d11', desc: 'Primeras incorporaciones clave.' },
  { label: 'Operaciones y legal', pct: 10, color: '#a8a29e', desc: 'Partnerships, runway y constitución.' },
];

// Proyección basada en un ARPU conservador (~6-7€/usuario/año)
const PROJECTION = [
  { year: 'Año 1', users: '10K', rev: '~60K€', note: 'Beta → lanzamiento' },
  { year: 'Año 2', users: '100K', rev: '~650K€', note: 'Crecimiento orgánico' },
  { year: 'Año 3', users: '500K', rev: '~3,5M€', note: 'Premium + B2B maduros' },
];

// Cómo se construye el ARPU (para que las cifras estén fundamentadas)
const UNIT_ECONOMICS = [
  { label: 'Comisión media por reserva', value: '4-25%', sub: 'Booking, Skyscanner, GetYourGuide' },
  { label: 'Conversión a Premium', value: '3-4%', sub: 'media del sector freemium' },
  { label: 'Ingreso medio por usuario/año', value: '~6-7€', sub: 'afiliación + premium combinados' },
];

export default function Investment() {
  return (
    <section id="ronda" className="py-24 bg-ink relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[130px]" />
      <div className="max-w-6xl mx-auto px-5 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/15 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> La oportunidad
          </span>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-cream tracking-tight">
            Un producto listo.<br />Un mercado enorme.
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            Waddle ya funciona. La gran palanca ahora es el crecimiento. Si te apasiona el sector y quieres
            acompañarnos en esta etapa, estos son los números que dibujan el potencial.
          </p>
        </Reveal>

        {/* Proyección de crecimiento */}
        <Reveal className="mb-8">
          <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto">
            {PROJECTION.map((p, i) => (
              <div key={i} className={`rounded-3xl p-5 md:p-6 text-center ${i === 2 ? 'bg-primary text-ink' : 'bg-ink-soft text-cream'}`}>
                <p className={`text-[11px] font-bold uppercase tracking-widest ${i === 2 ? 'text-ink/60' : 'text-cream/40'}`}>{p.year}</p>
                <p className="font-display font-extrabold text-2xl md:text-3xl my-1.5">{p.users}</p>
                <p className={`text-[11px] font-semibold ${i === 2 ? 'text-ink/70' : 'text-cream/50'}`}>usuarios</p>
                <div className={`mt-3 pt-3 border-t ${i === 2 ? 'border-ink/15' : 'border-white/10'}`}>
                  <p className={`text-sm font-bold ${i === 2 ? 'text-ink' : 'text-primary'}`}>{p.rev}</p>
                  <p className={`text-[10px] ${i === 2 ? 'text-ink/60' : 'text-cream/40'}`}>{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* De dónde salen esas cifras — unit economics */}
        <Reveal className="mb-14">
          <div className="bg-ink-soft rounded-2xl border border-white/5 p-5 max-w-3xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-cream/40 text-center mb-4">Cómo se calculan estas cifras</p>
            <div className="grid grid-cols-3 gap-3">
              {UNIT_ECONOMICS.map((u, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-extrabold text-xl text-primary">{u.value}</p>
                  <p className="text-[11px] font-semibold text-cream/70 mt-0.5 leading-tight">{u.label}</p>
                  <p className="text-[9px] text-cream/35 mt-0.5">{u.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] text-cream/30 mt-4 leading-relaxed">
              Ejemplo: 500.000 usuarios × ~7€ de ingreso medio anual ≈ 3,5M€. Cifras conservadoras y orientativas,
              sujetas a ejecución y captación. No constituyen una garantía de resultados.
            </p>
          </div>
        </Reveal>

        {/* En qué se invertiría para crecer */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal className="flex justify-center">
            <Donut data={ALLOCATION} />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> En qué se enfocaría el crecimiento
            </p>
            <div className="space-y-4">
              {ALLOCATION.map((a, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-md mt-1 flex-shrink-0" style={{ background: a.color === '#0f1117' ? '#fff' : a.color }} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-cream">{a.label}</p>
                      <p className="font-display font-extrabold text-primary">{a.pct}%</p>
                    </div>
                    <p className="text-sm text-cream/50">{a.desc}</p>
                    <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.color === '#0f1117' ? '#fff' : a.color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-cream/40 mt-6 leading-relaxed">
              Sin prisa ni presión: esto es una conversación, no una subasta. Si la visión te encaja,
              <span className="text-primary font-semibold"> hablemos con calma</span>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Donut({ data }) {
  const size = 220, stroke = 34, r = (size - stroke) / 2, circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {data.map((d, i) => {
          const len = (d.pct / 100) * circ;
          const seg = (
            <circle
              key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke={d.color === '#0f1117' ? '#3a3f4d' : d.color}
              strokeWidth={stroke}
              strokeDasharray={`${len} ${circ - len}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return seg;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-cream/40">Enfoque</p>
        <p className="font-display font-extrabold text-xl text-cream">Crecimiento</p>
      </div>
    </div>
  );
}
