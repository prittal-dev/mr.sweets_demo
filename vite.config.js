import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    // Split vendor libraries into separate cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — rarely changes, stays cached by browser
          'vendor-react': ['react', 'react-dom'],
          // Framer Motion — large, separate chunk
          'vendor-framer': ['framer-motion'],
          // Lucide icons
          'vendor-lucide': ['lucide-react'],
        }
      }
    },
    // Inline assets smaller than 4KB
    assetsInlineLimit: 4096,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,   // Remove console.log in production
        drop_debugger: true,
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Chunk size warning at 500KB
    chunkSizeWarningLimit: 500,
  }
})
