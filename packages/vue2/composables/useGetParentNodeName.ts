import { getCurrentInstance } from 'vue-demi'

export function useGetParentNodeName() {
  return getCurrentInstance()?.proxy?.$parent?.$options.name
}
