import { Box, Frame, Group } from 'leafer-ui'
import type { Container } from './types'

const containerConstructors = {
  Frame,
  Box,
  Group,
}

export function useCreateContainer(container: Container, config: any) {
  const constructor = containerConstructors[container]
  const instance = new constructor(config)
  return instance
}
