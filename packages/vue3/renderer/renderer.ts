import type { IUI } from '@leafer-ui/interface'
import { UI } from 'leafer-ui'
import { camelize, createRenderer, markRaw } from '@vue/runtime-core'
import { Empty } from '../tags/Empty'
import { useLogger } from '@/composables/useLogger'
import { getEventNameByAttrName, isOn } from '@/utils'

const { log } = useLogger()

export interface ElementWithProps extends IUI {
  [key: string]: any
}

export const renderer = createRenderer<IUI, ElementWithProps>({
  createElement(tag) {
    const element = UI.one({ tag })
    markRaw(element)
    return element
  },
  patchProp(el, key, _prevValue, nextValue) {
    key = camelize(key)
    if (isOn(key)) {
      const eventName = getEventNameByAttrName(key)
      if (key.endsWith('Once'))
        el.once(eventName, nextValue)

      else
        el.on(eventName, nextValue)
    }
    else {
      el[key] = nextValue === '' ? true : nextValue
    }
  },
  insert(el, parent) {
    if (parent?.tag === 'App' && el?.tag !== 'Leafer') {
      return
    }
    if (el && parent)
      parent.add(el)
  },
  remove(el) {
    el?.destroy()
  },
  createText(text) {
    const trimmedText = text.trim()
    if (trimmedText) {
      log([
        {
          content: 'Direct text writing is not supported, please use ',
        },
        {
          color: '#6eacf8',
          backgroundColor: '#222222',
          content: `<Text text="${trimmedText}" />`,
        },
        {
          content: ' instead',
        },
      ])
    }
    return new Empty() as unknown as IUI
  },
  createComment() {
    return new Empty() as unknown as IUI
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node?.parent as IUI
  },
  nextSibling(node) {
    if (!node || !node.parent)
      return null

    const children = node.parent.children
    const index = children.findIndex(_node => _node.innerId === node.innerId)
    return index + 1 < children.length ? children[index + 1] : null
  },
})
