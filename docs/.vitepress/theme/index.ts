import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ApiTyping from './components/ApiTyping/index.vue'
import Layout from './Layout.vue'
import 'virtual:group-icons.css'
import 'uno.css'
import './var.css'
import './blur.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp: async ({ app }) => {
    app.component('ApiTyping', ApiTyping)
    if (!import.meta.env.SSR) {
      const Repl = (await import('./components/repl/index.vue')).default
      app.component('Repl', Repl)
      const MoreStarts = (await import('./components/MoreStarts.vue')).default
      app.component('MoreStart', MoreStarts)
    }
  },
} satisfies Theme
