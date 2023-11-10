import { UI } from 'leafer-ui'
import { createRenderer } from 'vue'

// export function createRenderer() {

// }

export const renderer = createRenderer<UI, UI>({
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
    return new Error('a') as unknown as UI
  },
  createComment(text) {
    return new Error('a') as unknown as UI
  },
  setText(node, text) {

  },
  setElementText(node, text) {

  },
  parentNode(node) {
    return node.parent
  },
  nextSibling(node) {
    return null
  },
})

// export function createRenderer(options: { prefix?: string } = {}) {
//   const { createElement, setText, ...nodeOps } = _nodeOps
//   const { prefix = 'pixi' } = options
//   const rendererOptions = rendererWithCapture({
//     createElement: (...args) => createElement(prefix, ...args),
//     setElementText: (...args) => setText(prefix, ...args),
//     setText: (...args) => setText(prefix, ...args),
//     patchProp,
//     ...nodeOps,
//   })
//   return _createRenderer<Container, Container>(rendererOptions)
// }

// export const createApp = renderer.createApp
