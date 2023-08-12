import type { Leafer } from 'leafer-ui'
import { getCurrentInstance } from 'vue'

export function useGetContainer(lf?: string) {
  try {
    return getCurrentInstance()?.parent?.exposed as Leafer
  }
  catch {
    throw new Error('unFind container')
  }
}
