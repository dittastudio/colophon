import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: {
        colophon: resolve(__dirname, 'src/main.ts'),
      },
      name: 'colophon',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
  },
})
