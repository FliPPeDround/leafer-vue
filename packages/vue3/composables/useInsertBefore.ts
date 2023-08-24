import { getCurrentInstance } from 'vue'

export function useInsertBefore(canvas: HTMLCanvasElement) {
  const selfElement = getCurrentInstance()?.vnode.el as HTMLElement
  const parentElement = selfElement.parentElement!
  const nextElement = selfElement?.nextElementSibling
  parentElement.insertBefore(canvas, nextElement)
}
