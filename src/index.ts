import { lfContainer } from './components/Container'
import { lfNode } from './components/Node'

// import { GeometriesType } from '@/components/Node/constants'

export * from './components/LeaferUi'
// Containers
export const lfFrame = lfContainer('Frame')
export const lfBox = lfContainer('Box')
export const lfGroup = lfContainer('Group')

// Geometries
export const lfRect = lfNode('Rect')
export const lfEllipse = lfNode('Ellipse')
export const lfLine = lfNode('Line')
export const lfPolygon = lfNode('Polygon')
export const lfStar = lfNode('Star')

// Images
export const lfImage = lfNode('Image')
export const lfCanvas = lfNode('Canvas')

// Text
export const lfText = lfNode('Text')

// Path
export const lfPath = lfNode('Path')
export const lfPen = lfNode('Pen')
