import type { Node } from './constants'
import { UI } from 'leafer-ui'

export function createNode(Node: Node, config: any) {
  return UI.one({
    tag: Node,
    ...config,
  })
}
