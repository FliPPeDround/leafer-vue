import { defineComponent, h, onMounted, ref, renderSlot } from 'vue'
import { Leafer } from 'leafer-ui'
import { createApp } from './../../renderer'

export default defineComponent({
  setup(props, { slots, expose }) {
    const canvas = ref<HTMLCanvasElement>()

    function mount() {
      const context = new Leafer({ view: canvas.value })

      const app = createApp({
        render: () => renderSlot(slots, 'default'),
      })
      app.mount(context)
    }

    onMounted(mount)

    return () => h('canvas', { ref: canvas })
  },
})
