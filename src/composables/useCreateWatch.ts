import { watch } from 'vue'

export function useCreateWatch(config) {
  const { leafer, props } = config
  const { width, height } = props
  watch(() => width, () => {
    leafer.resize(width, height)
  })
  watch(() => height, () => {
    leafer.resize(width, height)
  })
}
