import { defineComponent, inject, provide, renderSlot } from 'vue'
import { Frame, type Leafer } from 'leafer-ui'

export const leaferframe = defineComponent({
  name: 'LeaferFrame',
  inheritAttrs: false,
  propos: ['width', 'height', 'fill', 'overflow'],
  setup(props, { slots }) {
    const frame = new Frame(props)
    const leafer = inject<Leafer>('leafer')!
    leafer.add(frame)
    provide('frame', frame)
    return () => renderSlot(slots, 'default')
  },
})
