import { defineComponent, nextTick, renderSlot } from 'vue'
import { Leafer } from 'leafer-ui'
import { useEffectUpdate, useGetPropsByAttrs } from '@/composables'

export default defineComponent({
  inheritAttrs: false,
  async setup(_, { slots, expose, attrs }) {
    const config = useGetPropsByAttrs(attrs)
    await nextTick()

    const container = new Leafer({
      ...config,
      view: '__leafer-ui_container',
    })
    useEffectUpdate(attrs, container!)

    // eslint-disable-next-line vue/no-expose-after-await
    expose({ container })

    return () => renderSlot(slots, 'default') || null
  },
})
