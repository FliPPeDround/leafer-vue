import { watch } from 'vue'
import type { IUI } from 'leafer-ui'
import { isEqual } from 'lodash-es'
import { useGetPropsByAttrs } from '.'
import { diff } from '@/utils'

export function useEffectUpdate(
  props: Record<string, any>,
  attrs: Record<string, any>,
  instance: IUI,
) {
  watch(
    () => props.config,
    (newProps, oldProps) => {
      if (isEqual(newProps, oldProps))
        return
      const config = useGetPropsByAttrs(attrs)
      const diffConfig = diff(
        { ...oldProps, ...config },
        { ...newProps, ...config },
      )
      diffConfig && instance.set(diffConfig)
    },
  )

  watch(
    () => useGetPropsByAttrs(attrs),
    (newConfig, oldConfig) => {
      const diffConfig = diff(
        { ...props.config, ...oldConfig },
        { ...props.config, ...newConfig },
      )
      diffConfig && instance.set(diffConfig)
    },
  )
}
