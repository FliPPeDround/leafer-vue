export function getEventNameByAttrName(attrName: string) {
  let result = ''
  for (let i = 2; i < attrName.length; i++) {
    const char = attrName[i]
    if (char === char.toUpperCase()) {
      if (i !== 2)
        result += '.'

      result += char.toLowerCase()
    }
    else {
      result += char
    }
  }
  return result
}
