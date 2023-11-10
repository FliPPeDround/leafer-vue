import { Text, UI } from 'leafer-ui'
import { createRenderer } from 'vue'
import type { IUI } from '@leafer-ui/interface'

export const renderer = createRenderer<IUI, IUI>({
  createElement(type) {
    return UI.one({ tag: type })
  },
  patchProp(el, key, prevValue, nextValue) {
    el[key] = nextValue
  },
  insert(el, parent, anchor) {
    if (el && parent)
      parent.add(el)
  },
  remove(el) {
    if (el && el.parent)
      el.parent.remove(el)
  },
  createText(text) {
    return new Text({ text })
  },
  createComment(text) {
    return new Text({ text })
  },
  setText(node, text) {

  },
  setElementText(node, text) {

  },
  parentNode(node) {
    return node.parent as IUI
  },
  nextSibling(node) {
    return null
  },
})
