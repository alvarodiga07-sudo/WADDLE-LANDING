import React from 'react';

// Marco de iPhone en CSS puro. children = pantalla.
export default function PhoneMockup({ children, className = '' }) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 260 }}>
      <div
        className="relative rounded-[2.6rem] bg-ink p-2.5 shadow-2xl"
        style={{ boxShadow: '0 40px 80px -20px rgba(15,17,23,0.5)' }}
      >
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-2xl z-20" />
        {/* Pantalla */}
        <div className="relative rounded-[2.1rem] overflow-hidden bg-cream" style={{ height: 540 }}>
          {children}
        </div>
        {/* Botones laterales */}
        <div className="absolute -left-1 top-24 w-1 h-10 bg-ink-soft rounded-l" />
        <div className="absolute -left-1 top-40 w-1 h-14 bg-ink-soft rounded-l" />
        <div className="absolute -right-1 top-32 w-1 h-16 bg-ink-soft rounded-r" />
      </div>
    </div>
  );
}
