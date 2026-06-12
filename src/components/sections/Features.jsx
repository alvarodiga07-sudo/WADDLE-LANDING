import React from 'react';
import Reveal, { SectionTag } from '../Reveal';
import PhoneMockup from '../PhoneMockup';
import { Heart, MessageCircle, Share2, Lock, Plane, Clock } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Las funciones</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            Diseñado para enamorar
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Cada pantalla está pensada para que viajar —y recordarlo— sea una experiencia preciosa.
          </p>
        </Reveal>

        {/* Feature 1 — Pasaporte */}
        <FeatureRow
          tag="Pasaporte digital"
          title="Colecciona el mundo, sello a sello"
          desc="Cada país que visitas se sella automáticamente en tu pasaporte digital con diseños únicos. Un registro precioso de toda tu vida viajera, organizado por años, que puedes presumir y compartir."
          bullets={['Sellos artísticos de los 196 países', 'Organización por año y duración', 'Solo cuenta los viajes completados']}
          phone={<PassportScreen />}
        />

        {/* Feature 2 — Red social (invertido) */}
        <FeatureRow
          reverse
          tag="Red social de viajes"
          title="El TikTok de los viajeros"
          desc="Convierte tus fotos en vídeos cinematográficos con música sin copyright. Compártelos en un feed vertical, descubre los viajes de otros, comenta y guarda. Crecimiento orgánico puro."
          bullets={['Vídeos automáticos con música', 'Feed vertical adictivo', 'Comentarios, likes y perfiles']}
          phone={<SocialScreen />}
        />

        {/* Feature 3 — Itinerario */}
        <FeatureRow
          tag="Itinerarios completos"
          title="Tu día, planificado al minuto"
          desc="De la mañana a la noche: desayuno, imprescindibles, dónde comer con precios reales, atardeceres, cena y planes nocturnos. Con presupuesto diario, qué llevar, qué fotografiar y plan B si llueve."
          bullets={['8 bloques por día con horarios', 'Precios reales, no símbolos €€€', 'Datos veraces: visado, vacunas, agua']}
          phone={<ItineraryScreen />}
        />
      </div>
    </section>
  );
}

function FeatureRow({ tag, title, desc, bullets, phone, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-24 last:mb-0 ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <Reveal className="[direction:ltr]">
        <SectionTag>{tag}</SectionTag>
        <h3 className="mt-4 font-display font-extrabold text-3xl text-ink tracking-tight">{title}</h3>
        <p className="mt-3 text-ink/60 leading-relaxed">{desc}</p>
        <ul className="mt-5 space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
              <span className="w-5 h-5 rounded-full bg-primary/15 text-primary-dark flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.15} y={40} className="[direction:ltr] flex justify-center">
        <div className="animate-float">{phone}</div>
      </Reveal>
    </div>
  );
}

/* ─── Pantallas recreadas en CSS ─── */

