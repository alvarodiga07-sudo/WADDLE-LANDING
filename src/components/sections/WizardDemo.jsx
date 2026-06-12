import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, Search, Wand2 } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';

/* ============================================================
   DATOS REALES — copiados tal cual del wizard de la app (TripWizard.jsx)
   ============================================================ */
const BUDGET_RANGES = {
  budget: ['< 500€', '500-800€', '800-1200€'],
  mid: ['1000-1500€', '1500-2500€', '2500-3500€'],
  comfort: ['3000-4500€', '4500-6000€', '6000-8000€'],
  luxury: ['8000-12000€', '12000-20000€', '+20000€'],
};
const TRIP_TYPES = [
  { id: 'leisure', label: 'Ocio', icon: '🏖️' }, { id: 'adventure', label: 'Aventura', icon: '🧗' },
  { id: 'romantic', label: 'Romántico', icon: '💕' }, { id: 'family', label: 'Familiar', icon: '👨‍👩‍👧‍👦' },
  { id: 'cultural', label: 'Cultural', icon: '🏛️' }, { id: 'gastronomy', label: 'Gastronomía', icon: '🍽️' },
  { id: 'nature', label: 'Naturaleza', icon: '🌿' }, { id: 'work', label: 'Trabajo', icon: '💼' },
];
const BUDGETS = [
  { id: 'budget', label: 'Económico', desc: '~70€/día', icon: '🪙' },
  { id: 'mid', label: 'Intermedio', desc: '~150€/día', icon: '💳' },
  { id: 'comfort', label: 'Confort', desc: '~260€/día', icon: '⭐' },
  { id: 'luxury', label: 'Lujo', desc: '~560€/día', icon: '💎' },
];
const SPEND_CATEGORIES = [
  { id: 'hotel', label: 'Alojamiento', icon: '🏨' },
  { id: 'food', label: 'Comida', icon: '🍽️' },
  { id: 'activities', label: 'Actividades', icon: '🎟️' },
  { id: 'transport', label: 'Transporte', icon: '🚕' },
];
const INTERESTS = [
  { id: 'museums', label: 'Museos', icon: '🏛️' }, { id: 'history', label: 'Historia', icon: '📜' },
  { id: 'nature', label: 'Naturaleza', icon: '🌿' }, { id: 'beaches', label: 'Playas', icon: '🏖️' },
  { id: 'food', label: 'Gastronomía', icon: '🍜' }, { id: 'nightlife', label: 'Vida nocturna', icon: '🎶' },
  { id: 'shopping', label: 'Compras', icon: '🛍️' }, { id: 'art', label: 'Arte', icon: '🎨' },
  { id: 'photography', label: 'Fotografía', icon: '📷' }, { id: 'wellness', label: 'Bienestar', icon: '🧘' },
  { id: 'adventure', label: 'Aventura', icon: '⛰️' }, { id: 'local', label: 'Vida local', icon: '🏘️' },
];
const DIET = [
  { id: 'none', label: 'Sin restricciones', icon: '✅' }, { id: 'vegetarian', label: 'Vegetariano', icon: '🥗' },
  { id: 'vegan', label: 'Vegano', icon: '🌱' }, { id: 'gluten_free', label: 'Sin gluten', icon: '🌾' },
  { id: 'halal', label: 'Halal', icon: '☪️' }, { id: 'kosher', label: 'Kosher', icon: '✡️' },
  { id: 'nuts', label: 'Alergia frutos secos', icon: '🥜' }, { id: 'seafood', label: 'Alergia marisco', icon: '🦐' },
];
const COMPANIONS = [
  { id: 'solo', label: 'Solo', icon: '🧍' }, { id: 'partner', label: 'Pareja', icon: '💑' },
  { id: 'friends', label: 'Amigos', icon: '👯' }, { id: 'family_kids', label: 'Familia+niños', icon: '👨‍👩‍👧' },
  { id: 'family_adults', label: 'Familia', icon: '👨‍👩‍👦‍👦' }, { id: 'colleagues', label: 'Trabajo', icon: '💼' },
];
const LUGGAGE = [
  { id: 'cabin', icon: '🎒', label: 'Solo cabina', desc: 'Mochila/maleta cabina' },
  { id: 'checked', icon: '🧳', label: 'Facturada', desc: 'Maleta grande' },
  { id: 'both', icon: '✈️', label: 'Cabina + facturada', desc: 'Equipaje completo' },
];
const STEPS = ['Destino', 'Fechas', 'Presupuesto', 'Viajeros', 'Tipo', 'Preferencias'];
const AI_MSGS = [
  '✈️ Analizando tu destino...', '🌤️ Consultando clima y temporada...',
  '🗺️ Diseñando la ruta perfecta...', '🍽️ Seleccionando los mejores restaurantes...',
  '🏛️ Eligiendo las atracciones imprescindibles...', '🏨 Buscando alojamiento ideal...',
  '💰 Ajustando todo a tu presupuesto...', '🎯 Finalizando tu itinerario...',
];

