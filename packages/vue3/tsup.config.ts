import { bold, gray } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = `\n ☘️ ☘️ ☘️  ${bold('leafer-vue@3')} ${gray(`v${pkg.version}`)} \n`

  return {
    entry: ['index.ts', 'compiler.ts'],
    format: ['cjs', 'esm', 'iife'],
    target: 'node16',
    tsconfig: './tsconfig.json',
    clean: true,
    external: [
      'vue',
      'leafer-ui',
      '@vue/runtime-core',
    ],
    minify: !options.watch,
    dts: !options.watch,
    onSuccess: async () => {
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
