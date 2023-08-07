import { defineComponent } from 'vue'
import type { Container } from './types'
import { createContainer } from './createContainer'
import { useCreateEvents, useEffectUpdate, useGetContainer, useGetPropsAndEventByAttrs } from '@/composables'

export function lfContainer(containerName: Container) {
  return defineComponent({
    name: `lf${containerName}`,
    inheritAttrs: false,
    setup(_, { slots, expose, attrs }) {
      const { events, config } = useGetPropsAndEventByAttrs(attrs)
      const instance = createContainer(containerName, config)
      const container = useGetContainer()
      container.add(instance)
      expose(instance)

      useEffectUpdate(attrs, instance)
      useCreateEvents(events, instance)

      return () => slots.default?.()
    },
  })
}
