import { defineComponent, watch } from 'vue'
import type { Geometry } from './types'
import { createGeometry } from './createGeometry'
import { useGetContainer } from '@/composables'

export function lfGeometry(geometryName: Geometry) {
  return defineComponent({
    name: `lg${geometryName}`,
    props: {
      config: {
        type: Object,
        default: () => ({}),
        required: true,
      },
    },
    setup(props) {
      const instance = createGeometry(geometryName, props.config)
      const container = useGetContainer()
      container.add(instance)
      watch(
        () => props.config,
        value => instance.set(value),
      )
      return () => null
    },
  })
}
