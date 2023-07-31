import { defineComponent, watch } from 'vue'
import { PointerEvent } from 'leafer-ui'
import type { Geometry } from './types'
import { createGeometry } from './createGeometry'
import { useGetContainer } from '@/composables'

export function lfGeometry(geometryName: Geometry) {
  return defineComponent({
    name: `lg${geometryName}`,
    inheritAttrs: true,
    props: {
      config: {
        type: Object,
        default: () => ({}),
        required: true,
      },
    },
    emits: ['enter', 'leave'],
    setup(props, { emit, attrs }) {
      const instance = createGeometry(geometryName, props.config)
      const container = useGetContainer()
      container.add(instance)
      watch(
        () => props.config,
        value => instance.set(value),
      )

      instance.on(PointerEvent.ENTER, () => emit('enter'))
      return () => null
    },
  })
}
