import type { ElementWithProps } from '@/renderer/renderer'
import { useEffectUpdate, useGetPropsByAttrs } from '@/composables'
import { App } from 'leafer-ui'
import { defineComponent, h, markRaw, onMounted, onUnmounted, renderSlot, shallowRef } from 'vue'
import { createApp } from './../../renderer'

export const LeaferApp = defineComponent({
  inheritAttrs: false,
  setup(_props, { slots, expose, attrs }) {
    const canvas = shallowRef<HTMLCanvasElement>()
    const container = shallowRef<App>()
    const config = useGetPropsByAttrs(attrs)

    function mount() {
      const context = new App({
        ...config,
        view: canvas.value,
        width: config.width || 800,
        height: config.height || 600,
      })

      container.value = markRaw(context)
      const app = createApp({
        render: () => renderSlot(slots, 'default'),
      })
      app.mount(container.value as unknown as ElementWithProps)
    }

    function unMount() {
      container.value!.destroy()
    }

    onMounted(() => {
      mount()
      useEffectUpdate(attrs, container.value as unknown as ElementWithProps)
    })

    onUnmounted(unMount)
    expose({ app: container })

    return () => h('canvas', { ref: canvas })
  },
})
