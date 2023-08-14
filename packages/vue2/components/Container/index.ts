import { defineComponent, getCurrentInstance, h, onUnmounted } from 'vue-demi'
import type { Container } from './types'
import { createContainer } from './createContainer'
import { useCreateEvents, useEffectUpdate, useGetContainer, useGetParentNodeName, useGetPropsAndEventByAttrs } from '@/composables'

export function lfContainer(containerName: Container) {
  return defineComponent({
    name: `Lf${containerName}`,
    inheritAttrs: false,
    setup(_, { slots, expose, attrs }) {
      useGetParentNodeName()
      const allAttrs = getCurrentInstance()?.proxy?.$attrs || {}
      const { events, config } = useGetPropsAndEventByAttrs(allAttrs)
      const instance = createContainer(containerName, config)
      const container = useGetContainer()
      container.add(instance)
      expose({ container: instance })

      useEffectUpdate(attrs, instance)
      useCreateEvents(events, instance)

      onUnmounted(() => {
        container.remove(instance)
      })

      return () => h('template', slots.default?.())
    },
  })
}
