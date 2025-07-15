import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        especialidades: resolve(__dirname, 'especialidades.html'),
        pesquisas: resolve(__dirname, 'pesquisas.html'),
        congressos: resolve(__dirname, 'congressos.html'),
        contato: resolve(__dirname, 'contato.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
