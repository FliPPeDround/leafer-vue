import type { Leafer } from 'leafer-ui'
import { getCurrentInstance } from 'vue-demi'

export function useGetContainer(_lf?: string) {
  try {
    const parent = getCurrentInstance()?.proxy?.$parent
    if (parent && 'container' in parent)
      return parent.container as Leafer

    else
      throw new Error('Container not found')
  }
  catch {
    throw new Error('Container not found')
  }
}
