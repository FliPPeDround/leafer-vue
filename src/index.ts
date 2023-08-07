import { lfContainer } from './components/Container'
import { lfGeometry } from './components/Geometry'

// import { GeometriesType } from '@/components/Geometry/constants'

export * from './components/LeaferUi'
// Containers
export const lfFrame = lfContainer('Frame')
export const lfBox = lfContainer('Box')
export const lfGroup = lfContainer('Group')

// Geometries
export const lfRect = lfGeometry('Rect')
export const lfEllipse = lfGeometry('Ellipse')
export const lfLine = lfGeometry('Line')
export const lfPolygon = lfGeometry('Polygon')
export const lfStar = lfGeometry('Star')

// Images
export const lfImage = lfGeometry('Image')
export const lfCanvas = lfGeometry('Canvas')

// const GeometriesComponents = GeometriesType.map((geometry) => {
//   return { [`lf${geometry}`]: lfGeometry(geometry) }
// })
