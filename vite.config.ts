import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
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
    assetsInlineLimit: 100000000, // บีบอัดและฝัง asset ทุกอย่างเข้าใน HTML
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    minify: 'esbuild', // บีบอัดไฟล์ให้เล็กที่สุด
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
