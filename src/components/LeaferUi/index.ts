// import { Suspense, defineComponent, h } from 'vue'
// import LeaferView from './_view'

// export const lfUi = defineComponent({
//   name: 'LfUi',
//   setup(_, { attrs, slots }) {
//     return () => {
//       return h(
//         'canvas',
//         { id: '__leafer-ui_container' },
//         h(
//           Suspense,
//           {},
//           {
//             default: () =>
//               h(
//                 LeaferView,
//                 { ...attrs },
//                 {
//                   default: () => slots.default && slots.default(),
//                 },
//               ),
//           },
//         ),
//       )
//     }
//   },
// })
import { defineComponent, getCurrentInstance, onMounted, renderSlot } from 'vue'
import { Leafer } from 'leafer-ui'
import { useCreateEvents, useEffectUpdate, useGetPropsAndEventByAttrs } from '@/composables'

export const lfUi = defineComponent({
  inheritAttrs: false,
  setup(_, { slots, expose, attrs }) {
    const { events, config } = useGetPropsAndEventByAttrs(attrs)
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    const container = new Leafer({
      ...config,
      view: canvas,
      start: false,
    })

    onMounted(() => {
      getCurrentInstance()?.vnode.el!.parentNode.prepend(canvas)
      container.start()
    })

    useEffectUpdate(attrs, container)
    useCreateEvents(events, container)

    expose(container)

    return () => renderSlot(slots, 'default') || null
  },
})
