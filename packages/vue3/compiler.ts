const elementNames = [
  'Leafer',
  'Frame',
  'Box',
  'Group',

  'Rect',
  'Ellipse',
  'Polygon',
  'Line',
  'Star',

  'Path',
  'Pen',

  'Image',
  'SVG',
  'Canvas',

  'Text',
]

export function isCustomElement(name: string) {
  return elementNames.includes(name)
}

export const compilerOptions = {
  isCustomElement,
}
