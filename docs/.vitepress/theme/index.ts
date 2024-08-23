import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import Layout from './Layout.vue'
import ApiTyping from './components/ApiTyping/index.vue'

import 'uno.css'
import './var.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp: async ({ app }) => {
    app.component('ApiTyping', ApiTyping)
    onMounted(async () => {
      const Repl = (await import('./components/repl/index.vue')).default
      app.component('Repl', Repl)
    })
  },
}
