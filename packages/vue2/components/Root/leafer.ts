import { defineComponent, getCurrentInstance, onMounted, onUnmounted } from 'vue-demi'
import { Leafer } from 'leafer-ui'
import {
  useCreateEvents,
  useEffectUpdate,
  useGetContainer,
  useGetParentNodeName,
  useGetPropsAndEventByAttrs,
  useInsertBefore,
} from '@/composables'

export const lfLeafer = defineComponent({
  name: 'LfLeafer',
  inheritAttrs: false,
  setup(_, { slots, expose, attrs }) {
    const parentNodeName = useGetParentNodeName()
    const allAttrs = getCurrentInstance()?.proxy?.$attrs || {}
    const { events, config } = useGetPropsAndEventByAttrs(allAttrs)
    let container: Leafer
    if (parentNodeName !== 'LfApp') {
      const canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
      container = new Leafer({
        ...config,
        view: canvas,
        start: false,
      })

      onMounted(() => {
        useInsertBefore(canvas)
        container.start()
      })

      onUnmounted(() => {
        container.destroy()
      })
    }
    else {
      container = new Leafer(config)
      const appContainer = useGetContainer()
      appContainer.add(container)

      onUnmounted(() => {
        appContainer.remove(container)
      })
    }
    useEffectUpdate(attrs, container)
    useCreateEvents(events, container)

    expose({ container })

    return () => slots.default?.()
  },
})
