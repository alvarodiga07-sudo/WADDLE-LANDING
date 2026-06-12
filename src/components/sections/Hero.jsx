import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Heart, ShieldCheck } from 'lucide-react';
import LandingGlobe from '../LandingGlobe';

export default function Hero({ onCountrySelect }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative md:min-h-screen mesh-bg flex items-center pt-24 pb-12 md:pb-12 overflow-hidden">
      {/* Patrón sutil de estrellas (guiño al pasaporte) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #5c3d11 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Texto */}
        <div className="text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white border border-cream-deep shadow-sm text-xs font-bold text-ink/70 px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              MVP funcional · Abierto a conversaciones
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-extrabold text-5xl md:text-6xl leading-[1.04] text-ink tracking-tight"
          >
            Tu viaje. A tu medida.<br />
            <span className="text-gradient animate-gradient-shift">Hasta en lo que comes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-lg text-ink/70 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Las apps de viajes te dan itinerarios genéricos. <strong className="text-ink">Waddle</strong> diseña
            el viaje entero en torno a tu presupuesto, tus gustos y hasta tus{' '}
            <strong className="text-ink">alergias o condiciones médicas</strong> — algo que nadie más hace.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-base text-ink/55 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Y no acaba ahí: un <strong className="text-ink/80">globo 3D</strong> para explorar el mundo, un{' '}
            <strong className="text-ink/80">pasaporte digital</strong> que guarda cada país que pisas de por vida,
            y una <strong className="text-ink/80">red social</strong> para compartirlo. Todo en una app. Todo gratis.
          </motion.p>

          {/* Mini-diferenciadores */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Chip icon={<ShieldCheck className="w-3.5 h-3.5" />}>Inclusivo y seguro</Chip>
            <Chip icon={<Heart className="w-3.5 h-3.5" />}>Gratis para el usuario</Chip>
            <Chip>196 países</Chip>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <button onClick={() => go('demo')} className="group inline-flex items-center justify-center gap-2 bg-primary text-ink font-bold px-6 py-3.5 rounded-2xl hover:bg-accent transition shadow-lg shadow-primary/25">
              <Play className="w-4 h-4 fill-ink" /> Probar la demo en vivo
            </button>
            <button onClick={() => go('contacto')} className="inline-flex items-center justify-center gap-2 bg-ink text-cream font-bold px-6 py-3.5 rounded-2xl hover:bg-ink-soft transition">
              Conocer la oportunidad <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Globo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <LandingGlobe size={440} onCountrySelect={onCountrySelect} />
        </motion.div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink/30">
        <span className="text-[10px] font-medium uppercase tracking-widest">Descubre más</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-5 h-8 rounded-full border-2 border-ink/20 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-ink/40" />
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-white border border-cream-deep text-xs font-semibold text-ink/70 px-3 py-1.5 rounded-full">
      {icon}{children}
    </span>
  );
}
