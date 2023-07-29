import type { PropType } from 'vue'
import type { Paint } from 'leafer-ui'
import type { Container } from './types'

export function createContainerProps(container: Container) {
  const baseProps = {
    with: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  }
  const fillProps = {
    type: [String, Array] as PropType<string | typeof Paint | typeof Paint[]>,
  }
  const overflowProps = {
    type: String as PropType<'show' | 'hide'>,
  }
  if (container === 'Frame') {
    return {
      ...baseProps,
      fill: fillProps,
      overflow: overflowProps,
    }
  }
  if (container === 'Box') {
    return {
      ...baseProps,
      overflow: overflowProps,
    }
  }
  if (container === 'Group')
    return {}
}
