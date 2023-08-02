import { getEventNameByAttrName } from './utils'

export function useGetPropsAndEventByAttrs(attrs: Record<string, any>) {
  const config: Record<string, any> = {}
  const events: Record<string, any> = {}
  Object.keys(attrs).forEach((key) => {
    if (key.startsWith('on'))
      events[getEventNameByAttrName(key)] = attrs[key]

    else
      config[key] = attrs[key]
  })
  return { config, events }
}
