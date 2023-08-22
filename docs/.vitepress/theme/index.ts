import DefaultTheme from 'vitepress/theme'

import Repl from '../components/repl/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.component('Repl', Repl)
  },
}
