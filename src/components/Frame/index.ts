import { Frame } from 'leafer-ui'
import { defineComponent, renderSlot } from 'vue'
import { useGetContainer } from '@/composables'

export const leaferframe = defineComponent({
  name: 'LeaferFrame',
  inheritAttrs: false,
  propos: ['width', 'height', 'fill', 'overflow', 'test'],
  setup(props, { slots }) {
    const frame = new Frame(props)
    const leafer = useGetContainer()
    leafer.add(frame)
    return () => renderSlot(slots, 'default')
  },
})
