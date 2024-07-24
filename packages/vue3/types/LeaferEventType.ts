import type {

  IDragEvent,
  IDropEvent,
  IImageEvent,
  IMoveEvent,
  IPointerEvent,
  IRotateEvent,
  ISwipeEvent,
  IZoomEvent,
} from '@leafer-ui/interface'

export interface LeaferBaseEvent {
  /**
   * @description IPointerEvent
   * @param e
   */
  onPointerDown: (e: IPointerEvent) => void
  onPointerMove: (e: IPointerEvent) => void
  onPointerUp: (e: IPointerEvent) => void
  onPointerOver: (e: IPointerEvent) => void
  onPointerOut: (e: IPointerEvent) => void
  onPointerEnter: (e: IPointerEvent) => void
  onPointerLeave: (e: IPointerEvent) => void
  onTap: (e: IPointerEvent) => void
  onDouble_tap: (e: IPointerEvent) => void
  onLong_press: (e: IPointerEvent) => void
  onLong_tap: (e: IPointerEvent) => void
  /**
   *
   * @deprecated use Tap instead of click
   */
  onClick: (e: IPointerEvent) => void
  /**
   *
   * @deprecated use onDouble_tap instead
   */
  onDouble_click: (e: IPointerEvent) => void

  /**
   * @description IDragEvent
   * @param e
   */
  onDrag: (e: IDragEvent) => void
  onDragStart: (e: IDragEvent) => void
  onDragEnd: (e: IDragEvent) => void
  onDragOver: (e: IDragEvent) => void
  onDragOut: (e: IDragEvent) => void
  onDragEnter: (e: IDragEvent) => void
  onDragLeave: (e: IDragEvent) => void

  /**
   * @description DropEvent
   * @param e
   */
  onDrop: (e: IDropEvent) => void

  /**
   * @description ISwipeEvent
   * @param e
   */
  onSwipeLeft: (e: ISwipeEvent) => void
  onSwipeRight: (e: ISwipeEvent) => void
  onSwipeUp: (e: ISwipeEvent) => void
  onSwipeDown: (e: ISwipeEvent) => void

  /**
   * @description IMoveEvent
   * @param e
   */
  onMoveStart: (e: IMoveEvent) => void
  onMove: (e: IMoveEvent) => void
  onMoveEnd: (e: IMoveEvent) => void

  /**
   * @description IZoomEvent
   * @param e
   */
  onZoomStart: (e: IZoomEvent) => void
  onZoom: (e: IZoomEvent) => void
  onZoomEnd: (e: IZoomEvent) => void

  /**
   *  @description IRotateEvent
   * @param e
   */
  onRotateStart: (e: IRotateEvent) => void
  onRotate: (e: IRotateEvent) => void
  onRotateEnd: (e: IRotateEvent) => void

  /**
   * @description IImageEvent
   * @param e
   */
  onImageLoaded: (e: IImageEvent) => void
  onImageError: (e: IImageEvent) => void
}
