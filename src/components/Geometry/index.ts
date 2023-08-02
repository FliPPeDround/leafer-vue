import { defineComponent, onUnmounted, watch } from 'vue'
import type { Geometry } from './types'
import { createGeometry } from './createGeometry'
import { useGetContainer, useGetPropsAndEventByAttrs } from '@/composables'
import { diff } from '@/utils'

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
    setup(props, { attrs }) {
      const instance = createGeometry(geometryName, props.config)
      const container = useGetContainer()
      container.add(instance)
      const { events } = useGetPropsAndEventByAttrs(attrs)
      watch(
        [
          () => props.config,
          () => useGetPropsAndEventByAttrs(attrs),
        ],
        (
          [newProps, { config: newConfig }],
          [oldProps, { config: oldConfig }],
        ) => {
          const allNewConfig = { ...newProps, ...newConfig }
          const allOldConfig = { ...oldProps, ...oldConfig }
          const diffConfig = diff(allOldConfig, allNewConfig)
          instance.set(diffConfig)
        },
      )

      Object.keys(events).forEach((key) => {
        const eventName = key as keyof typeof events
        instance.on(eventName, events[key])

        onUnmounted(() => {
          instance.off(eventName, events[key])
        })
      })
      return () => null
    },
  })
}
