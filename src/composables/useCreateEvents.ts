import type { IUI } from 'leafer-ui'
import { onUnmounted } from 'vue'

export function useCreateEvents(events: Record<string, (any)>, instance: IUI) {
  Object.keys(events).forEach((key) => {
    const eventName = key as keyof typeof events
    instance.on(eventName, events[key])

    onUnmounted(() => {
      instance.off(eventName, events[key])
    })
  })
}
