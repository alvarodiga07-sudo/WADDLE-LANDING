import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WADDLE-LANDING/',            // GitHub Pages subfolder
  build: { outDir: 'docs', emptyOutDir: true },
  server: { port: 4000, host: true },
});
