export function isOn(key: string): boolean {
  return key.charCodeAt(0) === 111 /* o */
    && key.charCodeAt(1) === 110 /* n */
    && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97) /* uppercase letter */
}

export function getEventNameByAttrName(attrName: string) {
  return attrName
    .replace(/^(on:?)?|Once$/g, '')
    .replace(/([A-Z])/g, (_match, letter, index) =>
      index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`)
}
