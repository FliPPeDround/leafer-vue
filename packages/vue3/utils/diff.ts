export function diff(oldValue: Record<string, any>, newValue: Record<string, any>) {
  const result: Record<string, any> = {}

  for (const key in newValue) {
    if (oldValue[key] !== newValue[key])
      result[key] = newValue[key]
  }

  return result
}
