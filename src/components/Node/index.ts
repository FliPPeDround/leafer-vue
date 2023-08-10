import { defineComponent, onUnmounted } from 'vue'
import type { Node } from './constants'
import { createNode } from './createNode'
import { useCreateEvents, useEffectUpdate, useGetContainer, useGetPropsAndEventByAttrs } from '@/composables'

export function lfNode(NodeName: Node) {
  return defineComponent({
    name: `Lf${NodeName}`,
    inheritAttrs: false,
    setup(_, { attrs, expose }) {
      const { events, config } = useGetPropsAndEventByAttrs(attrs)
      const instance = createNode(NodeName, config)
      const container = useGetContainer()
      container.add(instance)
      expose(instance)

      useEffectUpdate(attrs, instance)
      useCreateEvents(events, instance)

      onUnmounted(() => {
        container.remove(instance)
      })

      return () => null
    },
  })
}
