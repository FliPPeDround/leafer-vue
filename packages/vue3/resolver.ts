import type { ComponentResolver } from 'unplugin-vue-components'

export function LeaferVueResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^lf[A-Z]/))
        return { name, from: 'leafer-vue' }
    },
  }
}
