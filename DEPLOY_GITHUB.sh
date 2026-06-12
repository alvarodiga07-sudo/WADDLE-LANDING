#!/bin/bash
# Script para deployar Waddle Landing en GitHub Pages automáticamente
# Solo necesitas cambiar "TU_USUARIO" por tu nombre de usuario de GitHub

GITHUB_USER="TU_USUARIO"
REPO_NAME="WADDLE-LANDING"

echo "=========================================="
echo "🚀 Deploy a GitHub Pages"
echo "=========================================="
echo ""
echo "⚠️  PASO 1: Abre GitHub y crea un repositorio vacío"
echo "   URL: https://github.com/new"
echo "   - Repository name: $REPO_NAME"
echo "   - Public (☑️ checked)"
echo "   - NO marques \"Add README\" ni nada"
echo "   - Crea el repo"
echo ""
echo "Presiona ENTER cuando hayas creado el repo en GitHub..."
read

# Configurar remoto y push
echo ""
echo "⏳ Pushendo código a GitHub..."
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Código pusheado correctamente"
else
  echo ""
  echo "❌ Error en el push. Verifica que:"
  echo "   - El usuario es: $GITHUB_USER"
  echo "   - El repo existe en GitHub"
  echo "   - Tienes credenciales de GitHub configuradas"
  echo ""
  echo "   Si es la primera vez, GitHub te pedirá autenticación."
  exit 1
fi

echo ""
echo "=========================================="
echo "PASO 2: Activar GitHub Pages"
echo "=========================================="
echo ""
echo "1. Abre: https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
echo "2. En 'Source', selecciona:"
echo "   - Deploy from branch"
echo "   - Branch: main / folder: /dist"
echo "3. Pulsa 'Save'"
echo ""
echo "Presiona ENTER cuando hayas activado Pages..."
read

echo ""
echo "✅ ¡Listo!"
echo ""
echo "Tu landing estará en:"
echo "   🔗 https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "(Puede tardar ~2 minutos en estar disponible)"
echo ""
echo "Comparte ese enlace con tu tutor e inversores. 🚀"
