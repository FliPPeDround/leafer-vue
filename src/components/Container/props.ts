import type { PropType } from 'vue'
import type { Paint } from 'leafer-ui'
import type { Container } from './types'

const containerProps = {
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  draggable: {
    type: Boolean,
  },
  fill: {
    type: [String, Array] as PropType<string | typeof Paint | typeof Paint[]>,
  },
  overflow: {
    type: String as PropType<'show' | 'hide'>,
  },
}

const PropsConstructors = {
  Frame: containerProps,
  Box: containerProps,
  Group: {},
}

export function createContainerProps(container: Container) {
  return PropsConstructors[container]
}
