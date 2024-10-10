import type { IAppInputData, IBoxInputData, ICanvasInputData, IEllipseInputData, IFrameInputData, IGroupInputData, IImageInputData, ILeaferInputData, ILineInputData, IPathInputData, IPenInputData, IPolygonInputData, IRectInputData, IStarInputData, ITextInputData } from '@leafer-ui/interface'
import type { _LeaferEvent } from './LeaferEventType'
import type { LeaferVueComponent } from './LeaferVueComponent'

interface LeaferVueComponents {
  /**
   * Create a Leafer app
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/app/leafer.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Leafer: LeaferVueComponent<ILeaferInputData & _LeaferEvent>

  /**
   * Create a frame, Similar to pages in HTML5
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/container/frame.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Frame: LeaferVueComponent<IFrameInputData>
  /**
   * Create a box, Similar to the DIV in HTML5, it can be nested continuously
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/container/box.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Box: LeaferVueComponent<IBoxInputData>
  /**
   * Create a group, Similar to the DIV in HTML5, it has no style of its own and can be nested continuously
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/container/group.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Group: LeaferVueComponent<IGroupInputData>

  /**
   * Create a rectangle
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/shape/rect.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Rect: LeaferVueComponent<IRectInputData>
  /**
   * Create an ellipse
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/shape/ellipse.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Ellipse: LeaferVueComponent<IEllipseInputData>
  /**
   * Create a polygon
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/shape/polygon.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Polygon: LeaferVueComponent<IPolygonInputData>
  /**
   * Create a star
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/shape/star.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Star: LeaferVueComponent<IStarInputData>
  /**
   * Create a line
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/shape/line.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Line: LeaferVueComponent<ILineInputData>

  /**
   * Create a path, can draw a graphic of any shape.
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/path/path.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Path: LeaferVueComponent<IPathInputData>
  /**
   * Create a pen, can draw a graphic of any shape.
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/path/pen.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Pen: LeaferVueComponent<IPenInputData>

  /**
   * Image object, all graphics support displaying pictures through *fill*
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/image/image.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Image: LeaferVueComponent<IImageInputData>
  /**
   * Canvas object that can freely draw, manipulate pixels, or directly draw other graphics onto the Canvas
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/image/canvas.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Canvas: LeaferVueComponent<ICanvasInputData>

  /**
   * Draw text. The text display effect is basically the same as that of HTML5
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/components/text/text.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Text: LeaferVueComponent<ITextInputData>

  /**
   * Custom component, must have a *is* property
   * ***
   * [Document](https://leafer-vue.netlify.app/guide/custom/custom.html)
   * |
   * [Playground](https://leafer-vue.netlify.app/play/)
   */
  Custom: LeaferVueComponent<{
    is: new () => unknown
  }>
}

declare module 'vue' {
  interface GlobalComponents extends LeaferVueComponents {}
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends LeaferVueComponents {}
}

declare module '@vue/runtime-dom' {
  interface GlobalComponents extends LeaferVueComponents {}
}

/**
 * The root component used to create a Leafer application. All Leafer elements must be child components of it.
 * ***
 * [Document](https://leafer-vue.netlify.app/guide/components/app/leaferApp.html)
 * |
 * [Playground](https://leafer-vue.netlify.app/play/)
 */
declare const LeaferApp: LeaferVueComponent<IAppInputData>
export { LeaferApp }
