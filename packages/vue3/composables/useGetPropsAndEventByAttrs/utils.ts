export function getEventNameByAttrName(attrName: string) {
  return attrName
    .slice(2)
    .replace(/([A-Z])/g, (_, letter, index) => index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`)
}
