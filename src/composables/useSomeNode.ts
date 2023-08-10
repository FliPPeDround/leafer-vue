import type { VNode } from 'vue'

interface VNodeType {
  name: string
  props: []
  setup: () => void
}
export function useSomeNode(slots: any, nodeName: string, name: string) {
  const internal = slots && slots.default && slots.default()

  if (internal && internal?.length > 0) {
    const someNode = internal.some((node: VNode) => (node.type as VNodeType).name === nodeName)
    if (!someNode)
      throw new Error(`${name} must have a ${nodeName} child`)
  }
}
