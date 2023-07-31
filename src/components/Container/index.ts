import { defineComponent, watch } from 'vue'
import type { Container } from './types'
import { createContainer } from './createContainer'
import { useGetContainer } from '@/composables'

export function lfContainer(containerName: Container) {
  return defineComponent({
    name: `lg${containerName}`,
    props: {
      config: {
        type: Object,
        default: () => ({}),
        required: containerName === 'Group',
      },
    },
    setup(props, { slots, expose }) {
      const instance = createContainer(containerName, props.config)
      watch(
        () => props.config,
        value => instance.set(value),
      )
      const container = useGetContainer()
      container.add(instance)
      expose({ container: instance })

      return () => slots.default?.()
    },
  })
}
