import { bold, gray, green, yellow } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = `\n ${yellow('⬘')} ${green('⬗')} ${yellow('⬙')} ${green('⬖')}  ${bold('leafer-vue')} ${gray(`v${pkg.version}`)} \n`

  return {
    entry: ['./src/index.ts'],
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
    publicDir: 'src/types',
    onSuccess: async () => {
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
