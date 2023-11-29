import type { DefineComponent } from '@vue/runtime-core'
import type {
  ChildEvent,

  DragEvent,
  DropEvent,
  IBoxInputData,
  ICanvasInputData,
  IEllipseInputData,
  IFrameInputData,
  IGroupInputData,
  IImageInputData,
  ILeaferConfig,
  ILineInputData,
  IPolygonInputData,

  IRectInputData,
  IStarInputData,
  ITextInputData,
  ImageEvent,
  LayoutEvent,
  LeaferEvent,
  MoveEvent,
  PointerEvent,
  PropertyEvent,
  RenderEvent,
  ResizeEvent,
  RotateEvent,
  SwipeEvent,
  WatchEvent,
  ZoomEvent,
} from 'leafer-ui'

export { usePlugin } from 'leafer-ui'

type LeaferComponent<T, K> = DefineComponent<T & K>
type RequiredField<T, K extends keyof T> = T & { [P in K]-?: T[P] }

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

  /**
   * @description ImageEvent
   * @param e
   */
  onImageLoaded: (e: ImageEvent) => void
  onImageError: (e: ImageEvent) => void
}>

type _LeaferEvent = Partial<{
  onLeaferStart: (e: LeaferEvent) => void
  onLeaferBefore_ready: (e: LeaferEvent) => void
  onLeaferReady: (e: LeaferEvent) => void
  onLeaferAfter_ready: (e: LeaferEvent) => void
  onLeaferView_ready: (e: LeaferEvent) => void
  onLeaferStop: (e: LeaferEvent) => void
  onLeaferRestart: (e: LeaferEvent) => void
  onLeaferEnd: (e: LeaferEvent) => void

  onResize: (e: ResizeEvent) => void

  onRenderRequest: (e: RenderEvent) => void
  onRenderStart: (e: RenderEvent) => void
  onRenderBefore: (e: RenderEvent) => void
  onRender: (e: RenderEvent) => void
  onRenderAgain: (e: RenderEvent) => void
  onRenderEnd: (e: RenderEvent) => void

  onLayoutRequest: (e: LayoutEvent) => void
  onLayoutStart: (e: LayoutEvent) => void
  onLayoutBefore: (e: LayoutEvent) => void
  onLayout: (e: LayoutEvent) => void
  onLayoutAfter: (e: LayoutEvent) => void
  onLayoutAgain: (e: LayoutEvent) => void
  onLayoutEnd: (e: LayoutEvent) => void

  onWatchRequest: (e: WatchEvent) => void
  onWatchData: (e: WatchEvent) => void

  onChildAdd: (e: ChildEvent) => void
  onChildRemove: (e: ChildEvent) => void

  onPropertyChange: (e: PropertyEvent) => void
}>

type LfEvent = _LeaferEvent & LeaferBaseEvent

interface IAppInputData extends ILeaferConfig {
  fullScreen?: boolean
}

export const lfApp: DefineComponent<IAppInputData>
export const lfLeafer: LeaferComponent<IAppInputData, LfEvent>

export const lfFrame: LeaferComponent<IFrameInputData, LeaferBaseEvent>
export const lfBox: LeaferComponent<IBoxInputData, LeaferBaseEvent>
export const lfGroup: LeaferComponent<IGroupInputData, LeaferBaseEvent>

export const lfRect: LeaferComponent<IRectInputData, LeaferBaseEvent>
export const lfEllipse: LeaferComponent<IEllipseInputData, LeaferBaseEvent>
export const lfPolygon: LeaferComponent<IPolygonInputData, LeaferBaseEvent>
export const lfLine: LeaferComponent<ILineInputData, LeaferBaseEvent>
export const lfStar: LeaferComponent<IStarInputData, LeaferBaseEvent>

export const lfImage: DefineComponent<IImageInputData & LeaferBaseEvent>
export const lfCanvas: DefineComponent<ICanvasInputData & LeaferBaseEvent>

type _TextInputData = RequiredField<ITextInputData, 'text'>
export const lfText: LeaferComponent<_TextInputData, LeaferBaseEvent>
