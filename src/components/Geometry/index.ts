import { defineComponent } from 'vue'
import { createContainerProps } from './props'
import type { Container } from './types'
import { useCreateContainer } from './useCreateContainer'
import { useGetContainer } from '@/composables'

export function lfContainer(containerName: Container) {
  return defineComponent({
    name: `lg${containerName}`,
    props: createContainerProps(containerName) as unknown as undefined,
    setup(props, { slots, expose }) {
      const instance = useCreateContainer(containerName, props)
      const container = useGetContainer()
      expose({ container })
      container.add(instance)
      return () => slots.default?.()
    },
  })
}