function PassportScreen() {
  // Cuños reales de la app (PNG optimizados)
  const stamps = [
    { img: '/stamps/Espana.png', d: '1 may 2025', dur: '4 días', rot: -4 },
    { img: '/stamps/Japon.png', d: '6 jun 2026', dur: '7 días', rot: 3 },
    { img: '/stamps/Italia.png', d: '12 jul 2026', dur: '5 días', rot: -3 },
    { img: '/stamps/Marruecos.png', d: '3 ago 2026', dur: '4 días', rot: 4 },
  ];
  return (
    <PhoneMockup>
      <div className="h-full bg-[#f4ecd8] p-4 pt-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(200,168,130,0.18) 1px, transparent 1px)', backgroundSize: '22px 22px' }}>
        <p className="text-center text-[10px] font-bold tracking-[0.3em] text-[#8a6d3b] mb-1">VISADOS Y SELLOS</p>
        <div className="flex items-center justify-center gap-1 mb-3">
          <span className="text-[#c8a882]">✦</span>
          <div className="w-16 h-px bg-[#c8a882]/40" />
          <span className="text-[#c8a882]">✦</span>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-3">
          {stamps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={s.img}
                alt=""
                className="w-full max-w-[110px] aspect-square object-contain"
                style={{ transform: `rotate(${s.rot}deg)`, filter: 'drop-shadow(0 3px 8px rgba(92,61,17,0.2))' }}
              />
              <span className="text-[9px] font-extrabold text-[#5c3d11] mt-1">{s.d}</span>
              <span className="text-[8px] text-[#8a6d3b]">{s.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneMockup>
  );
}

function SocialScreen() {
  return (
    <PhoneMockup>
      <div className="h-full relative bg-cover bg-center" style={{ backgroundImage: 'url(/img/santorini.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
        {/* topbar */}
        <div className="absolute top-3 left-0 right-0 px-4 flex items-center justify-between text-white text-xs font-bold">
          <span>←</span><span>✈️ Para ti</span><span>🔊</span>
        </div>
        {/* contenido */}
        <div className="absolute bottom-16 left-4 right-16 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-xs">🧳</div>
            <div>
              <p className="text-xs font-bold">@lucia_travels</p>
              <p className="text-[9px] opacity-80">🇪🇸 España</p>
            </div>
          </div>
          <p className="text-xs font-semibold drop-shadow">📍 Santorini, Grecia · día 3</p>
          <p className="text-[11px] drop-shadow mt-1">Atardecer en Oía sin palabras 🌅 #waddle</p>
        </div>
        {/* acciones */}
        <div className="absolute bottom-16 right-3 flex flex-col gap-3 items-center text-white">
          {[[Heart, '2.4K'], [MessageCircle, '184'], [Share2, '']].map(([Icon, n], i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="w-10 h-10 rounded-full bg-black/25 flex items-center justify-center"><Icon className="w-5 h-5" /></div>
              {n && <span className="text-[9px] font-bold">{n}</span>}
            </div>
          ))}
        </div>
        {/* indicador */}
        <div className="absolute top-12 left-4 right-4 flex gap-1">
          {[1, 1, 0.3, 0.3].map((o, i) => <div key={i} className="h-0.5 flex-1 bg-white rounded-full" style={{ opacity: o }} />)}
        </div>
      </div>
    </PhoneMockup>
  );
}

function ItineraryScreen() {
  const acts = [
    { t: '08:30', f: 'mañana', n: 'Desayuno italiano', c: '6-10€', col: 'bg-amber-100 text-amber-700' },
    { t: '09:30', f: 'mañana', n: 'Coliseo + Foro', c: '~18€', col: 'bg-amber-100 text-amber-700', star: true },
    { t: '13:30', f: 'mediodía', n: 'Carbonara auténtica', c: '15-25€', col: 'bg-orange-100 text-orange-700' },
    { t: '16:00', f: 'tarde', n: 'Panteón + Navona', c: 'Gratis', col: 'bg-sky-100 text-sky-700' },
    { t: '19:00', f: 'atardecer', n: 'Atardecer Pincio', c: 'Gratis', col: 'bg-pink-100 text-pink-700' },
    { t: '21:00', f: 'noche', n: 'Cena en Trastevere', c: '25-40€', col: 'bg-indigo-100 text-indigo-700' },
  ];
  return (
    <PhoneMockup>
      <div className="h-full bg-cream overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-accent p-4 pt-10">
          <p className="text-[9px] font-bold uppercase tracking-widest text-ink/60">Día 2 · Roma</p>
          <p className="font-display font-extrabold text-ink text-lg">Ruta clásica monumental</p>
          <div className="flex gap-1.5 mt-2">
            <span className="text-[9px] font-bold bg-ink/15 text-ink px-2 py-0.5 rounded-full flex items-center gap-1"><Plane className="w-2.5 h-2.5" />5 días</span>
            <span className="text-[9px] font-bold bg-ink/15 text-ink px-2 py-0.5 rounded-full">~1.050€/pers</span>
          </div>
        </div>
        <div className="p-3 space-y-2 overflow-hidden">
          {acts.map((a, i) => (
            <div key={i} className="flex gap-2">
              <div className="flex flex-col items-center min-w-[42px]">
                <span className="text-[9px] font-mono font-bold text-ink">{a.t}</span>
                <span className={`text-[6px] mt-0.5 px-1 py-0.5 rounded-full ${a.col} font-bold capitalize`}>{a.f}</span>
                {i < acts.length - 1 && <div className="w-px flex-1 bg-cream-deep mt-1" />}
              </div>
              <div className="flex-1 pb-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-ink">{a.star && '⭐ '}{a.n}</p>
                  <span className="text-[8px] bg-cream-deep px-1.5 py-0.5 rounded-full text-ink/60">{a.c}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneMockup>
  );
}
