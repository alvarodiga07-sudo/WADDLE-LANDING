# 🌍 Waddle · Landing para inversores

Página web interactiva para presentar Waddle a inversores. Incluye el **globo 3D real de la app**
y **6 itinerarios de demostración** pre-generados (sin IA, sin esperas) que los inversores pueden
explorar al instante.

---

## 🚀 Cómo arrancarla en local

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4000
```

## 📦 Cómo generar la versión final (para subir)

```bash
npm run build    # crea la carpeta /dist lista para publicar
npm run preview  # previsualiza la versión de producción
```

## ☁️ Cómo publicarla en internet (gratis, 2 minutos)

### Opción A — Vercel (recomendado)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala la CLI: `npm i -g vercel`
3. Ejecuta `vercel` en esta carpeta y sigue los pasos
4. ¡Listo! Te da una URL tipo `waddle-landing.vercel.app`

### Opción B — Netlify
1. Arrastra la carpeta `/dist` (tras `npm run build`) a [netlify.com/drop](https://app.netlify.com/drop)

---

## ✏️ Qué deberías personalizar antes de enviarla

Todo está centralizado para que lo edites fácil:

| Qué | Archivo |
|-----|---------|
| **Tu email de contacto** | `src/data/brand.js` → `email` |
| **Tu Calendly** (opcional) | `src/data/brand.js` → `calendly` |
| **Importe de la ronda** | `src/components/sections/Investment.jsx` → `RAISE` y `ALLOCATION` |
| **Hitos de tracción reales** | `src/components/sections/Traction.jsx` → `DONE` y `ROADMAP` |
| **Cifras de mercado** | `src/components/sections/Market.jsx` |

---

## 🧩 Qué incluye la landing

1. **Hero** con globo 3D girando + propuesta de valor
2. **El problema** (3 dolores reales)
3. **La solución** (5 pilares: inclusividad médica, personalización, globo, pasaporte, red social)
4. **Demo en vivo** — globo interactivo + 6 itinerarios reales explorables
5. **Funciones** con mockups de iPhone (pasaporte, red social, itinerario)
6. **Mercado** (TAM/SAM/SOM + stats animados)
7. **Por qué ahora + Modelo de negocio**
8. **Tracción & Roadmap**
9. **La ronda** (cuánto + en qué, con gráfico)
10. **Contacto / CTA**

Hecho con React + Vite + Tailwind + Framer Motion. El globo reutiliza el mismo motor que la app real.
