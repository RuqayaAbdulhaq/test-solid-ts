import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
    // Output directory for your build
    outDir: 'dist',
    // Ensures the widget is compiled into a single JS file
    lib: {
      entry: './src/components/chat-widget.tsx',
      name: 'chatWidget',
      formats: ['iife'], // Compiles to an immediately-invoked function expression
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['solid-js'],
      output: {
        // Global variables for externalized deps
        globals: {
          'solid-js': 'Solid',
        },
      },
    },
  },
})
