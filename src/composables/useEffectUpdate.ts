import { watch } from 'vue'
import type { IUI } from 'leafer-ui'
import { useGetPropsByAttrs } from '.'
import { diff } from '@/utils'

export function useEffectUpdate(
  attrs: Record<string, any>,
  instance: IUI,
) {
  watch(
    () => useGetPropsByAttrs(attrs),
    (newConfig, oldConfig) => {
      const diffConfig = diff(oldConfig, newConfig)
      diffConfig && instance.set(diffConfig)
    },
  )
}
