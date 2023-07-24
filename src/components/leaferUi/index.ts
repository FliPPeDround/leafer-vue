import { defineComponent, h, nextTick } from 'vue'
import { Leafer, Rect } from 'leafer-ui'

export const leaferUi = defineComponent({
  name: 'LeaferUi',
  inheritAttrs: false,
  setup() {
    nextTick(() => {
      const ui_container = document.getElementById('__leafer-ui_container')
      console.log(ui_container)
      const leafer = new Leafer({
        view: '__leafer-ui_container',
      })

      const rect = new Rect({
        x: 100,
        y: 100,
        width: 200,
        height: 200,
        fill: '#32cd79',
        draggable: true,
      })

      leafer.add(rect)
    })
    return () => h(
      'div',
      {
        id: '__leafer-ui_container',
      },
      'ssss',
    )
  },
})
