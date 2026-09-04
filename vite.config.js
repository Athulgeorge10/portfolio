import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://athulgeorge10.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react()],
})
