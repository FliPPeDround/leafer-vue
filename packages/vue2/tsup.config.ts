import { bold, gray } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = `\n ☘️ ☘️ ☘️  ${bold('leafer-vu@2')} ${gray(`v${pkg.version}`)} \n`

  return {
    entry: ['index.ts', 'resolver.ts'],
    format: options.watch ? 'esm' : ['cjs', 'esm', 'iife'],
    target: 'node14',
    tsconfig: './tsconfig.json',
    clean: true,
    external: [
      'vue',
      'leafer-ui',
    ],
    minify: !options.watch,
    publicDir: 'types',
    onSuccess: async () => {
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