// Lista breve de países para el buscador (demo)
const COUNTRIES = [
  { code: 'ES', name: 'España', emoji: '🇪🇸' }, { code: 'JP', name: 'Japón', emoji: '🇯🇵' },
  { code: 'IT', name: 'Italia', emoji: '🇮🇹' }, { code: 'FR', name: 'Francia', emoji: '🇫🇷' },
  { code: 'MA', name: 'Marruecos', emoji: '🇲🇦' }, { code: 'TH', name: 'Tailandia', emoji: '🇹🇭' },
  { code: 'MX', name: 'México', emoji: '🇲🇽' }, { code: 'IS', name: 'Islandia', emoji: '🇮🇸' },
  { code: 'GR', name: 'Grecia', emoji: '🇬🇷' }, { code: 'PT', name: 'Portugal', emoji: '🇵🇹' },
  { code: 'US', name: 'Estados Unidos', emoji: '🇺🇸' }, { code: 'GB', name: 'Reino Unido', emoji: '🇬🇧' },
  { code: 'VN', name: 'Vietnam', emoji: '🇻🇳' }, { code: 'PE', name: 'Perú', emoji: '🇵🇪' },
];
const CITIES_BY_COUNTRY = {
  JP: ['Tokio', 'Kioto', 'Osaka', 'Hiroshima'],
  IT: ['Roma', 'Florencia', 'Venecia', 'Milán'],
  MA: ['Marrakech', 'Fez', 'Chefchaouen', 'Casablanca'],
  TH: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi'],
  MX: ['Ciudad de México', 'Cancún', 'Tulum', 'Oaxaca'],
  IS: ['Reikiavik', 'Vík', 'Akureyri'],
  GR: ['Atenas', 'Santorini', 'Mykonos'],
};

/* ============================================================
   Subcomponentes
   ============================================================ */
function Field({ label, children }) {
  return <div><span className="text-[13px] font-semibold mb-1.5 block text-ink">{label}</span>{children}</div>;
}

