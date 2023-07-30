import type { App } from 'vue'
import leaferUi from './index.vue'

leaferUi.install = function (app: App) {
  app.component('LfUi', leaferUi)
}

const lfUi = leaferUi

export { lfUi }
