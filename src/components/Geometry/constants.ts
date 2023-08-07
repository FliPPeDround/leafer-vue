export const GeometriesType = [
  'Rect', 'Ellipse', 'Polygon', 'Star', 'Line',
  'Image', 'Canvas',
] as const

// 获取GeometriesType枚举类型
export type Geometry = typeof GeometriesType[number]
