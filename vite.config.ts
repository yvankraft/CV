import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CV/', // Chemin relatif pour GitHub Pages
  build: {
    outDir: 'dist',
  },
});