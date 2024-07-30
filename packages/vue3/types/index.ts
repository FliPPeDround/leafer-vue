import type { ILeaferConfig, IRectInputData } from '@leafer-ui/interface'
import type { LeaferVueComponent } from './LeaferVueComponent'

interface LeaferVueComponents {
  LeaferApp: LeaferVueComponent<ILeaferConfig>
  Rect: LeaferVueComponent<IRectInputData>
}

declare module 'vue' {
  export interface GlobalComponents extends LeaferVueComponents {}
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends LeaferVueComponents {}
}

declare module '@vue/runtime-dom' {
  interface GlobalComponents extends LeaferVueComponents {}
}
