import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove base path for development
  server: {
    port: 5173,
    host: true,
    open: true
  }
})
