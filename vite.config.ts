import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: './',
  server: {
    allowedHosts: [
      'devserver-main--benevolent-piroshki-5d907a.netlify.app'
    ]
  }
})
