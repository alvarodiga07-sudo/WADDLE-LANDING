import React from 'react';
import { TrendingUp, Globe2, Users2, Smartphone } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';
import Counter from '../Counter';

export default function Market() {
  return (
    <section id="mercado" className="py-24 bg-gradient-to-b from-cream-deep/40 to-cream">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag>El mercado</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            Un océano azul de 1,4 billones €
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            El turismo es uno de los mayores mercados del mundo y crece imparable tras la pandemia.
            La nueva generación quiere experiencias personales, no paquetes genéricos.
          </p>
        </Reveal>

        {/* TAM / SAM / SOM */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          <Reveal delay={0}>
            <MarketCard label="TAM · Mercado total" value="1,4 B€" desc="Gasto global anual en turismo (OMT). Crece ~5% al año." color="bg-ink text-cream" big />
          </Reveal>
          <Reveal delay={0.1}>
            <MarketCard label="SAM · Mercado accesible" value="68 B€" desc="Planificación de viajes digital y apps de viaje en Europa + LatAm." color="bg-white text-ink border border-cream-deep" />
          </Reveal>
          <Reveal delay={0.2}>
            <MarketCard label="SOM · Objetivo 3 años" value="120 M€" desc="Cuota realista capturando viajeros millennial y Gen Z hispanohablantes." color="bg-primary text-ink" />
          </Reveal>
        </div>

        {/* Stats animados */}
        <Reveal>
          <div className="bg-white rounded-3xl border border-cream-deep p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat icon={<Globe2 />} value={1400} suffix="M" label="Viajeros internacionales/año" />
            <Stat icon={<Smartphone />} value={76} suffix="%" label="Planifican el viaje desde el móvil" />
            <Stat icon={<Users2 />} value={68} suffix="%" label="Gen Z prioriza experiencias únicas" />
            <Stat icon={<TrendingUp />} value={11} suffix="%" label="Crecimiento anual del turismo digital" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MarketCard({ label, value, desc, color, big }) {
  return (
    <div className={`h-full rounded-3xl p-7 ${color} ${big ? 'md:scale-105' : ''}`}>
      <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">{label}</p>
      <p className="font-display font-extrabold text-4xl my-2">{value}</p>
      <p className="text-sm opacity-70 leading-relaxed">{desc}</p>
    </div>
  );
}

function Stat({ icon, value, suffix, label }) {
  return (
    <div className="text-center">
      <div className="w-11 h-11 rounded-2xl bg-primary/15 text-primary-dark flex items-center justify-center mx-auto mb-3">
        {React.cloneElement(icon, { className: 'w-5 h-5' })}
      </div>
      <p className="font-display font-extrabold text-3xl text-ink">
        <Counter to={value} suffix={suffix} />
      </p>
      <p className="text-xs text-ink/55 mt-1 leading-tight">{label}</p>
    </div>
  );
}