function Chip({ label, icon, selected, onClick }) {
  return (
    <motion.button type="button" whileTap={{ scale: 0.95 }} onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 text-xs font-semibold transition-all ${selected ? 'border-primary bg-primary text-ink' : 'border-cream-deep bg-white text-ink/70 hover:border-primary/40'}`}>
      <span>{icon}</span>{label}
    </motion.button>
  );
}

function CountrySelect({ value, onChange, placeholder }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = COUNTRIES.find(c => c.code === value);
  const filtered = query
    ? COUNTRIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : COUNTRIES;
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen(o => !o)}
        className="w-full h-11 rounded-xl border border-cream-deep bg-white px-3 flex items-center gap-2 text-sm text-left hover:border-primary/50">
        {selected ? <><span className="text-base">{selected.emoji}</span><span className="flex-1 truncate text-ink">{selected.name}</span></>
          : <span className="flex-1 text-ink/40">{placeholder}</span>}
        <span className="text-ink/40 text-xs">▾</span>
      </button>
      {open && (
        <div className="absolute z-50 top-12 left-0 right-0 bg-white border border-cream-deep rounded-xl shadow-xl overflow-hidden">
          <div className="p-2 border-b border-cream-deep">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink/40" />
              <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Escribe para buscar..."
                className="w-full pl-8 pr-3 py-1.5 text-sm bg-cream-deep/40 rounded-lg outline-none" />
            </div>
          </div>
          <div className="max-h-44 overflow-y-auto">
            {filtered.map(c => (
              <button key={c.code} type="button" onClick={() => { onChange(c.code); setOpen(false); setQuery(''); }}
                className={`w-full px-3 py-2 text-sm flex items-center gap-2 hover:bg-cream-deep/40 text-left ${c.code === value ? 'bg-primary/10 font-semibold' : ''}`}>
                <span>{c.emoji}</span><span className="flex-1 truncate">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Counter({ value, onDec, onInc, suffix }) {
  return (
    <div className="flex items-center gap-4 bg-cream-deep/40 rounded-xl p-3">
      <button onClick={onDec} className="w-10 h-10 rounded-full bg-white border border-cream-deep text-xl font-bold flex items-center justify-center hover:border-primary">−</button>
      <div className="flex-1 text-center"><span className="text-3xl font-bold text-ink">{value}</span>{suffix && <span className="text-sm text-ink/50 ml-1">{suffix}</span>}</div>
      <button onClick={onInc} className="w-10 h-10 rounded-full bg-white border border-cream-deep text-xl font-bold flex items-center justify-center hover:border-primary">+</button>
    </div>
  );
}

/* ============================================================
   Demo del Wizard
   ============================================================ */
export default function WizardDemo() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState('form'); // 'form' | 'loading' | 'done'
  const [aiMsg, setAiMsg] = useState(0);

  const [form, setForm] = useState({
    origin_country: 'ES', origin_city: 'Madrid',
    destination_country: 'JP', destination_cities: ['Tokio', 'Kioto'],
    title: '', start_date: '', duration_days: 7, flexible_dates: false,
    budget_type: 'mid', budget_range: '1500-2500€',
    priorities: { hotel: 50, food: 70, activities: 60, transport: 40 },
    companions: 'partner', travelers_count: 2, age: 28, luggage: 'cabin',
    trip_type: 'cultural',
    interests: ['food', 'history', 'photography'], diet: ['gluten_free'],
    custom_diet: [], custom_interests: [], health_notes: '',
  });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const toggle = (key, id) => setForm(p => ({
    ...p, [key]: p[key].includes(id) ? p[key].filter(x => x !== id) : [...p[key], id],
  }));
  const toggleCity = (city) => setForm(p => ({
    ...p, destination_cities: p.destination_cities.includes(city)
      ? p.destination_cities.filter(c => c !== city) : [...p.destination_cities, city],
  }));

  const cityOptions = CITIES_BY_COUNTRY[form.destination_country] || [];
  const countryName = COUNTRIES.find(c => c.code === form.destination_country)?.name || '';

  // Fecha de vuelta automática
  const endDate = (() => {
    if (!form.start_date) return '';
    try {
      const d = new Date(form.start_date + 'T12:00');
      d.setDate(d.getDate() + Number(form.duration_days) - 1);
      return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch { return ''; }
  })();

  const canNext = () => {
    if (step === 0) return form.destination_country;
    if (step === 2) return form.budget_type;
    if (step === 4) return form.trip_type;
    return true;
  };

  // Animación de carga IA (igual que la app)
  useEffect(() => {
    if (phase !== 'loading') return;
    setAiMsg(0);
    const interval = setInterval(() => setAiMsg(m => m + 1), 600);
    const done = setTimeout(() => { clearInterval(interval); setPhase('done'); }, AI_MSGS.length * 600 + 300);
    return () => { clearInterval(interval); clearTimeout(done); };
  }, [phase]);

  const reset = () => { setPhase('form'); setStep(0); };
  const goToDemo = () => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="planificador" className="py-24 bg-gradient-to-b from-cream-deep/40 to-cream relative overflow-hidden">
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-5 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag>Así te preguntamos</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            6 pasos. Un viaje 100% tuyo.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Esto es <strong className="text-ink">exactamente</strong> lo que Waddle te pregunta al crear un viaje.
            Pruébalo: cada respuesta — hasta tus <strong className="text-ink">alergias</strong> — moldea tu itinerario.
            <span className="text-primary-dark font-semibold"> Nada de formularios genéricos.</span>
          </p>
        </Reveal>

        {/* Marco tipo app */}
        <Reveal delay={0.1} className="flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-[2.2rem] border border-cream-deep shadow-2xl overflow-hidden flex flex-col" style={{ minHeight: 600, boxShadow: '0 40px 80px -24px rgba(15,17,23,0.35)' }}>

            {phase === 'form' && (
              <>
                {/* Progress */}
                <div className="flex items-center gap-3 px-4 pt-5 pb-3 border-b border-cream-deep/60">
                  <div className="flex-1 flex gap-1">
                    {STEPS.map((_, i) => (
                      <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-cream-deep">
                        <motion.div animate={{ width: i <= step ? '100%' : '0%' }} transition={{ duration: 0.3 }} className="h-full bg-primary rounded-full" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-ink/50 font-semibold whitespace-nowrap">{step + 1}/{STEPS.length}</span>
                </div>

                {/* Cuerpo */}
                <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-5" style={{ maxHeight: 470 }}>
                  <AnimatePresence mode="wait">
                    <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }} className="space-y-4 text-left">

                      {/* PASO 0 — Destino */}
                      {step === 0 && (<>
                        <h3 className="text-xl font-display font-extrabold text-center text-ink">¿A dónde viajas?</h3>
                        <Field label="País de origen">
                          <CountrySelect value={form.origin_country} onChange={v => up('origin_country', v)} placeholder="¿Desde dónde sales?" />
                        </Field>
                        <Field label="País de destino *">
                          <CountrySelect value={form.destination_country} onChange={v => { up('destination_country', v); up('destination_cities', []); }} placeholder="¿A dónde quieres ir?" />
                        </Field>
                        {form.destination_country && cityOptions.length > 0 && (
                          <Field label={`¿Qué ciudades de ${countryName} quieres visitar? (elige varias)`}>
                            <div className="flex flex-wrap gap-2">
                              {cityOptions.map(city => (
                                <Chip key={city} label={city} icon={form.destination_cities.includes(city) ? '✓' : '📍'}
                                  selected={form.destination_cities.includes(city)} onClick={() => toggleCity(city)} />
                              ))}
                            </div>
                            {form.destination_cities.length > 0 && (
                              <p className="text-xs text-primary-dark mt-2 font-medium">
                                {form.destination_cities.length} ciudad{form.destination_cities.length > 1 ? 'es' : ''} — Waddle dará opciones para cada una
                              </p>
                            )}
                          </Field>
                        )}
                      </>)}

                      {/* PASO 1 — Fechas */}
                      {step === 1 && (<>
                        <h3 className="text-xl font-display font-extrabold text-center text-ink">Fechas del viaje</h3>
                        <Field label="Fecha de salida">
                          <input type="date" value={form.start_date} onChange={e => up('start_date', e.target.value)}
                            className="w-full h-11 rounded-xl border border-cream-deep bg-white px-3 text-sm text-ink" />
                        </Field>
                        <Field label="Duración">
                          <Counter value={form.duration_days} suffix="días"
                            onDec={() => up('duration_days', Math.max(1, form.duration_days - 1))}
                            onInc={() => up('duration_days', form.duration_days + 1)} />
                        </Field>
                        {form.start_date && endDate && (
                          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                            <p className="text-xs text-ink/50 mb-1">Tu viaje termina el</p>
                            <p className="text-base font-bold text-primary-dark">{endDate}</p>
                            <p className="text-xs text-ink/50 mt-1">Vuelta calculada automáticamente</p>
                          </div>
                        )}
                        <label className="flex items-center gap-3 cursor-pointer bg-cream-deep/40 rounded-xl p-3">
                          <input type="checkbox" checked={form.flexible_dates} onChange={e => up('flexible_dates', e.target.checked)} className="w-4 h-4 accent-primary" />
                          <span className="text-sm text-ink">Fechas flexibles para mejores precios</span>
                        </label>
                      </>)}

                      {/* PASO 2 — Presupuesto */}
                      {step === 2 && (<>
                        <h3 className="text-xl font-display font-extrabold text-center text-ink">Presupuesto *</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {BUDGETS.map(b => (
                            <motion.button key={b.id} whileTap={{ scale: 0.95 }} onClick={() => up('budget_type', b.id)}
                              className={`flex flex-col items-start gap-1 p-4 rounded-2xl border-2 text-left ${form.budget_type === b.id ? 'border-primary bg-primary/10' : 'border-cream-deep bg-white'}`}>
                              <span className="text-3xl">{b.icon}</span>
                              <span className="text-sm font-bold text-ink">{b.label}</span>
                              <span className="text-[10px] text-ink/50">{b.desc}</span>
                            </motion.button>
                          ))}
                        </div>
                        {form.budget_type && (
                          <div className="bg-cream-deep/30 border border-cream-deep rounded-2xl p-4 space-y-3">
                            <div>
                              <p className="text-sm font-bold text-ink">¿En qué prefieres gastar más?</p>
                              <p className="text-xs text-ink/50">Waddle priorizará tu presupuesto</p>
                            </div>
                            {SPEND_CATEGORIES.map(cat => (
                              <div key={cat.id}>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-semibold flex items-center gap-1.5 text-ink">{cat.icon} {cat.label}</span>
                                  <span className="text-[10px] text-ink/50">
                                    {form.priorities[cat.id] < 35 ? 'Ahorrar' : form.priorities[cat.id] > 65 ? 'Gastar más' : 'Equilibrado'}
                                  </span>
                                </div>
                                <input type="range" min="0" max="100" step="10" value={form.priorities[cat.id]}
                                  onChange={e => up('priorities', { ...form.priorities, [cat.id]: Number(e.target.value) })}
                                  className="w-full h-2 accent-primary cursor-pointer" />
                              </div>
                            ))}
                          </div>
                        )}
                        {form.budget_type && (
                          <Field label="Presupuesto total aproximado (por persona)">
                            <div className="flex flex-wrap gap-2">
                              {(BUDGET_RANGES[form.budget_type] || []).map(range => (
                                <Chip key={range} label={range} icon="💶" selected={form.budget_range === range}
                                  onClick={() => up('budget_range', form.budget_range === range ? '' : range)} />
                              ))}
                            </div>
                          </Field>
                        )}
                      </>)}

                      {/* PASO 3 — Viajeros */}
                      {step === 3 && (<>
                        <h3 className="text-xl font-display font-extrabold text-center text-ink">¿Quién viaja?</h3>
                        <Field label="¿Con quién vas?">
                          <div className="grid grid-cols-3 gap-2">
                            {COMPANIONS.map(c => (
                              <motion.button key={c.id} whileTap={{ scale: 0.95 }} onClick={() => up('companions', c.id)}
                                className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 ${form.companions === c.id ? 'border-primary bg-primary/10' : 'border-cream-deep bg-white'}`}>
                                <span className="text-2xl">{c.icon}</span>
                                <span className="text-[10px] font-semibold text-center leading-tight text-ink">{c.label}</span>
                              </motion.button>
                            ))}
                          </div>
                        </Field>
                        {form.companions !== 'solo' && (
                          <Field label="Número de personas">
                            <Counter value={form.travelers_count}
                              onDec={() => up('travelers_count', Math.max(2, form.travelers_count - 1))}
                              onInc={() => up('travelers_count', form.travelers_count + 1)} />
                          </Field>
                        )}
                        <Field label="¿Qué equipaje vas a llevar?">
                          <div className="grid grid-cols-3 gap-2">
                            {LUGGAGE.map(l => (
                              <motion.button key={l.id} whileTap={{ scale: 0.95 }} onClick={() => up('luggage', l.id)}
                                className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 ${form.luggage === l.id ? 'border-primary bg-primary/10' : 'border-cream-deep bg-white'}`}>
                                <span className="text-2xl">{l.icon}</span>
                                <span className="text-[10px] font-bold text-center leading-tight text-ink">{l.label}</span>
                              </motion.button>
                            ))}
                          </div>
                        </Field>
                      </>)}

                      {/* PASO 4 — Tipo */}
                      {step === 4 && (<>
                        <h3 className="text-xl font-display font-extrabold text-center text-ink">Tipo de viaje *</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {TRIP_TYPES.map(t => (
                            <motion.button key={t.id} whileTap={{ scale: 0.95 }} onClick={() => up('trip_type', t.id)}
                              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 ${form.trip_type === t.id ? 'border-primary bg-primary/10' : 'border-cream-deep bg-white'}`}>
                              <span className="text-3xl">{t.icon}</span>
                              <span className="text-xs font-semibold text-ink">{t.label}</span>
                            </motion.button>
                          ))}
                        </div>
                      </>)}

                      {/* PASO 5 — Preferencias */}
                      {step === 5 && (<>
                        <h3 className="text-xl font-display font-extrabold text-center text-ink">Tus preferencias</h3>
                        <Field label="¿Qué te gusta hacer? (elige varios)">
                          <div className="flex flex-wrap gap-2">
                            {INTERESTS.map(i => <Chip key={i.id} label={i.label} icon={i.icon} selected={form.interests.includes(i.id)} onClick={() => toggle('interests', i.id)} />)}
                          </div>
                        </Field>
                        <Field label="Restricciones dietéticas y alergias">
                          <div className="flex flex-wrap gap-2">
                            {DIET.map(d => <Chip key={d.id} label={d.label} icon={d.icon} selected={form.diet.includes(d.id)} onClick={() => toggle('diet', d.id)} />)}
                          </div>
                          <div className="mt-2 flex items-start gap-2 bg-rose-50 border border-rose-100 rounded-xl p-2.5">
                            <span className="text-base leading-none mt-0.5">🩺</span>
                            <p className="text-[11px] text-rose-700 leading-snug">
                              Esto es lo que <strong>nadie más hace</strong>: Waddle adapta restaurantes, avisa de alérgenos y revisa la comida segura para ti.
                            </p>
                          </div>
                        </Field>
                        <Field label="Salud o alergias físicas (opcional)">
                          <input placeholder="ej. alergia a picaduras, problema de altitud..." value={form.health_notes}
                            onChange={e => up('health_notes', e.target.value)}
                            className="w-full h-11 rounded-xl border border-cream-deep bg-white px-3 text-sm text-ink placeholder:text-ink/40" />
                        </Field>
                      </>)}

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Nav */}
                <div className="px-5 pb-5 pt-3 flex gap-3 border-t border-cream-deep/60">
                  {step > 0 && (
                    <button onClick={() => setStep(s => s - 1)} className="h-12 px-4 rounded-xl border border-cream-deep text-ink flex items-center justify-center hover:border-primary">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  <button onClick={step === STEPS.length - 1 ? () => setPhase('loading') : () => setStep(s => s + 1)}
                    disabled={!canNext()}
                    className="flex-1 h-12 rounded-xl text-base font-bold flex items-center justify-center gap-2 bg-primary text-ink hover:bg-accent transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/25">
                    {step === STEPS.length - 1
                      ? <><Sparkles className="w-5 h-5" /> Crear itinerario</>
                      : <>Siguiente <ChevronRight className="w-5 h-5" /></>}
                  </button>
                </div>
              </>
            )}

            {/* Pantalla de carga (igual que la app) */}
            {phase === 'loading' && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-6" style={{ minHeight: 600 }}>
                <div className="w-24 h-24 relative">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                    <circle cx="48" cy="48" r="40" fill="none" stroke="#f4f1ea" strokeWidth="6" />
                    <motion.circle cx="48" cy="48" r="40" fill="none" stroke="#eab308" strokeWidth="6"
                      strokeDasharray="251" strokeLinecap="round"
                      animate={{ strokeDashoffset: [251, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-3xl">✈️</div>
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-ink mb-2">Creando tu itinerario</h3>
                  <AnimatePresence mode="wait">
                    <motion.p key={aiMsg} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      className="text-sm text-ink/55">{AI_MSGS[Math.min(aiMsg, AI_MSGS.length - 1)]}</motion.p>
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Pantalla final */}
            {phase === 'done' && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-5" style={{ minHeight: 600 }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-4xl">🎉</motion.div>
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-ink">¡Tu itinerario está listo!</h3>
                  <p className="text-sm text-ink/60 mt-2 max-w-xs">
                    Día a día, minuto a minuto, ajustado a tu presupuesto, tus gustos y tus restricciones.
                    Mira un ejemplo real generado así.
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[240px]">
                  <button onClick={goToDemo} className="h-12 rounded-xl bg-primary text-ink font-bold flex items-center justify-center gap-2 hover:bg-accent transition shadow-lg shadow-primary/25">
                    <Sparkles className="w-4 h-4" /> Ver un itinerario real
                  </button>
                  <button onClick={reset} className="h-11 rounded-xl border border-cream-deep text-ink/70 font-semibold flex items-center justify-center gap-2 hover:border-primary">
                    <Wand2 className="w-4 h-4" /> Probar otra vez
                  </button>
                </div>
              </div>
            )}

          </div>
        </Reveal>
      </div>
    </section>
  );
}
