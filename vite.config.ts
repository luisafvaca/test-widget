export default defineConfig({
  plugins: [ vue() ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: '.output/public',
    lib: {
      entry: path.resolve(__dirname, 'src/entry.ts'),
      name: 'SpalopiaWidget',
      fileName: () => 'spalopia-widget.js',
      formats: ['umd'],
    },
  },
})