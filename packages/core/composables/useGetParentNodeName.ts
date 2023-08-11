import { getCurrentInstance } from 'vue'

export function useGetParentNodeName() {
  return getCurrentInstance()?.parent?.type.name
}
