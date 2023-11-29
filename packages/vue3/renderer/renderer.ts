import type { IUI } from '@leafer-ui/interface'
import { UI } from 'leafer-ui'
import { createRenderer } from 'vue'
import { Comment } from './commentTag'
import { useLogger } from '@/composables/useLogger'

function getEventNameByAttrName(attrName: string) {
  return attrName
    .slice(2)
    .replace(/([A-Z])/g, (_, letter, index) => index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`)
}

const { log } = useLogger()

export const renderer = createRenderer<IUI, IUI>({
  createElement(type, _?, _1?, props?) {
    return UI.one({ tag: type, ...props })
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
    el?.destroy()
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
          // lightBackgroundColor: '#f3f9ff',
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
    return new Comment()
  },
  setText() { },
  setElementText() { },
  parentNode(node) {
    return node?.parent as IUI
  },
  nextSibling(node) {
    if (!node)
      return null

    const children = node?.parent?.children || [node]
    if (children?.length === 1)
      return null

    const index = children.findIndex(_node => _node.innerId === node.innerId)
    if (children.length <= index + 1)
      return null

    return children[index + 1] ?? null
  },
})
