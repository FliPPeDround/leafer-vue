import antfu from '@antfu/eslint-config'

export default await antfu({
  ignores: [
    '*.global.js',
    'build',
    'node_modules',
    '.vitepress',
    'docs/.vitepress/cache/deps/*.*',
  ],
})
