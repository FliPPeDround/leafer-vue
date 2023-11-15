import { defineComponent, h, onMounted, ref, renderSlot } from 'vue'
import { App } from 'leafer-ui'
import { createApp } from './../../renderer'

export default defineComponent({
  setup(_props, { slots }) {
    const canvas = ref<HTMLCanvasElement>()

    function mount() {
      const context = new App({
        view: canvas.value,
        width: 200,
        height: 200,
      })

      const app = createApp({
        render: () => renderSlot(slots, 'default'),
      })
      app.mount(context)
    }

    onMounted(mount)

    return () => h('canvas', { ref: canvas })
  },
})
