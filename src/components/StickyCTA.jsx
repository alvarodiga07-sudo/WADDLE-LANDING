import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 700;
      // Ocultar cuando estamos cerca del final (para no tapar el footer/contacto)
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 650;
      setShow(scrolled && !nearBottom);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2"
        >
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-ink font-bold px-5 py-3.5 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-accent transition flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Contáctame
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-2xl bg-ink text-cream shadow-xl hover:bg-ink-soft transition flex items-center justify-center"
            aria-label="Subir"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
