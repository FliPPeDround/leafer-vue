import { defineComponent, h, onMounted, onUnmounted, ref, renderSlot } from 'vue'
import { App } from 'leafer-ui'
import { createApp } from './../../renderer'

export const LeaferApp = defineComponent({
  setup(_props, { slots }) {
    const canvas = ref<HTMLCanvasElement>()
    let context: App
    function mount() {
      context = new App({
        width: 500,
        height: 500,
        view: canvas.value,
        start: false,
      })

      const app = createApp({
        render: () => renderSlot(slots, 'default'),
      })
      app.mount(context)
      context.start()
    }

    function unMount() {
      context.destroy()
    }

    onMounted(mount)
    onUnmounted(unMount)

    return () => h('canvas', { ref: canvas })
  },
})
