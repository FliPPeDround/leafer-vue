import '@vue/runtime-core'
import type { Leafer as ILeafer } from './elements/Leafer.d'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Leafer: ILeafer
  }
}

export {}
