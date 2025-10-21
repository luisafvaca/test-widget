import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  // ¡CAMBIO CLAVE! Añadimos esta sección para solucionar el error de 'process'.
  // Esto reemplazará `process.env.NODE_ENV` por `"production"` en el código final.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    // El directorio de salida, relativo a la raíz del proyecto.
    outDir: '.output/public',
    lib: {
      // El punto de entrada para la construcción de la librería.
      entry: path.resolve(__dirname, 'src/entry.ts'),
      // El nombre de la variable global que expondrá tu librería.
      name: 'SpalopiaWidget',
      // El nombre del archivo de salida (sin extensión).
      // Usamos una función para asegurar que el nombre sea siempre el mismo.
      fileName: () => 'spalopia-widget.js',
      // El formato de salida. 'umd' es el más compatible para ser usado con <script>.
      formats: ['umd'],
    },
  },
})

