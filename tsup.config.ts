import { bold, gray, green, yellow } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = ` ${yellow('⬘')} ${green('⬗')} ${yellow('⬙')} ${green('⬖')}  ${bold('leafer-vue')} ${gray(`v${pkg.version}`)} \n`
  // eslint-disable-next-line no-console
  console.log(buildBanner)

  return {
    entry: ['./src/index.ts'],
    format: options.watch ? 'esm' : ['cjs', 'esm', 'iife'],
    target: 'node14',
    splitting: true,
    dts: true,
    tsconfig: './tsconfig.json',
    clean: true,
    external: [
      'vue',
      'leafer-ui',
    ],
    minify: !options.watch,
  }
})
