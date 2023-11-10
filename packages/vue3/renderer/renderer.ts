import { Rect, Text } from 'leafer-ui'
import { createRenderer } from 'vue'

// export function createRenderer() {

// }

export const renderer = createRenderer<Rect, Rect>({
  createElement(type) {
    let element
    switch (type) {
      case 'Rect':
        element = new Rect({
          width: 15,
          height: 15,
          fill: 'rgb(50,205,121)',
        })
        break

      default:
        throw new Error(`无${type}`)
        break
    }
    return element
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case 'fill' :
        el.fill = nextValue
        break

      case 'x':
        el.x = nextValue
        break

      case 'y':
        el.y = nextValue
        break

      default:
        break
    }
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
    return node.parent as unknown as Rect
  },
  nextSibling(node) {
    return null
  },
})
