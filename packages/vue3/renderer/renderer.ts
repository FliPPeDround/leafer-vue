import { Text, UI } from 'leafer-ui'
import { createRenderer } from 'vue'
import type { IUI } from '@leafer-ui/interface'

function getEventNameByAttrName(attrName: string) {
  return attrName
    .slice(2)
    .replace(/([A-Z])/g, (_, letter, index) => index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`)
}

export const renderer = createRenderer<IUI, IUI>({
  createElement(type) {
    return UI.one({ tag: type })
  },
  patchProp(el, key, prevValue, nextValue) {
    if (key.startsWith('on'))
      el.on(getEventNameByAttrName(key), nextValue)

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
