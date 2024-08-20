import type { IAppInputData, IBoxInputData, ICanvasInputData, IEllipseInputData, IFrameInputData, IGroupInputData, IImageInputData, ILeaferInputData, ILineInputData, IPathInputData, IPenInputData, IPolygonInputData, IRectInputData, IStarInputData, ITextInputData } from '@leafer-ui/interface'
import type { LeaferVueComponent } from './LeaferVueComponent'

interface LeaferVueComponents {
  LeaferApp: LeaferVueComponent<IAppInputData>

  Leafer: LeaferVueComponent<ILeaferInputData>
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
