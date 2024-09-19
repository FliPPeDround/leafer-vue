import type { IUI } from '@leafer-ui/interface'
import { diff } from '@/utils'
import { watch } from 'vue-demi'
import { useGetPropsByAttrs } from '.'

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
