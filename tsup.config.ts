import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { bold, gray, green, yellow } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

function moveTypes() {
  const src = resolve(__dirname, 'src/types/index.d.ts')
  const dist = resolve(__dirname, 'dist/index.d.ts')

  copyFileSync(src, dist)
}

export default defineConfig ((options) => {
  const buildBanner = `\n ${yellow('⬘')} ${green('⬗')} ${yellow('⬙')} ${green('⬖')}  ${bold('leafer-vue')} ${gray(`v${pkg.version}`)} \n`

  return {
    entry: ['./src/index.ts', './src/types/index.d.ts'],
    format: options.watch ? 'esm' : ['cjs', 'esm', 'iife'],
    target: 'node14',
    splitting: true,
    tsconfig: './tsconfig.json',
    clean: true,
    external: [
      'vue',
      'leafer-ui',
    ],
    minify: !options.watch,
    onSuccess: async () => {
      moveTypes()
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
