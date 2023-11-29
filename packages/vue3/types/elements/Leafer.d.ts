import type { DefineComponent } from '@vue/runtime-core'
import type { ILeaferConfig } from '@leafer-ui/interface'

type LeaferComponent<T, K> = DefineComponent<K & T>
export type Leafer = LeaferComponent<ILeaferConfig, LfEvent>
