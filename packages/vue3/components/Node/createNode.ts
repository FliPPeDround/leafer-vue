import { UI } from 'leafer-ui'
import type { Node } from './constants'

export function createNode(Node: Node, config: any) {
  return UI.one({
    tag: Node,
    ...config,
  })
}
