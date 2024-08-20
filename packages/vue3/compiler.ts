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
  'Canvas',

  'Text',
]

export function isCustomElement(name: string) {
  return elementNames.includes(name)
}

export const compilerOptions = {
  isCustomElement,
}
