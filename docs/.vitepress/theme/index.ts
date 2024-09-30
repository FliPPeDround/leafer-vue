import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import ApiTyping from './components/ApiTyping/index.vue'
import Layout from './Layout.vue'

import 'uno.css'
import './var.css'

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
    }
  },
}
