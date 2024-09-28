/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      name: 'colophon',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      entry: {
        colophon: resolve(__dirname, 'src/lib.ts'),
      },
    },
  },
})
