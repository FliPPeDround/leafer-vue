import { watch } from 'vue-demi'
import type { IUI } from '@leafer-ui/interface'
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
      if (diffConfig) {
        instance.set(diffConfig)
      }
    },
  )
}
