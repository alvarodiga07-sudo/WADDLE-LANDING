# 🚀 Cómo conseguir tu enlace público (para enviar a tu tutor e inversores)

El `localhost:4000` solo funciona en tu ordenador. Para tener un **enlace que cualquiera pueda abrir**,
sigue UNO de estos métodos. El primero es el más fácil (sin registro, 30 segundos).

---

## ✅ MÉTODO 1 — Netlify Drop (recomendado · sin cuenta · instantáneo)

1. Abre esta web en tu navegador: **https://app.netlify.com/drop**
2. Abre Finder en esta carpeta: `Proyectos/WADDLE-LANDING`
3. **Arrastra la carpeta `dist`** entera y suéltala en la web de Netlify
4. Espera ~15 segundos → te dará un enlace tipo `https://nombre-aleatorio.netlify.app`
5. **Ese enlace ya lo puedes enviar.** ✉️

> 💡 Si quieres un nombre bonito (ej. `waddle.netlify.app`) o que no caduque,
> crea una cuenta gratis en Netlify (con tu Google) y pulsa "Claim site". Es opcional.

---

## ✅ MÉTODO 2 — Vercel (si prefieres algo permanente con tu cuenta)

1. Crea cuenta gratis en https://vercel.com (entra con tu Google/GitHub)
2. Instala la herramienta: abre Terminal y escribe `npm i -g vercel`
3. En la carpeta del proyecto: `vercel --prod`
4. Sigue los pasos (te pedirá confirmar en el navegador la primera vez)
5. Te da un enlace `https://waddle-landing.vercel.app`

---

## 🔄 Si cambias algo y quieres re-publicar

1. En Terminal, dentro de `Proyectos/WADDLE-LANDING`, ejecuta: `npm run build`
2. Vuelve a arrastrar la carpeta `dist` a Netlify Drop (o `vercel --prod`)

---

## 📁 Atajo

También tienes un **`waddle-landing-web.zip`** en la carpeta del proyecto: es el sitio comprimido,
por si tu hosting prefiere un zip en vez de una carpeta.
