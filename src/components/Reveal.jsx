import React from 'react';
import { motion } from 'framer-motion';

// Aparece suave al entrar en viewport
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Título de sección reutilizable
export function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary-dark bg-primary/10 px-3 py-1.5 rounded-full">
      {children}
    </span>
  );
}
