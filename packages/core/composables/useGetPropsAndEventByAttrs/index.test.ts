import { describe, expect, it } from 'vitest'
import { useGetPropsAndEventByAttrs } from '.'

describe('test leafer_vue', () => {
  it('test leafer-vue.useGetPropsAndEventByAttrs', () => {
    const attrs = {
      onPointerMove: () => {},
      test: 'test',
    }
    const { config, events } = useGetPropsAndEventByAttrs(attrs)
    expect(config).toEqual({ test: 'test' })
    expect(events).toMatchInlineSnapshot(`
      {
        "pointer.move": [Function],
      }
    `)
  })
})
