import type { ElementWithProps } from '@/renderer/renderer'
import { useEffectUpdate, useGetPropsByAttrs } from '@/composables'
import { App } from 'leafer-ui'
import { defineComponent, h, onMounted, onUnmounted, ref, renderSlot } from 'vue'
import { createApp } from './../../renderer'

export const LeaferApp = defineComponent({
  inheritAttrs: false,
  setup(_props, { slots, expose, attrs }) {
    const canvas = ref<HTMLCanvasElement>()
    const config = useGetPropsByAttrs(attrs)

    let container: App
    function mount() {
      container = new App({
        ...config,
        view: canvas.value,
        // start: false,
        width: config.width || 800,
        height: config.height || 600,
      })

      const app = createApp({
        render: () => renderSlot(slots, 'default'),
      })
      app.mount(container as unknown as ElementWithProps)
    }

    function unMount() {
      container.destroy()
    }

    onMounted(() => {
      mount()
      useEffectUpdate(attrs, container as unknown as ElementWithProps)
      expose(container)
    })

    onUnmounted(unMount)

    return () => h('canvas', { ref: canvas })
  },
})
