import { Suspense, defineComponent, h } from 'vue'
import LeaferView from './_view'

export const lfUi = defineComponent({
  name: 'LfUi',
  setup(_, { attrs, slots }) {
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
                { ...attrs },
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
