import { defineComponent, getCurrentInstance, onMounted, onUnmounted, renderSlot } from 'vue'
import { Leafer } from 'leafer-ui'
import { useCreateEvents, useEffectUpdate, useGetContainer, useGetParentNodeName, useGetPropsAndEventByAttrs } from '@/composables'

export const lfLeafer = defineComponent({
  name: 'LfLeafer',
  inheritAttrs: false,
  setup(_, { slots, expose, attrs }) {
    const parentNodeName = useGetParentNodeName()
    const { events, config } = useGetPropsAndEventByAttrs(attrs)
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
        getCurrentInstance()?.vnode.el!.parentNode.prepend(canvas)
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

    expose(container)

    return () => renderSlot(slots, 'default') || null
  },
})
