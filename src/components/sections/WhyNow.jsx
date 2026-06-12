import React from 'react';
import { Zap, Coins, Megaphone, Crown, Plane, Hotel, Ticket, Sparkles, ArrowRight } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';

const REASONS = [
  { icon: <Zap className="w-5 h-5" />, title: 'La IA por fin es accesible', desc: 'Generar itinerarios de calidad ya no cuesta una fortuna. Waddle lo hace gratis y al instante con datos curados.' },
  { icon: <Megaphone className="w-5 h-5" />, title: 'El viajero quiere personalización', desc: 'Post-COVID, la gente huye de los paquetes genéricos. Buscan experiencias hechas a su medida.' },
  { icon: <Crown className="w-5 h-5" />, title: 'Nadie cubre la inclusividad', desc: 'Hay un hueco enorme: ninguna app ayuda a quien tiene alergias o condiciones médicas a viajar tranquilo.' },
];

// Cómo gana dinero Waddle — explicado en detalle
const REVENUE = [
  {
    icon: <Plane className="w-5 h-5" />,
    title: 'Comisión por reservas (afiliación)',
    tag: 'Ingreso principal',
    desc: 'Cuando el usuario reserva el vuelo, hotel o actividad que Waddle le recomienda, lo hace a través de nuestros enlaces a Booking, Skyscanner, GetYourGuide o Civitatis. Ellos nos pagan una comisión del 4% al 25% por cada reserva.',
    detail: 'El usuario paga lo mismo que pagaría directamente. Para él es gratis; para nosotros, ingreso recurrente.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Suscripción Premium (freemium)',
    tag: 'Recurrente',
    desc: 'La app es gratis y completa. Quien quiera más paga ~4,99€/mes por: itinerarios ilimitados, exportar a PDF, modo offline para el viaje, sin anuncios y vídeos en alta calidad.',
    detail: 'Conversión típica del sector: 3-5% de usuarios activos. Con base grande, ingreso muy estable.',
  },
  {
    icon: <Ticket className="w-5 h-5" />,
    title: 'Partnerships con marcas (B2B)',
    tag: 'Escalable',
    desc: 'Oficinas de turismo, aerolíneas y cadenas hoteleras pagan por aparecer de forma destacada ante viajeros con altísima intención de compra: justo cuando están planificando su viaje.',
    detail: 'Publicidad nativa de alto valor — el usuario ya está decidiendo dónde gastar.',
  },
];

export default function WhyNow() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        {/* Por qué ahora */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag>Por qué ahora</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            El momento perfecto
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {REASONS.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full bg-white rounded-3xl border border-cream-deep p-7">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary-dark flex items-center justify-center mb-4">{r.icon}</div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">{r.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modelo de negocio */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag><Coins className="w-3.5 h-3.5" /> Cómo gana dinero Waddle</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            Gratis para el usuario.<br />Rentable por diseño.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Waddle no cobra por planificar. Gana dinero <strong className="text-ink">cuando el usuario reserva</strong> lo
            que ya iba a reservar de todas formas — y de tres maneras que se refuerzan entre sí.
          </p>
        </Reveal>

        {/* Ejemplo concreto del flujo de dinero */}
        <Reveal className="mb-10">
          <div className="bg-ink rounded-3xl p-7 md:p-8 text-cream">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5 text-center">Un ejemplo real del flujo de ingresos</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 text-center">
              <FlowStep emoji="🧳" title="El usuario planifica" sub="Itinerario a Roma, gratis" />
              <ArrowRight className="w-5 h-5 text-cream/30 rotate-90 md:rotate-0 flex-shrink-0" />
              <FlowStep emoji="🏨" title="Reserva su hotel" sub="600€ vía enlace de Waddle" />
              <ArrowRight className="w-5 h-5 text-cream/30 rotate-90 md:rotate-0 flex-shrink-0" />
              <FlowStep emoji="💰" title="Waddle cobra comisión" sub="~15% = 90€" highlight />
            </div>
            <p className="text-center text-sm text-cream/50 mt-6 max-w-xl mx-auto">
              El usuario paga <strong className="text-cream">exactamente lo mismo</strong>. Un solo viajero que reserve
              vuelo + hotel + 2 actividades genera fácilmente <strong className="text-primary">120-200€</strong> de ingresos para Waddle.
            </p>
          </div>
        </Reveal>

        {/* 3 vías de ingreso detalladas */}
        <div className="grid md:grid-cols-3 gap-5">
          {REVENUE.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full bg-white rounded-3xl border border-cream-deep p-7 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary-dark flex items-center justify-center">{r.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary-dark bg-primary/10 px-2 py-1 rounded-full">{r.tag}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">{r.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{r.desc}</p>
                <p className="text-xs text-ink/45 leading-relaxed mt-3 pt-3 border-t border-cream-deep italic">{r.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ emoji, title, sub, highlight }) {
  return (
    <div className={`rounded-2xl px-5 py-4 ${highlight ? 'bg-primary text-ink' : 'bg-ink-soft'} min-w-[150px]`}>
      <div className="text-3xl mb-1">{emoji}</div>
      <p className={`text-sm font-bold ${highlight ? 'text-ink' : 'text-cream'}`}>{title}</p>
      <p className={`text-[11px] ${highlight ? 'text-ink/70' : 'text-cream/50'}`}>{sub}</p>
    </div>
  );
}
