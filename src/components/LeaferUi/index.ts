import type { App } from 'vue'
import leaferUi from './index.vue'

leaferUi.install = function (app: App) {
  app.component(leaferUi.name, leaferUi)
}

export { leaferUi }
