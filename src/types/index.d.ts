import type { DefineComponent } from '@vue/runtime-core'
import type { ILeaferConfig, IFrameInputData  } from 'leafer-ui'

type LeaferEvent = Partial<{
    onPointerDown: (e: PointerEvent) => void
    onPointerUp: (e: PointerEvent) => void
    onPointerMove: (e: PointerEvent) => void
    onPointerEnter: (e: PointerEvent) => void
    onPointerLeave: (e: PointerEvent) => void
}>

type LeaferComponent<T, K> = DefineComponent<{
    readonly config?: T
} & readonly K & readonly T>

declare const lfUi: LeaferComponent<ILeaferConfig, LeaferEvent>

declare const lfFrame: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfBox: LeaferComponent<IFrameInputData, LeaferEvent>

declare const lfCircle: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfEllipse: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfLine: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfPolygon: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfPolyline: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfRect: LeaferComponent<IFrameInputData, LeaferEvent>
