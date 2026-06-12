import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/brand';

const LINKS = [
  { id: 'solucion', label: 'Solución' },
  { id: 'demo', label: 'Demo en vivo' },
  { id: 'features', label: 'Funciones' },
  { id: 'mercado', label: 'Mercado' },
  { id: 'ronda', label: 'Oportunidad' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-2.5' : 'py-4 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
          <img src={BRAND.logo} alt="Waddle" className="w-9 h-9 rounded-xl" />
          <span className="font-display font-extrabold text-lg text-ink">{BRAND.name}</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="px-3.5 py-2 text-sm font-medium text-ink/70 hover:text-ink rounded-lg hover:bg-ink/5 transition">
              {l.label}
            </button>
          ))}
        </div>

        <button onClick={() => go('contacto')} className="bg-ink text-cream text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-ink-soft transition shadow-sm">
          Contáctame
        </button>
      </div>
    </nav>
  );
}
