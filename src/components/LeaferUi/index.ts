import { Suspense, defineComponent, h } from 'vue'
import { view } from './view'
import { type ViewProps, viewProps } from './props'

export const leaferUi = defineComponent<ViewProps>({
  name: 'LeaferUi',
  inheritAttrs: false,
  props: viewProps,
  setup(props) {
    return () => h(
      'canvas',
      {
        id: '__leafer-ui_container',
      },
      h(
        Suspense,
        null,
        {
          default: () => h(
            view,
            {
              width: props.width,
              height: props.height,
            },
          ),
        },
      ),
    )
  },
})
