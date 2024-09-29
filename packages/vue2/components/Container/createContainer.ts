import type { Container } from './types'
import { Box, Frame, Group } from 'leafer-ui'

const containerConstructors = {
  Frame,
  Box,
  Group,
}

export function createContainer(container: Container, config: any) {
  const constructor = containerConstructors[container]
  const instance = new constructor(config)
  return instance
}
