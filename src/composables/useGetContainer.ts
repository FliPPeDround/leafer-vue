import type { Leafer } from 'leafer-ui'
import { getCurrentInstance } from 'vue'

export function useGetContainer(): Leafer {
  const parent = getCurrentInstance()?.parent
  if (!parent)
    throw new Error('useGetContainer must be called within a parent')

  const container = parent.exposed?.container
  if (!container)
    throw new Error('useGetContainer must be called within a container')

  return container
}
