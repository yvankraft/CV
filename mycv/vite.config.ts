import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site at https://yvankraft.github.io/CV/
  // so we need a base of '/CV/' for correct asset paths.
  base: '/CV/',
  plugins: [tailwindcss()],
})
