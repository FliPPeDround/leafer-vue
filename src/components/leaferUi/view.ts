import { defineComponent, nextTick, provide, renderSlot } from 'vue'
import { Leafer, Rect } from 'leafer-ui'
import { type ViewProps, viewProps } from './props'

export const view = defineComponent<ViewProps>({
  name: 'LeaferView',
  inheritAttrs: false,
  props: viewProps,
  async setup(props, { slots }) {
    await nextTick()
    const leafer = new Leafer({
      ...props,
      view: '__leafer-ui_container',
    })
    provide('leafer', leafer)

    const rect = new Rect({
      width: 200,
      height: 200,
      fill: '#32cd79',
      draggable: true,
    })

    leafer.add(rect)

    return () => renderSlot(slots, 'default')
  },
})
