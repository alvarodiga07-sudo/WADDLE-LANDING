import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',                          // rutas relativas → funciona en cualquier hosting
  server: { port: 4000, host: true },
});
