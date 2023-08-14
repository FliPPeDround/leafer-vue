import { getCurrentInstance } from 'vue-demi'

export function useInsertBefore(canvas: HTMLCanvasElement) {
  const selfElement = getCurrentInstance()?.proxy?.$el as HTMLElement
  const parentElement = selfElement.parentElement!
  const nextElement = selfElement.nextElementSibling
  parentElement.insertBefore(canvas, nextElement)
}
