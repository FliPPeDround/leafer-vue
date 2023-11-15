import { UI } from 'leafer-ui'
import { createRenderer } from 'vue'
import type { IUI } from '@leafer-ui/interface'
import { useLogger } from '@/composables/useLogger'

function getEventNameByAttrName(attrName: string) {
  return attrName
    .slice(2)
    .replace(/([A-Z])/g, (_, letter, index) => index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`)
}

const { log } = useLogger()

export const renderer = createRenderer<IUI, IUI>({
  createElement(type) {
    return UI.one({ tag: type })
  },
  patchProp(el, key, _prevValue, nextValue) {
    if (key.startsWith('on'))
      el.on(getEventNameByAttrName(key), nextValue)

    el[key] = nextValue
  },
  insert(el, parent) {
    if (el && parent)
      parent.add(el)
  },
  remove(el) {
    if (el && el.parent)
      el.parent.remove(el)
  },
  createText(text) {
    if (text.trim()) {
      log([
        {
          content: ' 不支持直接写入文本，请使用',
        },
        {
          color: '#6eacf8',
          backgroundColor: '#222222',
          content: `<Text text="${text.trim()}" />`,
        },
        {
          content: '代替',
        },
      ])
    }
    return null as unknown as IUI
  },
  createComment() {
    return null as unknown as IUI
  },
  setText(node, text) {

  },
  setElementText(node, text) {

  },
  parentNode(node) {
    return node?.parent as IUI
  },
  nextSibling(node) {
    return null
  },
})
