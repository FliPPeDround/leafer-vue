import { defineComponent } from 'vue'
import { useInjectContainer } from '../../composables'
import { createContainerProps } from './props'
import type { Container } from './types'
import { useCreateContainer } from './useCreateContainer'

export function lfContainer(container: Container) {
  return defineComponent({
    name: container,
    props: createContainerProps(container),
    setup(props, { slots }) {
      const instance = useCreateContainer(container, props)
      console.log(useInjectContainer())
      return () => slots.default?.()
    },
  })
}
