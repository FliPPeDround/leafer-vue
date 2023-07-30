import { defineComponent, watch } from 'vue'
import { createContainerProps } from './props'
import type { Container } from './types'
import { createContainer } from './createContainer'
import { useGetContainer } from '@/composables'

export function lfContainer(containerName: Container) {
  return defineComponent({
    name: `lg${containerName}`,
    props: createContainerProps(containerName) as unknown as undefined,
    setup(props, { slots, expose }) {
      const instance = createContainer(containerName, props)
      watch(
        props,
        value => instance.set(value),
      )
      const container = useGetContainer()
      container.add(instance)
      expose({ container: instance })

      return () => slots.default?.()
    },
  })
}
