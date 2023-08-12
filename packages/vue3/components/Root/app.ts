import { defineComponent, onMounted, renderSlot } from 'vue'
import { App } from 'leafer-ui'
import { useEffectUpdate, useGetPropsByAttrs, useInsertBefore, useSomeNode } from '@/composables'

export const lfApp = defineComponent({
  name: 'LfApp',
  inheritAttrs: false,
  setup(_, { slots, expose, attrs }) {
    useSomeNode(slots, 'LfLeafer', 'LfApp')
    const config = useGetPropsByAttrs(attrs)
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const container = new App({
      ...config,
      view: canvas,
      start: false,
    })

    onMounted(() => {
      useInsertBefore(canvas)
      container.start()
    })

    useEffectUpdate(attrs, container)

    expose(container)

    return () => renderSlot(slots, 'default') || null
  },
})
