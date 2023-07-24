import { defineConfig } from 'tsup'

export default defineConfig ((options) => {
  return {
    entry: ['./src/index.ts'],
    format: options.watch ? 'esm' : ['cjs', 'esm', 'iife'],
    target: 'node14',
    splitting: true,
    // dts: true,
    tsconfig: './tsconfig.json',
    clean: true,
    external: [
      'vue',
      'leafer-ui',
    ],
    minify: !options.watch,
  }
})
