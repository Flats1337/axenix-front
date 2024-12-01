import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwind()
      ]
    }
  },
  server: {
    proxy: {
      '^/api.*': 'http://127.0.0.1:13337',
    }
  },
})
