import type { DefineComponent } from '@vue/runtime-core'
import type { ILeaferConfig, IFrameInputData  } from 'leafer-ui'

interface LeaferEvent {
    onPointerDown?: (e: PointerEvent) => void
    onPointerUp?: (e: PointerEvent) => void
    onPointerMove?: (e: PointerEvent) => void
    onPointerEnter?: (e: PointerEvent) => void
    onPointerLeave?: (e: PointerEvent) => void
}

type LeaferComponent<T, K> = DefineComponent<{
    config: T
} & K & T>

declare const lfUi: LeaferComponent<ILeaferConfig, LeaferEvent>

declare const lfFrame: LeaferComponent<IFrameInputData, LeaferEvent>
