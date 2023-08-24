import { defineComponent, onMounted, onUnmounted, renderSlot } from 'vue'
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
    const { events, config } = useGetPropsAndEventByAttrs(attrs)
    let container: Leafer
    if (parentNodeName !== 'LfApp') {
      if (!(config?.fullScreen || config?.['full-screen'])) {
        const canvas = document.createElement('canvas')
        document.body.appendChild(canvas)
        config.view = canvas
        config.start = false
        onMounted(() => {
          useInsertBefore(canvas)
          container.start()
        })
      }
      else {
        config.view = window
      }
      container = new Leafer(config)

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

    expose(container)

    return () => renderSlot(slots, 'default') || null
  },
})
