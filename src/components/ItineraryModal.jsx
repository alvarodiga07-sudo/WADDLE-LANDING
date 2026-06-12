import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, MapPin, Calendar, Users, Plane, Hotel, Utensils, Clock,
  Wallet, ChevronDown, ChevronUp, Info, Sparkles, Camera, Cloud, Globe2,
} from 'lucide-react';
import { DEMO_ITINERARIES } from '../data/demoItineraries';

const FLAG = { roma: '🇮🇹', tokio: '🇯🇵', marrakech: '🇲🇦', cancun: '🇲🇽', islandia: '🇮🇸', bangkok: '🇹🇭' };
const TITLE = { roma: 'Roma, Italia', tokio: 'Tokio, Japón', marrakech: 'Marrakech, Marruecos', cancun: 'Cancún, México', islandia: 'Reikiavik, Islandia', bangkok: 'Bangkok, Tailandia' };

const FRANJA_COLOR = {
  'mañana': 'bg-amber-100 text-amber-700',
  'mediodía': 'bg-orange-100 text-orange-700',
  'tarde': 'bg-sky-100 text-sky-700',
  'atardecer': 'bg-pink-100 text-pink-700',
  'noche': 'bg-indigo-100 text-indigo-700',
};

export default function ItineraryModal({ demoId, onClose }) {
  const it = demoId ? DEMO_ITINERARIES[demoId] : null;
  const [openDay, setOpenDay] = useState(0);

  return (
    <AnimatePresence>
      {it && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-cream w-full md:max-w-2xl md:rounded-3xl rounded-t-3xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-primary via-accent to-primary-dark p-6 pb-5 flex-shrink-0">
              <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/15 hover:bg-ink/25 flex items-center justify-center text-ink transition">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-5xl drop-shadow">{FLAG[demoId]}</span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-ink/60">Itinerario generado al instante</p>
                  <h2 className="text-2xl font-display font-extrabold text-ink">{TITLE[demoId]}</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Pill icon={<Calendar className="w-3 h-3" />}>{it.dias.length} días</Pill>
                <Pill icon={<Users className="w-3 h-3" />}>2 personas</Pill>
                <Pill icon={<Wallet className="w-3 h-3" />}>{it.precio_total_persona}</Pill>
              </div>
            </div>

            {/* Body scroll */}
            <div className="overflow-y-auto p-5 space-y-4 no-scrollbar">
              {/* Resumen */}
              <p className="text-sm text-ink/80 leading-relaxed">{it.resumen}</p>

              {/* Precio total */}
              <div className="bg-ink text-cream rounded-2xl p-4">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">Coste estimado</p>
                <div className="flex items-end justify-between gap-3 flex-wrap">
                  <div>
                    <p className="text-[10px] opacity-60">Por persona</p>
                    <p className="text-lg font-bold">{it.precio_total_persona}</p>
                  </div>
                  {it.precio_total_grupo && (
                    <div className="text-right">
                      <p className="text-[10px] opacity-60">Total grupo</p>
                      <p className="text-lg font-bold">{it.precio_total_grupo}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Vuelos + hotel */}
              <div className="grid grid-cols-2 gap-3">
                <InfoCard icon={<Plane className="w-4 h-4 text-primary" />} title="Vuelos" value={it.vuelos.precio_aproximado.split('(')[0]} />
                <InfoCard icon={<Hotel className="w-4 h-4 text-primary" />} title="Hotel/noche" value={it.hoteles.precio_noche} />
              </div>

              {/* Días */}
              <div>
                <h3 className="text-sm font-bold text-ink mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary" /> Plan día a día
                </h3>
                <div className="space-y-2">
                  {it.dias.map((dia, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-cream-deep overflow-hidden">
                      <button
                        onClick={() => setOpenDay(openDay === idx ? -1 : idx)}
                        className="w-full flex items-center justify-between p-3.5 text-left hover:bg-cream-deep/40 transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-extrabold text-primary-dark">{dia.dia}</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-ink">{dia.titulo}</p>
                            {dia.tema && <p className="text-[11px] text-ink/50">{dia.tema}</p>}
                          </div>
                        </div>
                        {openDay === idx ? <ChevronUp className="w-4 h-4 text-ink/40" /> : <ChevronDown className="w-4 h-4 text-ink/40" />}
                      </button>

                      <AnimatePresence>
                        {openDay === idx && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-cream-deep">
                            <div className="p-4 space-y-3">
                              {dia.frase_del_dia && (
                                <p className="text-xs italic text-ink/70 bg-primary/5 rounded-lg p-2.5 border border-primary/10">"{dia.frase_del_dia}"</p>
                              )}

                              {/* Timeline */}
                              <div className="space-y-2">
                                {dia.actividades.map((act, ai) => (
                                  <div key={ai} className="flex gap-2.5">
                                    <div className="flex flex-col items-center min-w-[48px]">
                                      <span className="text-[10px] font-mono font-bold text-ink">{act.hora}</span>
                                      {act.franja && (
                                        <span className={`text-[7px] mt-0.5 px-1.5 py-0.5 rounded-full ${FRANJA_COLOR[act.franja] || 'bg-cream-deep text-ink/50'} font-bold capitalize`}>
                                          {act.franja}
                                        </span>
                                      )}
                                      {ai < dia.actividades.length - 1 && <div className="w-px flex-1 bg-cream-deep mt-1" />}
                                    </div>
                                    <div className={`flex-1 pb-2 ${act.opcional ? 'opacity-60' : ''}`}>
                                      <div className="flex items-start justify-between gap-2">
                                        <p className="text-xs font-bold text-ink">
                                          {act.opcional && '✨ '}{act.nombre}
                                          {act.prioridad === 'imprescindible' && <span className="ml-1 text-[8px] bg-primary/15 text-primary-dark px-1.5 py-0.5 rounded-full">⭐</span>}
                                        </p>
                                        {act.coste && <span className="text-[9px] bg-cream-deep px-1.5 py-0.5 rounded-full text-ink/60 whitespace-nowrap flex-shrink-0">{act.coste}</span>}
                                      </div>
                                      {act.descripcion && <p className="text-[10px] text-ink/60 mt-0.5 leading-relaxed">{act.descripcion}</p>}
                                      {act.consejo && <p className="text-[10px] text-amber-600 mt-1">💡 {act.consejo}</p>}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Mini-datos del día */}
                              <div className="grid grid-cols-2 gap-2">
                                {dia.presupuesto_dia && (
                                  <Mini icon={<Wallet className="w-3 h-3" />} label="Coste día">{dia.presupuesto_dia}</Mini>
                                )}
                                {dia.como_moverse && (
                                  <Mini icon={<Globe2 className="w-3 h-3" />} label="Moverse">{dia.como_moverse}</Mini>
                                )}
                              </div>
                              {dia.que_fotografiar?.length > 0 && (
                                <div className="flex items-start gap-1.5 text-[10px] text-ink/60">
                                  <Camera className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                  <span><strong>Foto:</strong> {dia.que_fotografiar.join(' · ')}</span>
                                </div>
                              )}
                              {dia.tip_cultural && (
                                <p className="text-[10px] text-purple-700 bg-purple-50 rounded-lg p-2">🌍 {dia.tip_cultural}</p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info práctica resumida */}
              {it.info_practica && (
                <div className="bg-white rounded-2xl border border-cream-deep p-4">
                  <p className="text-xs font-bold text-ink mb-2 flex items-center gap-1.5"><Info className="w-3.5 h-3.5 text-primary" /> Información práctica veraz</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[['💰 Moneda', it.info_practica.moneda], ['📋 Visado', it.info_practica.visado], ['💧 Agua', it.info_practica.agua], ['🏥 Sanidad', it.info_practica.sanidad]].filter(([, v]) => v).map(([k, v], i) => (
                      <div key={i} className="text-[11px]"><span className="font-semibold text-ink">{k}:</span> <span className="text-ink/60">{v}</span></div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 text-center">
                <p className="text-xs font-semibold text-ink">✨ Todo esto se genera en menos de 1 segundo</p>
                <p className="text-[11px] text-ink/60 mt-0.5">Sin IA de pago, sin esperas, sin registro. Así de potente es Waddle.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Pill({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1 bg-ink/10 text-ink text-[11px] font-bold px-2.5 py-1 rounded-full">
      {icon}{children}
    </span>
  );
}
function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-2xl border border-cream-deep p-3">
      <div className="flex items-center gap-1.5 mb-1">{icon}<span className="text-[10px] font-bold text-ink/50 uppercase">{title}</span></div>
      <p className="text-xs font-semibold text-ink leading-tight">{value}</p>
    </div>
  );
}
function Mini({ icon, label, children }) {
  return (
    <div className="bg-cream-deep/50 rounded-lg p-2">
      <p className="text-[9px] font-bold text-ink/50 uppercase flex items-center gap-1">{icon}{label}</p>
      <p className="text-[10px] text-ink/70 mt-0.5">{children}</p>
    </div>
  );
}
