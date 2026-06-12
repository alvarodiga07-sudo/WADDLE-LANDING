import React from 'react';
import { Target, HeartPulse, Globe, BookMarked, Clapperboard } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';

const PILLARS = [
  {
    icon: <HeartPulse className="w-6 h-6" />,
    color: 'from-rose-500 to-pink-500',
    title: 'Inclusivo de verdad',
    badge: 'Único en el mercado',
    desc: 'Indica tus alergias, dieta o condiciones médicas y Waddle adapta restaurantes, vacunas reales, agua potable y avisos sanitarios. Viajar deja de dar miedo.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-500',
    title: 'Hiperpersonalizado',
    desc: 'Presupuesto, gustos, equipaje, días… Waddle ajusta cada euro y cada hora del día a ti. Un itinerario completo, minuto a minuto, en menos de 1 segundo.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    color: 'from-sky-500 to-blue-600',
    title: 'Globo 3D interactivo',
    desc: 'No es otro mapa plano. Explora el mundo girando un globo terráqueo real, descubre destinos y revive tus viajes de forma visual y adictiva.',
  },
  {
    icon: <BookMarked className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-600',
    title: 'Pasaporte de por vida',
    desc: 'Cada país que pisas se sella en tu pasaporte digital. Un registro precioso de toda tu vida viajera que crece contigo, año tras año.',
  },
  {
    icon: <Clapperboard className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-600',
    title: 'Red social de viajes',
    desc: 'Convierte tus fotos en vídeos con música, compártelos en un feed estilo TikTok y descubre los viajes de otros. Comunidad que genera crecimiento orgánico.',
  },
];

export default function Solution() {
  return (
    <section id="solucion" className="py-24 bg-gradient-to-b from-cream to-cream-deep/40 relative">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag>La solución</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            Una sola app.<br />Cinco superpoderes.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Waddle no es "otro planificador". Es la primera plataforma que combina personalización médica,
            globo 3D, pasaporte de vida y comunidad. Todo gratis para el usuario.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`h-full bg-white rounded-3xl border border-cream-deep p-7 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group ${i === 0 ? 'lg:row-span-1 ring-2 ring-primary/30' : ''}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {p.icon}
                </div>
                {p.badge && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full mb-2">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}

          {/* Tarjeta destacada de cierre */}
          <Reveal delay={0.4}>
            <div className="h-full bg-ink rounded-3xl p-7 flex flex-col justify-center text-cream">
              <p className="text-3xl font-display font-extrabold leading-tight">+1.000<br /><span className="text-primary">destinos</span></p>
              <p className="text-sm text-cream/60 mt-3 leading-relaxed">
                listos al instante, sin IA de pago ni esperas. Datos curados y veraces de los 196 países del mundo.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
