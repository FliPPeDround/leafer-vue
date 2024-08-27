import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'
import ApiTyping from './components/ApiTyping/index.vue'
import Repl from './components/repl/index.vue'

import 'uno.css'
import './var.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp: async ({ app }) => {
    app.component('ApiTyping', ApiTyping)
    app.component('Repl', Repl)
  },
}
