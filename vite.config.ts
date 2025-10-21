import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: '.output/public',
    lib: {
      entry: path.resolve(__dirname, 'src/entry.ts'),.
      name: 'SpalopiaWidget',
      fileName: () => 'spalopia-widget.js',
      formats: ['umd'],
    },
  },
})

