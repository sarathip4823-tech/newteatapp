
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/newteatapp/',
  plugins: [
    react(),
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
