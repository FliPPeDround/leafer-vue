import { UI } from 'leafer-ui'
import type { Geometry } from './types'

export function createGeometry(geometry: Geometry, config: any) {
  return UI.one({
    tag: geometry,
    ...config,
  })
}
