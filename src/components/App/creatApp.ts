import { App, Leafer } from 'leafer-ui'

const AppConstructors = {
  App,
  Leafer,
}

export function createApp(app: 'App' | 'Leafer', config: any) {
  const constructor = AppConstructors[app]
  const instance = new constructor(config)
  return instance
}
