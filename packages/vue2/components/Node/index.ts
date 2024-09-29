import type { Node } from './constants'
import { useCreateEvents, useEffectUpdate, useGetContainer, useGetPropsAndEventByAttrs } from '@/composables'
import { defineComponent, getCurrentInstance, onUnmounted } from 'vue-demi'
import { createNode } from './createNode'

export function lfNode(NodeName: Node) {
  return defineComponent({
    name: `Lf${NodeName}`,
    inheritAttrs: false,
    setup(_, { attrs, expose }) {
      const allAttrs = getCurrentInstance()?.proxy?.$attrs || {}
      const { events, config } = useGetPropsAndEventByAttrs(allAttrs)
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
