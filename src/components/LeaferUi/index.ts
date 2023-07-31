import type { PropType } from 'vue'
import { Suspense, defineComponent, h } from 'vue'
import LeaferView from './_view'
import type { ViewProps } from './props'

export const lfUi = defineComponent({
  props: {
    config: {
      type: Object as PropType<ViewProps>,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    return () => {
      return h(
        'canvas',
        { id: '__leafer-ui_container' },
        h(
          Suspense,
          {},
          {
            default: () =>
              h(
                LeaferView,
                { config: props.config },
                {
                  default: () => slots.default && slots.default(),
                },
              ),
          },
        ),
      )
    }
  },
})
