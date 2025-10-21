import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    // Directorio de salida, coincidiendo con lo que usa Nuxt y el workflow.
    outDir: '.output/public',
    lib: {
      // El punto de entrada de nuestra librería (el script que se embeberá).
      entry: path.resolve(__dirname, 'src/entry.ts'),
      // El nombre global que expondrá la librería.
      name: 'SpalopiaWidget',
      // El nombre del archivo de salida.
      fileName: 'spalopia-widget',
      // El formato de salida (UMD es universal y funciona en navegadores).
      formats: ['umd'],
    },
  },
})
