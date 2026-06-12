import React from 'react';
import { Frown, DollarSign, UserX } from 'lucide-react';
import Reveal, { SectionTag } from '../Reveal';

const PAINS = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Planificar un viaje es caro y lento',
    desc: 'Las apps de IA cobran suscripción, tardan minutos en responder o se cuelgan. Organizar a mano supone horas entre 15 pestañas abiertas.',
  },
  {
    icon: <UserX className="w-6 h-6" />,
    title: 'Nadie piensa en quien tiene necesidades especiales',
    desc: 'Si eres celíaco, alérgico, vegano o tienes una condición médica, viajar da miedo. Ninguna app te dice dónde comer seguro ni qué vacunas necesitas de verdad.',
  },
  {
    icon: <Frown className="w-6 h-6" />,
    title: 'Tus recuerdos de viaje se pierden',
    desc: 'Las fotos quedan enterradas en el carrete. No hay un sitio que recoja, celebre y comparta todo lo que has vivido viajando a lo largo de tu vida.',
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag>El problema</SectionTag>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink tracking-tight">
            Viajar debería ser fácil.<br />Para todo el mundo.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Hay cientos de planificadores de viajes. Pero ninguno resuelve los tres problemas que de verdad importan.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PAINS.map((p, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="h-full bg-white rounded-3xl border border-cream-deep p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
