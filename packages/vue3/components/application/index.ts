import { defineComponent, h, onMounted, onUnmounted, ref, renderSlot } from 'vue'
import { App } from 'leafer-ui'
import { createApp } from './../../renderer'
import { useEffectUpdate, useGetPropsByAttrs } from '@/composables'

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
        start: false,
      })

      const app = createApp({
        render: () => renderSlot(slots, 'default'),
      })
      // @ts-expect-error leafer APP是一个dom节点
      app.mount(container)
      container.start()
    }

    function unMount() {
      container.destroy()
    }

    onMounted(() => {
      mount()
      // @ts-expect-error leafer APP是一个dom节点
      useEffectUpdate(attrs, container)
      expose({ container })
    })

    onUnmounted(unMount)

    return () => h('canvas', { ref: canvas })
  },
})
