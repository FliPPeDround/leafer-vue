/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    if (!import.meta.env.SSR) {
      const Repl = (await import('../components/repl/index.vue')).default
      app.component('Repl', Repl)
    }
  },

}
