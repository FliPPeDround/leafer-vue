import type { IBoxInputData, ICanvasInputData, IEllipseInputData, IFrameInputData, IGroupInputData, IImageInputData, ILeaferInputData, ILineInputData, IPathInputData, IPenInputData, IPolygonInputData, IRectInputData, IStarInputData, ITextInputData } from '@leafer-ui/interface'
import type { LeaferVueComponent } from './LeaferVueComponent'
import type { _LeaferEvent } from './LeaferEventType'

interface LeaferVueComponents {
  Leafer: LeaferVueComponent<ILeaferInputData & _LeaferEvent>
  Frame: LeaferVueComponent<IFrameInputData>
  Box: LeaferVueComponent<IBoxInputData>
  Group: LeaferVueComponent<IGroupInputData>

  Rect: LeaferVueComponent<IRectInputData>
  Ellipse: LeaferVueComponent<IEllipseInputData>
  Polygon: LeaferVueComponent<IPolygonInputData>
  Star: LeaferVueComponent<IStarInputData>
  Line: LeaferVueComponent<ILineInputData>

  Path: LeaferVueComponent<IPathInputData>
  Pen: LeaferVueComponent<IPenInputData>

  Image: LeaferVueComponent<IImageInputData>
  Canvas: LeaferVueComponent<ICanvasInputData>

  Text: LeaferVueComponent<ITextInputData>
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
