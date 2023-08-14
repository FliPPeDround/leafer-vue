export const NodesType = [
  'Rect', 'Ellipse', 'Polygon', 'Star', 'Line',
  'Image', 'Canvas',
  'Text',
  'Path', 'Pen',
] as const

// 获取GeometriesType枚举类型
export type Node = typeof NodesType[number]
