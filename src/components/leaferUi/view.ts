import { defineComponent, nextTick } from 'vue'
import { Leafer, Rect } from 'leafer-ui'
import { type ViewProps, viewProps } from './props'

export const view = defineComponent<ViewProps>({
  name: 'LeaferView',
  inheritAttrs: false,
  props: viewProps,
  async setup(props, { slots }) {
    const config = {
      width: props.width,
      height: props.height,
    }

    await nextTick()
    const leafer = new Leafer({
      view: '__leafer-ui_container',
      ...config,
    })

    const rect = new Rect({
      width: 200,
      height: 200,
      fill: '#32cd79',
      draggable: true,
    })

    leafer.add(rect)

    return () => slots.default?.()
  },
})
