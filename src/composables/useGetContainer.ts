import type { Leafer } from 'leafer-ui'
import { getCurrentInstance } from 'vue'

export function useGetContainer(): Leafer {
  const exposed = getCurrentInstance()?.parent?.exposed
  if (!exposed)
    throw new Error('useGetContainer must be called within a component')

  const containerList = ['leafer', 'frame', 'box', 'group']
  const container = containerList.find(item => item in exposed)

  if (!container)
    throw new Error('useGetContainer must be called within a component')

  return exposed[container]
}
