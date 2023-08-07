import type { DefineComponent } from '@vue/runtime-core'
import type {
  DragEvent,
  DropEvent,
  IFrameInputData,
  IBoxInputData,
  IImageInputData,
  ICanvasInputData,
  IEllipseInputData,
  IRectInputData,
  IStarInputData,
  ILineInputData,
  IPolygonInputData,

  ILeaferConfig,
  MoveEvent,
  PointerEvent,
  RotateEvent,
  SwipeEvent,
  ZoomEvent,
  ImageEvent,
} from 'leafer-ui'
import { type } from 'os'

type LeaferBaseEvent = Partial<{
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



type LeaferComponent<T, K> = DefineComponent<K & T>

declare const lfUi: LeaferComponent<ILeaferConfig, LeaferBaseEvent>

declare const lfFrame: LeaferComponent<IFrameInputData, LeaferBaseEvent>
declare const lfBox: LeaferComponent<IBoxInputData, LeaferBaseEvent>

declare const lfRect: LeaferComponent<IRectInputData, LeaferBaseEvent>
declare const lfEllipse: LeaferComponent<IEllipseInputData, LeaferBaseEvent>
declare const lfPolygon: LeaferComponent<IPolygonInputData, LeaferBaseEvent>
declare const lfLine: LeaferComponent<ILineInputData, LeaferBaseEvent>
declare const lfStar: LeaferComponent<IStarInputData, LeaferBaseEvent>

type _LeaferImageEvent = Partial<{
   onImageLoaded: (e: ImageEvent) => void
   onImageError: (e: ImageEvent) => void
}>

type LeaferImageEvent = _LeaferImageEvent & LeaferBaseEvent

declare const lfImage: DefineComponent<IImageInputData & LeaferImageEvent>
declare const lfCanvas: DefineComponent<ICanvasInputData & LeaferBaseEvent>
