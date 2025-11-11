import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Emico/',
  server: {
    port: 5123,
    watch: {
      usePolling: true,
      interval: 1000,
    },
    host: true,
    strictPort: true,
  },
})
