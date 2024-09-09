import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'leafer-vue',
  description: 'leafer-vue document',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/guide/start/introduction' },
          { text: '使用', link: '/guide/start/usage' },
        ],
      },
      {
        text: '应用组件',
        items: [
          {
            text: 'LeaferApp',
            link: '/guide/components/app/leaferApp',
          },
          {
            text: 'Leafer',
            link: '/guide/components/app/leafer',
          },
        ],
      },
      {
        text: '容器组件',
        items: [
          {
            text: 'Frame',
            link: '/guide/components/container/frame',
          },
          {
            text: 'Box',
            link: '/guide/components/container/box',
          },
          {
            text: 'Group',
            link: '/guide/components/container/group',
          },
        ],
      },
      {
        text: '图形组件',
        items: [
          {
            text: 'Rect',
            link: '/guide/components/shape/rect',
          },
          {
            text: 'Ellipse',
            link: '/guide/components/shape/ellipse',
          },
          {
            text: 'Polygon',
            link: '/guide/components/shape/polygon',
          },
          {
            text: 'Star',
            link: '/guide/components/shape/star',
          },
          {
            text: 'Line',
            link: '/guide/components/shape/line',
          },
        ],
      },
      {
        text: '路径组件',
        items: [
          {
            text: 'Path',
            link: '/guide/components/path/path',
          },
          {
            text: 'Pen',
            link: '/guide/components/path/pen',
          },
        ],
      },
      {
        text: '图像组件',
        items: [
          {
            text: 'Image',
            link: '/guide/components/image/image',
          },
          {
            text: 'Canvas',
            link: '/guide/components/image/canvas',
          },
        ],
      },
      {
        text: '文字组件',
        items: [
          {
            text: 'Text',
            link: '/guide/components/text/text',
          },
        ],
      },
      {
        text: '自定义元素',
        items: [
          {
            text: '自定义元素',
            link: '/guide/components/custom/index',
          },
        ],
      },
      {
        text: '事件',
        items: [
          {
            text: '事件处理',
            link: '/guide/events/index',
          },
          {
            text: '交互事件',
            items: [
              { text: 'Pointer', link: '/guide/events/Pointer/pointer' },
              { text: 'Drag', link: '/guide/events/Drag/drag' },
              { text: 'Drop', link: '/guide/events/Drop/drop' },
              { text: 'Swipe', link: '/guide/events/Swipe/swipe' },
              { text: 'Move', link: '/guide/events/Move/move' },
              { text: 'Zoom', link: '/guide/events/Zoom/zoom' },
              { text: 'Rotate', link: '/guide/events/Rotate/rotate' },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FliPPeDround/leafer-vue' },
    ],
  },
  markdown: {
    config: md => md.use(mdPlugin),
  },
})
