import { useEffectUpdate, useGetPropsByAttrs, useInsertBefore, useSomeNode } from '@/composables'
import { App } from 'leafer-ui'
import { defineComponent, onMounted } from 'vue-demi'

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

    return () => slots.default?.()
  },
})
