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
  'Custom',
]

export function isCustomElement(name: string, customElements: string[] = []) {
  return [...customElements, ...elementNames].includes(name)
}

export const compilerOptions = {
  isCustomElement,
}
