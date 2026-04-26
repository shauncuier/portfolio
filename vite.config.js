import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor libraries into separate cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':   ['react', 'react-dom'],
          'vendor-motion':  ['framer-motion'],
          'vendor-icons':   ['lucide-react', 'react-icons'],
          'vendor-forms':   ['@formspree/react'],
          'vendor-countup': ['react-countup'],
        },
      },
    },
    // Raise warning limit - we intentionally split above
    chunkSizeWarningLimit: 600,
    // Minify with esbuild (default, fastest)
    minify: 'esbuild',
    // Enable source maps only in dev
    sourcemap: false,
    // Target modern browsers for smaller output
    target: 'es2020',
  },
})

