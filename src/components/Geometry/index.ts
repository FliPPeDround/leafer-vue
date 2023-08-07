import { defineComponent } from 'vue'
import type { Geometry } from './constants'
import { createGeometry } from './createGeometry'
import { useCreateEvents, useEffectUpdate, useGetContainer, useGetPropsAndEventByAttrs } from '@/composables'

export function lfGeometry(geometryName: Geometry) {
  return defineComponent({
    name: `lf${geometryName}`,
    inheritAttrs: false,
    setup(_, { attrs, expose }) {
      const { events, config } = useGetPropsAndEventByAttrs(attrs)
      const instance = createGeometry(geometryName, config)
      const container = useGetContainer()
      container.add(instance)
      expose(instance)

      useEffectUpdate(attrs, instance)
      useCreateEvents(events, instance)

      return () => null
    },
  })
}
