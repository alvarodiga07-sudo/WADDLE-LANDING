# 🔗 Cómo obtener tu ENLACE PERMANENTE

## ⏱️ Tiempo: 3 minutos. Sin caducidades. Gratis para siempre.

---

## 📋 Requisitos
- Tener una cuenta en [GitHub.com](https://github.com) (gratis)
- Nada más

---

## ✅ PASO 1: Descubre tu usuario de GitHub (30 segundos)

1. Ve a **https://github.com/TU_USUARIO** (donde TU_USUARIO es tu username)
2. Copia tu usuario exacto (ej. `alvarodieguezgarcia`)
3. Guárdalo: lo necesitarás en el paso 2

---

## 🚀 PASO 2: Ejecuta el script de deploy (2 minutos)

**En Terminal, copia y pega esto** (reemplazando `TU_USUARIO`):

```bash
GITHUB_USER="TU_USUARIO" bash ~/Proyectos/WADDLE-LANDING/DEPLOY_GITHUB.sh
```

**Ejemplo real:**
```bash
GITHUB_USER="alvarodieguezgarcia" bash ~/Proyectos/WADDLE-LANDING/DEPLOY_GITHUB.sh
```

El script hará:
1. Crear el repo automáticamente en GitHub
2. Subir todo tu código
3. Activar GitHub Pages
4. Darte la URL final

---

## 🎯 PASO 3: Espera 2-3 minutos y...

Tu landing estará VIVA en:

```
https://TU_USUARIO.github.io/WADDLE-LANDING/
```

**Ejemplo:**
```
https://alvarodieguezgarcia.github.io/WADDLE-LANDING/
```

✅ Ese enlace:
- ✨ **Nunca caduca**
- 🔐 **Es tuyo para siempre**
- 📤 **Puedes enviar a cualquiera**
- 🔄 **Auto-actualiza cada vez que haces push** (si cambias algo, haz `git push` y en 1 min se actualiza automáticamente)

---

## 🛠️ Si algo falla...

### Error: "Repository already exists"
→ Ya existe el repo. Probablemente ejecutaste el script dos veces.
→ Abre https://github.com/TU_USUARIO y elimina el repo WADDLE-LANDING
→ Intenta el script de nuevo

### Error: "Failed to push"
→ GitHub pidiendo autenticación (normal la primera vez)
→ Sigue los pasos en Terminal, te abrirá el navegador
→ Una vez confirmado, reinicia el script

### El sitio no carga
→ Espera 2-3 min, a veces tarda
→ Actualiza la página (Cmd+Shift+R)
→ Comprueba que la URL es correcta

---

## 📤 Cuando tengas el enlace...

**Envía esto a tu tutor e inversores:**

```
Mi landing de Waddle:
https://TU_USUARIO.github.io/WADDLE-LANDING/

Globo interactivo · 6 demos · Pasaporte · Red social · Modelo de negocio
```

---

## 🔄 Si quieres hacer cambios después...

1. Edita los archivos normalmente
2. En Terminal:
   ```bash
   cd ~/Proyectos/WADDLE-LANDING
   git add .
   git commit -m "Tu mensaje de cambio aquí"
   git push
   ```
3. En ~1 minuto, tu sitio se actualiza solo 🎉

---

**¿Dudas?** Todas las instrucciones están en `PUBLICAR.md` y `README.md` también.

**¡Dale! Tu landing está lista. El enlace es tuyo para siempre.** 🚀
