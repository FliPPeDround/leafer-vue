import type { IUI } from '@leafer-ui/interface'
import { watch } from 'vue'
import { useGetPropsByAttrs } from './index'

export function useEffectUpdate(
  attrs: Record<string, any>,
  instance: IUI,
) {
  watch(
    () => useGetPropsByAttrs(attrs),
    (newConfig) => {
      instance.set(newConfig)
    },
  )
}
