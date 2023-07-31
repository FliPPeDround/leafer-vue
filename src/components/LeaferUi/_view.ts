import type { PropType } from 'vue'
import { defineComponent, nextTick, renderSlot } from 'vue'
import { Leafer } from 'leafer-ui'
import type { ViewProps } from './props'

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<ViewProps>,
      default: () => ({}),
    },
  },
  async setup(props, { slots, expose }) {
    await nextTick()
    const container = new Leafer({
      ...props.config,
      view: '__leafer-ui_container',
    })

    // eslint-disable-next-line vue/no-expose-after-await
    expose({ container })

    return () => renderSlot(slots, 'default') || null
  },
})
