import type { DefineComponent } from '@vue/runtime-core'
import type {
  DragEvent,
  DropEvent,
  IFrameInputData,
  IImageInputData,

  ILeaferConfig,
  MoveEvent,
  PointerEvent,
  RotateEvent,
  SwipeEvent,
  ZoomEvent,
} from 'leafer-ui'

type LeaferEvent = Partial<{
  /**
     * @description PointerEvent
     * @param e
     */
  onPointerDown: (e: PointerEvent) => void
  onPointerMove: (e: PointerEvent) => void
  onPointerUp: (e: PointerEvent) => void
  onPointerOver: (e: PointerEvent) => void
  onPointerOut: (e: PointerEvent) => void
  onPointerEnter: (e: PointerEvent) => void
  onPointerLeave: (e: PointerEvent) => void
  onTap: (e: PointerEvent) => void
  onDouble_tap: (e: PointerEvent) => void
  onLong_press: (e: PointerEvent) => void
  onLong_tap: (e: PointerEvent) => void
  /**
     *
     * @deprecated use Tap instead of click
     */
  onClick: (e: PointerEvent) => void
  /**
     *
     * @deprecated use onDouble_tap instead
     */
  onDouble_click: (e: PointerEvent) => void

  /**
     * @description DragEvent
     * @param e
     */
  onDrag: (e: DragEvent) => void
  onDragStart: (e: DragEvent) => void
  onDragEnd: (e: DragEvent) => void
  onDragOver: (e: DragEvent) => void
  onDragOut: (e: DragEvent) => void
  onDragEnter: (e: DragEvent) => void
  onDragLeave: (e: DragEvent) => void

  /**
     * @description DropEvent
     * @param e
     */
  onDrop: (e: DropEvent) => void

  /**
     * @description SwipeEvent
     * @param e
     */
  onSwipeLeft: (e: SwipeEvent) => void
  onSwipeRight: (e: SwipeEvent) => void
  onSwipeUp: (e: SwipeEvent) => void
  onSwipeDown: (e: SwipeEvent) => void

  /**
     * @description MoveEvent
     * @param e
     */
  onMoveStart: (e: MoveEvent) => void
  onMove: (e: MoveEvent) => void
  onMoveEnd: (e: MoveEvent) => void

  /**
     * @description ZoomEvent
     * @param e
     */
  onZoomStart: (e: ZoomEvent) => void
  onZoom: (e: ZoomEvent) => void
  onZoomEnd: (e: ZoomEvent) => void

  /**
     *  @description RotateEvent
     * @param e
     */
  onRotateStart: (e: RotateEvent) => void
  onRotate: (e: RotateEvent) => void
  onRotateEnd: (e: RotateEvent) => void
}>

type LeaferComponent<T, K> = DefineComponent< K & T>

declare const lfUi: LeaferComponent<ILeaferConfig, LeaferEvent>

declare const lfFrame: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfBox: LeaferComponent<IFrameInputData, LeaferEvent>

declare const lfCircle: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfEllipse: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfLine: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfPolygon: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfPolyline: LeaferComponent<IFrameInputData, LeaferEvent>
declare const lfRect: LeaferComponent<IFrameInputData, LeaferEvent>

declare const lfImage: LeaferComponent<IImageInputData, LeaferEvent>
